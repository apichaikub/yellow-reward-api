import { expect } from 'chai'
import server from '../../../server'
import request from 'supertest'

const receiptCreateMock = require('../../fixtures/receipt-create.mock.json')
const receiptPointsUpdateMock = require('../../fixtures/receipt-points-update.json')
const tokenAdminMock = require('../../fixtures/token-admin.mock.json')
const tokenUserMock = require('../../fixtures/token-user.mock.json')

describe('Integration Test: Receipt Create', () => {
  let id = null

  it('should able to create a receipt for users', (done) => {
    request(server)
        .post('/receipts')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${tokenUserMock.accessToken}`)
        .send(receiptCreateMock)
        .end((err, response) => {
          if (err) done(err)
          id = response.body.results.id
          expect(response.statusCode).to.equal(200)
          expect(typeof response.body.results).to.equal('object')
          done()
        })
  })

  it('should not be able to give points less than 0', (done) => {
    receiptPointsUpdateMock.points = 0
    request(server)
        .put(`/receipts/${id}/points`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${tokenAdminMock.accessToken}`)
        .send(receiptPointsUpdateMock)
        .end((err, response) => {
          if (err) done(err)
          expect(response.statusCode).to.equal(400)
          done()
        })
  })

  it('should able to give points to a receipt for admins', (done) => {
    receiptPointsUpdateMock.points = 5

    request(server)
        .put(`/receipts/${id}/points`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${tokenAdminMock.accessToken}`)
        .send(receiptPointsUpdateMock)
        .end((err, response) => {
          if (err) done(err)
          expect(response.statusCode).to.equal(200)
          done()
        })
  })

  it('should not be able to create a receipt without acccess token', (done) => {
    request(server)
        .post('/receipts')
        .set('Accept', 'application/json')
        .send(receiptCreateMock)
        .end((err, response) => {
          if (err) done(err)
          expect(response.statusCode).to.equal(401)
          done()
        })
  })
})
