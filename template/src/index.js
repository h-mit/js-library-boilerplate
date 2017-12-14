import numRef from './ref.json'

/**
 * `1` から `5` までの数値を `'One'` から `'Five'` までの文字列に変換するメソッド
 * @param {number} num `1` から `5` までの数値
 * @example webpackNumbers.numToWord(1) // => 'One'
 */
export const numToWord = num => {
  let pair = numRef.find(ref => ref.num === num)
  return pair ? pair.word : ''
}

/**
 * `'One'` から `'Five'` までの文字列を `1` から `5` までの数値に変換するメソッド
 * @param {string} word `'One'` から `'Five'` までの文字列
 * @example webpackNumbers.wordToNum('One') // => 1
 */
export const wordToNum = word => {
  let pair = numRef.find(ref => ref.word === word)
  return pair ? pair.num : -1
}
