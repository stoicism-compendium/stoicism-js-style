/* eslint-disable no-unused-vars -- We're only testing ESLint rules. */

// PASS: This file should not produce any errors.

const commaDangleSingleLineYes = [1, 2]

const commaDangleMultilineNo = {
  a: 'a',
}

function spaceBeforeFunctionParenNamedNo() {}

const spaceBeforeFunctionParenAnonymousYes = function () {}

const spaceBeforeFunctionParenAsyncYes = async () => {}

if (console) {
  console.log('hello')
}
