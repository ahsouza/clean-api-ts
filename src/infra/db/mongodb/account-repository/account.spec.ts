import { MongoHelper } from '../helpers/mongo-helper'
import { AccountMongoRepository } from './account'

describe('Acccount Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  const makeSut = (): AccountMongoRepository => {
    return new AccountMongoRepository()
  }

  test('Should return an account on success', async () => {
    const sut = makeSut()
    const account = await sut.add({
      username: 'any_name',
      email: 'any_email',
      password: 'any_password',
    })
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.username).toBe('any_username')
    expect(account.email).toBe('any_email')
    expect(account.password).toBe('any_password')
  })
})
