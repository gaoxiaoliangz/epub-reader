import express from 'express'
import middleware from '../middleware'
import _ from 'lodash'
import * as endpoints from '../endpoints'
import { ROLES } from '../../isomorphic/constants/common'
const multer = require('multer')

const UPLOADS_DIR = '__uploads__'
const upload = multer({ dest: UPLOADS_DIR })

const authenticatePublic = [
  middleware.prepareApi,
  middleware.parseContext
]

const authenticatePrivate = [
  middleware.prepareApi,
  middleware.parseContext,
  middleware.requirePermissionsOf(ROLES.USER)
]

const authenticateAdmin = [
  middleware.prepareApi,
  middleware.parseContext,
  middleware.requirePermissionsOf(ROLES.ADMIN)
]

function apiRoutes() {
  const router = express.Router()

  // authors
  router.get('/authors/:id', authenticatePublic, endpoints.author.findOne) // basic
  router.get('/authors', authenticatePublic, endpoints.author.list) // basic
  router.post('/authors', authenticatePublic, endpoints.author.add) // basic
  router.put('/authors/:id', authenticatePublic, endpoints.author.update) // basic
  router.delete('/authors/:id', authenticatePublic, endpoints.author.remove) // basic

  // collections
  router.get('/collections/:id', authenticatePublic, endpoints.collection.findOne) // basic
  router.get('/collections', authenticatePublic, endpoints.listCollections)
  router.post('/collections', authenticatePublic, endpoints.collection.add) // basic
  router.put('/collections/:id', authenticatePublic, endpoints.collection.update) // basic
  router.delete('/collections/:id', authenticatePublic, endpoints.collection.remove) // basic

  // books
  router.get('/books/:book', authenticatePublic, endpoints.findBook)
  router.get('/books/:book/content', authenticatePublic, endpoints.resolveBookContent)
  router.get('/books', authenticatePublic, endpoints.listBooks)
  // router.post('/books', authenticateAdmin, endpoints.book.add) // basic
  router.post('/books', authenticateAdmin, upload.single('file'), middleware.logFile, endpoints.addBook) // 处理文件
  router.put('/books/:id', authenticateAdmin, endpoints.book.update) // basic
  router.delete('/books/:id', authenticateAdmin, endpoints.book.remove) // basic

  // tags
  router.get('/tags/:id', authenticatePublic, endpoints.tag.findOne) // basic
  router.get('/tags', authenticatePublic, endpoints.tag.list) // basic
  router.post('/tags', authenticatePublic, endpoints.tag.add) // basic
  router.put('/tags/:id', authenticatePublic, endpoints.tag.update) // basic
  router.delete('/tags/:id', authenticatePublic, endpoints.tag.remove) // basic

  // users
  router.get('/users', authenticateAdmin, endpoints.user.list) // basic
  router.post('/users', authenticatePublic, endpoints.addUser)

  // user
  router.get('/user/profile', authenticatePrivate, endpoints.findUser)
  router.get('/user/books/shelf', authenticatePrivate, endpoints.listShelfBooks)

  // progress
  router.get('/user/books/:book/progress', authenticatePrivate, endpoints.getReadingProgress)
  router.put('/user/books/:book/progress', authenticatePrivate, endpoints.setReadingProgress)

  // file
  router.get('/files/:file', authenticateAdmin, endpoints.readFile)
  router.delete('/files/:file', authenticateAdmin, endpoints.delFile)

  // auth
  router.post('/auth', authenticatePublic, middleware.auth.basicAuth)
  router.get('/auth', authenticatePublic, middleware.auth.check)
  router.put('/auth/revoke', authenticatePublic, middleware.auth.revoke)

  return router
}

export default function setupApiApp() {
  const apiApp = express()

  apiApp.use(apiRoutes())

  apiApp.use(middleware.handleApiNotFound)
  apiApp.use(middleware.handleJSONResponse)
  apiApp.use(middleware.handleError)

  return apiApp
}
