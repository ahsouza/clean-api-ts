import { EmailValidatorAdapter } from './email-validator'

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}

describe('EmailValidator Adapter', () => {
  test('Should return false if validator returns false', () => {
    const sut = makeSut()
    const isValid = sut.isValid('invalid_email@dominio.com')
    expect(isValid).toBe(false)
  })
})