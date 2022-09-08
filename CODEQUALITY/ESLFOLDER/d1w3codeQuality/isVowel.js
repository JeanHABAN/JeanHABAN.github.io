/* eslint-disable*/;
"use strict";
/**
 * 
 * @param {string} vowel is a character  
 * @returns return true if it is vowel else return false
 */

function isVowel(vowel){
  let vow = vowel.toLowerCase();
   if(vow=="a" || vow=="e" || vow=="i" || vow=="o" || vow=="u" ){
       return true;
   }
return false;
}
const assert = require("assert");
describe("isVowel", function () {
  it("a is vowel", function () {
  assert.equal(isVowel("a"), true);
  });
  it("e is vowel", function () {
  assert.equal(isVowel("e"), true);
  });
  it("i is vowel", function () {
  assert.equal(isVowel("i"), true);
  });
  it("o is vowel", function () {
  assert.equal(isVowel("o"), true);
  });
  it("u is vowel", function () {
  assert.equal(isVowel("u"), true);
  });
  it("z is not vowel", function () {
  assert.equal(isVowel("z"), false);
  });
  it("5 is not vowel", function () {
  assert.equal(isVowel("5"), false);
  });
 });

