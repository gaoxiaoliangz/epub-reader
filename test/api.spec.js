import request from 'supertest'
import app from '../bin/server'
import assert from 'assert'

const apiRoot = '/api'

describe('API tests', () => {
  describe('books', () => {
    describe('GET /books', () => {
      it('respond with json', done => {
        request(app)
          .get(`${apiRoot}/books`)
          .set('Accept', 'application/json')
          .expect(200)
          .expect('Content-Type', /json/, done)
      })
    })

    describe('GET /book/:book', () => {
      it('404', done => {
        request(app)
          .get(`${apiRoot}/books/10000`)
          .set('Accept', 'application/json')
          .expect(404)
          .expect('Content-Type', /json/, done)
      })
    })
  })

  describe('users', () => {
    describe('GET /users', () => {
      it('forbiden vistor mode and respond with json', done => {
        request(app)
          .get(`${apiRoot}/users`)
          .set('Accept', 'application/json')
          .expect(403)
          .expect('Content-Type', /json/, done)
      })
    })
  })
})

