function parseEquation(equation) {
  if(typeof equation === "string") {
    return parseEquation({
      left: equation,
      right: "0",
      operator: "+",
    })
  }

  if(equation.left.indexOf('+') !== -1) {
    equation.left = parseEquation({
      left: equation.left.split(/\+(.+)/)[0],
      right: equation.left.split(/\+(.+)/)[1],
      operator: '+',
    })
  }
  else if(equation.left.indexOf('-') !== -1) {
    equation.left = parseEquation({
      left: equation.left.split(/\-(.+)/)[0],
      right: equation.left.split(/\-(.+)/)[1],
      operator: '-',
    })
  }
  else if(equation.left.indexOf('d') !== -1) {
    equation.left = parseEquation({
      left: equation.left.split(/d(.+)/)[0],
      right: equation.left.split(/d(.+)/)[1],
      operator: 'd',
    })
  }

  if(equation.right.indexOf('+') !== -1) {
    equation.right = parseEquation({
      left: equation.right.split(/\+(.+)/)[0],
      right: equation.right.split(/\+(.+)/)[1],
      operator: '+',
    })
  }
  else if(equation.right.indexOf('-') !== -1) {
    equation.right = parseEquation({
      left: equation.right.split(/\-(.+)/)[0],
      right: equation.right.split(/\-(.+)/)[1],
      operator: '-',
    })
  }
  else if(equation.right.indexOf('d') !== -1) {
    equation.right = parseEquation({
      left: equation.right.split(/d(.+)/)[0],
      right: equation.right.split(/d(.+)/)[1],
      operator: 'd',
    })
  }

  return equation
}

function evaluateEquation(equation) {
  if(typeof equation.left === "object") equation.left = evaluateEquation(equation.left)
  if(typeof equation.right === "object") equation.right = evaluateEquation(equation.right)

  equation.left = parseInt(equation.left, 10)
  equation.right = parseInt(equation.right, 10)

  if(equation.operator === '+') return equation.left + equation.right
  if(equation.operator === '-') return equation.left - equation.right
  if(equation.operator === 'd') return d(equation.left, equation.right)
}

export function d(number, sides) {
  let total = 0
  for(let i=0; i < number; i++) {
    const roll = Math.floor(Math.random() * sides) + 1
    total += roll
  }
  return total
}

export function buildEquation(value, equationText) {
  const equation = equationText.text
  const last = equation[equation.length - 1]
  const pristine = equationText.text === ''

  if(value === 'del') return equationText.text = equation.slice(0, -1)

  const currentIsOperator = (['d', '+', '-'].indexOf(value) !== -1)
  const currentIsOperand = (['1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(value) !== -1)
  const previousIsOperator = (['d', '+', '-'].indexOf(last) !== -1)
  const previousIsOperand = (['1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(last) !== -1)

  // cant have 2 operators in a row
  if(previousIsOperator && currentIsOperator) return

  // cant have an operator before a value
  if(pristine && currentIsOperator) return
  equationText.text = `${pristine ? '' : equation}${value}`
}

export function solveEquation(equationText, resultText) {
  const equation = parseEquation(equationText.text)
  const evaluation = evaluateEquation(equation)
  resultText.text = evaluation || 0
}
