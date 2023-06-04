describe('checkEmail', () => {
    it('should return true for valid email', () => {
        const email = 'example@example.com'
        expect(checkEmail(email)).toBeTruthy()
    })

    it('should return false for invalid email', () => {
        const email = 'example@example'
        expect(checkEmail(email)).toBeFalsy()
    })
})

describe('checkPassword', () => {
    it('should return true for valid password', () => {
        const password = 'Abcd12#ef'
        expect(checkPassword(password)).toBeTruthy()
    })

    it('should return false for invalid password', () => {
        const password = 'password'
        expect(checkPassword(password)).toBeFalsy()
    })
})
