import {isPalindrome} from './PalindromeChecker'

describe("Testing isPalindrome Function", () => {
  it('will return true for empty string', ()=> {
    const val = isPalindrome('');
    expect(val).toEqual(true)
  })

})