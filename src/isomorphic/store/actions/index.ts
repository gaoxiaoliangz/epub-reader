export const REMOVE_ENTITY = 'REMOVE_ENTITY'
export interface removeEntity {
  (name: string, id: string): any
}
export const removeEntity: removeEntity = (name, id) => ({
    type: REMOVE_ENTITY,
    name,
    id
  }
)

export * from './components'
export * from './viewer'
export * from './api'
export * from './form'
export * from './test'
