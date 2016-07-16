'use strict'

const Tensor = require('weblearn-tensor')

class Criterion {
  constructor() {
    this.gradInput = new Tensor()
    this.output = 0
  }

  updateOutput(input, target) {

  }

  forward(input, target) {
    return this.updateOutput(input, target)
  }

  backward(input, target) {
    return this.updateGradInput(input, target)
  }

  updateGradInput(input, target) {

  }

  _call(input, target) {
    this.output = this.forward(input, target)
    this.gradInput = this.backward(input, target)
    return {output: this.output, gradInput: this.gradInput}
  }
}

module.exports = Criterion