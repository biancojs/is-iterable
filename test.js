require('jsdom-global')()
const assert = require('assert')
const isIterable = require('./')
const body = document.body

describe('Bianco is isIterable', function() {
  before(function () {
    var div = document.createElement('div')
    div.innerHTML = `
      <ul>
        <li>one
        <li>two
      </ul>
    `
    body.appendChild(div)
  })

  it('An array should be iterable', function() {
    const arr = [1, 2, 3]
    assert.equal(isIterable(arr), true)
  })

  it('A generator should be iterable', function() {
    const gen = (function *() {
      yield Math.random()
    })()
    assert.equal(isIterable(gen), true)
  })

  it('A DOM nodes list should be iterable', function() {
    const lis = document.querySelectorAll('li')
    assert.equal(isIterable(lis), true)
  })

  it('An object should not be iterable', function() {
    const obj = { foo: 'foo', bar: 'bar' }
    assert.equal(isIterable(obj), false)
  })
})