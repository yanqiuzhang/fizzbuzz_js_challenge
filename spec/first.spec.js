require('../spec.helper')

describe('Your test case description', () => {
    let array
    beforeEach(() => {
        array = new Array(2, 3)
    });

    it('add a descriptive test title', () => {
        const sum = array[0] + array[1]
        expect(sum).to.eql(5)
    })
})