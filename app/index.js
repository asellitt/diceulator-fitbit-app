import document from "document"
import * as util from "../common/utils"

// const resultText = document.getElementById("result").getElementById("copy")

const equationText = document.getElementById("equation")
const resultText = document.getElementById("result")

const oneButton = document.getElementById("1")
const twoButton = document.getElementById("2")
const threeButton = document.getElementById("3")
const fourButton = document.getElementById("4")
const fiveButton = document.getElementById("5")
const sixButton = document.getElementById("6")
const sevenButton = document.getElementById("7")
const eightButton = document.getElementById("8")
const nindeButton = document.getElementById("9")
const zeroButton = document.getElementById("0")
const dButton = document.getElementById("d")
const rollButton = document.getElementById("roll")
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const deleteButton = document.getElementById("delete")
const clearButton = document.getElementById("clear")

oneButton.onactivate = (event) => { util.buildEquation(1, equationText) }
twoButton.onactivate = (event) => { util.buildEquation(2, equationText) }
threeButton.onactivate = (event) => { util.buildEquation(3, equationText) }
fourButton.onactivate = (event) => { util.buildEquation(4, equationText) }
fiveButton.onactivate = (event) => { util.buildEquation(5, equationText) }
sixButton.onactivate = (event) => { util.buildEquation(6, equationText) }
sevenButton.onactivate = (event) => { util.buildEquation(7, equationText) }
eightButton.onactivate = (event) => { util.buildEquation(8, equationText) }
nindeButton.onactivate = (event) => { util.buildEquation(9, equationText) }
zeroButton.onactivate = (event) => { util.buildEquation(0, equationText) }
dButton.onactivate = (event) => { util.buildEquation('d', equationText) }
plusButton.onactivate = (event) => { util.buildEquation('+', equationText) }
minusButton.onactivate = (event) => { util.buildEquation('-', equationText) }
deleteButton.onactivate = (event) => { util.buildEquation('del', equationText) }
rollButton.onactivate = (event) => { util.solveEquation(equationText, resultText) }
clearButton.onactivate = (event) => { 
  equationText.text = ''
  resultText.text = ''
}