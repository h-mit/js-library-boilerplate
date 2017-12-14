import _ from 'lodash'
import numRef from './ref.json'

/**
 * `1` から `5` までの数値を `'One'` から `'Five'` までの文字列に変換するメソッド
 * @param {number} num `1` から `5` までの数値
 * @example webpackNumbers.numToWord(1) // => 'One'
 */
export const numToWord = num => {
  return _.reduce(numRef, (accum, ref) => {
    return ref.num === num ? ref.word : accum
  }, '')
}

/**
 * `'One'` から `'Five'` までの文字列を `1` から `5` までの数値に変換するメソッド
 * @param {string} word `'One'` から `'Five'` までの文字列
 * @example webpackNumbers.wordToNum('One') // => 1
 */
export const wordToNum = word => {
  return _.reduce(numRef, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum
  }, -1)
}
