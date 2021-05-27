import PalindromeChecker, {isPalindrome, Result} from './PalindromeChecker'
import { shallow } from 'enzyme'
import React from 'react'

describe("A test suite for the function isPalindrome", () => {
  it("can test palindrome for single character", () => {
    const inputVal = 'a'
    const result = isPalindrome(inputVal)
    expect(result).toEqual(true)
  })

  it("can test palindrome for empty string", () => {
    const inputVal = ''
    const result = isPalindrome(inputVal)
    expect(result).toEqual(true)
  })
})
