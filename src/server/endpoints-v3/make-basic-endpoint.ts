import BasicApi from '../api-v3/basic-api'

const makeBasicEndpoint = (apiFns: BasicApi) => {
  const findOne = (req, res, next) => {
    req.apiResults = apiFns.findOne(req.params.id)
    next()
  }

  const list = (req, res, next) => {
    req.apiResults = apiFns.list(req.query.page || 1)
    next()
  }

  const add = (req, res, next) => {
    req.apiResults = apiFns.add(req.body)
    next()
  }

  const update = (req, res, next) => {
    req.apiResults = apiFns.update(req.params.id, req.body)
    next()
  }

  const remove = (req, res, next) => {
    req.apiResults = apiFns.remove(req.params.id)
    next()
  }

  return { findOne, list, add, update, remove }
}

export default makeBasicEndpoint
