import _ from 'lodash'
import DataTypes from '../data/types'
import parseTextToHtml from '../utils/parseTextToHtml'
import db, { embedRef } from './database'
import errors from '../errors'
import i18n from '../utils/i18n'
import utils from '../utils'
import validate from './validate'
import Schema from './schema'
import outputEmptyEntity from './output-empty-entity'
import paginate from './paginate'

function notFoundError(itemName?) {
  return new errors.NotFoundError(i18n('errors.api.general.notFound', itemName))
}

// todo
// function dataConvention(schema, data) {
//   const arrayTypedFieldKeys = Object.keys(schema.fields).filter(key => schema.fields[key].type
//     && schema.fields[key].type.isArray())

//   const textTypedFieldKeys = Object.keys(schema.fields).filter(key => schema.fields[key].type
//     && schema.fields[key].type.equals(DataTypes.Text))

//   // 处理特殊格式
//   return _.mapValues(data, (val, key) => {
//     if (arrayTypedFieldKeys.indexOf(key) !== -1 && !Array.isArray(val)) {
//       return val.split(',')
//     }

//     // convert Text type to raw and html
//     if (textTypedFieldKeys.indexOf(key) !== -1) {
//       return {
//         html: parseTextToHtml(val),
//         raw: val
//       }
//     }

//     return val
//   })
// }

interface ListRawOptions {
  filter?: (entity, index: number) => boolean
  mapping?: (entity, index: number) => any
  query?: Object
}

interface ListOptions {
  raw?: boolean
  disablePagination?: boolean
  page?: number
  filter?: (entity, index: number) => boolean
  mapping?: (entity, index: number) => any
  query?: Object
}

class Model {
  _schema: Schema
  _tableName: string

  constructor(schema: Schema) {
    this._schema = schema
    this._tableName = schema.name
  }

  outputEmpty(id) {
    return outputEmptyEntity(this._schema.fields, id)
  }

  findOne(idOrQuery: string | Object, raw?: boolean) {
    const query = typeof idOrQuery === 'string'
      ? { _id: idOrQuery }
      : idOrQuery

    return this.list({ raw, disablePagination: true, query }).then(result => {
      const entity = result[0]

      if (!entity) {
        return Promise.reject(notFoundError())
      }

      return entity
    })
  }

  list(options: ListOptions = {}) {
    const { raw, page, disablePagination, filter, mapping, query } = options

    const doQuery = () => {
      const listRaw = listRawQuery => {
        return db.getCollection(this._tableName).then(collection => {
          return collection.find(listRawQuery).toArray()
        })
      }

      const rawResults = listRaw(query || {})

      if (raw) {
        return rawResults
      } else {
        return rawResults.then(results => {
          return embedRef(results, this._schema)
        })
      }
    }

    return doQuery().then(entities => {
      const modifiedEntities = entities
        .filter(filter || (() => true))
        .map(mapping || (entity => entity))

      if (!disablePagination) {
        return paginate(modifiedEntities, {
          page: page || 1
        })
      }

      return modifiedEntities
    })
  }

  listRaw(options: ListRawOptions = {}): Promise<any[]> {
    const { filter, mapping, query } = options

    return this.list({
      disablePagination: true,
      raw: true,
      filter,
      mapping,
      query: query || {}
    })
  }

  add(data) {
    const query = () => {
      let data2 = Object.assign({}, data, {
        _id: Math.random().toFixed(8).substr(2),
        date_created: new Date().toString()
      })

      // data2 = dataConvention(this._schema, data2)

      // 检查是否需要确认唯一性
      const dataToCheck = this._schema.fields
        .filter(field => Boolean(field.unique))
        .map(field => ({
          key: field.name,
          value: data[field.name]
        }))
        .filter(fileld => {
          return Boolean(fileld.value)
        })

      // 过滤出和数据库中已存在数据相匹配的输入项
      if (dataToCheck.length !== 0) {
        const checkingResult = Promise.all(dataToCheck.map(data3 => {
          return db.getRowByMatch({ [data3.key]: data3.value }, this._tableName).then(res => {
            if (res.length !== 0) {
              return data3
            }
            return false as any
          })
        })).then(res => {
          return res.filter(r => r !== false)
        })

        return checkingResult.then(res => {
          if (res.length !== 0) {
            return Promise.reject(new errors.BadRequestError(i18n('errors.schema.unique', res[0].key)))
          }

          return db.getCollection(this._tableName).then(collection => {
            return collection.insert([data2])
          })
        })
      }

      return db.getCollection(this._tableName).then(collection => {
        return collection.insert([data2])
      })
    }

    return utils.reduceTasks([
      validate(data, this._schema),
      query
    ])
  }

  update(query, data, updateConfig: {
    multi?: boolean
    upsert?: boolean
  } = {}) {
    const { multi, upsert } = updateConfig

    const doQuery = () => {
      // todo
      // 添加特殊格式处理
      const data2 = Object.assign({}, data, {
        date_updated: new Date().toString()
      })

      return db.getCollection(this._tableName).then(collection => {
        return collection.update(query, { $set: data2 }, {
          upsert: Boolean(upsert),
          multi: Boolean(multi)
        })
      })
    }

    return utils.reduceTasks([
      validate(data, this._schema, true),
      doQuery
    ])
  }

  remove(match) {
    return db.getCollection(this._tableName).then(collection => {
      return collection.remove(match)
    })
  }
}

export default Model
