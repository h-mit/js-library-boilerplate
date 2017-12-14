import * as webpackNumbers from '@/index'

let numbers = [1, 2, 3, 4, 5]
let words = ['One', 'Two', 'Three', 'Four', 'Five']

test('number to word', () => {
  numbers.forEach((num, index) => {
    expect(webpackNumbers.numToWord(num)).toBe(words[index])
  })
})

