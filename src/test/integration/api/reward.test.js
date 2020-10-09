import { expect } from 'chai'
import server from '../../../server'
import request from 'supertest'

const rewardCreateMock = require('../../fixtures/reward-create.mock.json')
const tokenAdminMock = require('../../fixtures/token-admin.mock.json')
const tokenUserMock = require('../../fixtures/token-user.mock.json')

describe('Integration Test: Reward Create', () => {
  it('should able to create a reward for admins', (done) => {
    request(server)
        .post('/rewards')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${tokenAdminMock.accessToken}`)
        .send(rewardCreateMock)
        .end((err, response) => {
          if (err) done(err)
          expect(response.statusCode).to.equal(200)
          expect(typeof response.body.results).to.equal('object')
          done()
        })
  })

  it('should not be able to create a reward for users', (done) => {
    request(server)
        .post('/rewards')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${tokenUserMock.accessToken}`)
        .send(rewardCreateMock)
        .end((err, response) => {
          if (err) done(err)
          expect(response.statusCode).to.equal(401)
          done()
        })
  })

  it('should not be able to create a reward without acccess token', (done) => {
    request(server)
        .post('/rewards')
        .set('Accept', 'application/json')
        .send(rewardCreateMock)
        .end((err, response) => {
          if (err) done(err)
          expect(response.statusCode).to.equal(401)
          done()
        })
  })

  it('should not be able to create a reward if points less than 0', (done) => {
    rewardCreateMock.points = 0

    request(server)
        .post('/rewards')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${tokenAdminMock.accessToken}`)
        .send(rewardCreateMock)
        .end((err, response) => {
          if (err) done(err)
          expect(response.statusCode).to.equal(400)
          done()
        })
  })

  it('should not be able to create a reward if name is empty', (done) => {
    rewardCreateMock.name = ''

    request(server)
        .post('/rewards')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${tokenAdminMock.accessToken}`)
        .send(rewardCreateMock)
        .end((err, response) => {
          if (err) done(err)
          expect(response.statusCode).to.equal(400)
          done()
        })
  })
})
