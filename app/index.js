import document from "document"
import * as util from "../common/utils"

const equationText = document.getElementById("equation")
const calculatorResultText = document.getElementById("calculatorResult")
document.getElementById("1").onactivate = (event) => { util.buildEquation(1, equationText) }
document.getElementById("2").onactivate = (event) => { util.buildEquation(2, equationText) }
document.getElementById("3").onactivate = (event) => { util.buildEquation(3, equationText) }
document.getElementById("4").onactivate = (event) => { util.buildEquation(4, equationText) }
document.getElementById("5").onactivate = (event) => { util.buildEquation(5, equationText) }
document.getElementById("6").onactivate = (event) => { util.buildEquation(6, equationText) }
document.getElementById("7").onactivate = (event) => { util.buildEquation(7, equationText) }
document.getElementById("8").onactivate = (event) => { util.buildEquation(8, equationText) }
document.getElementById("9").onactivate = (event) => { util.buildEquation(9, equationText) }
document.getElementById("0").onactivate = (event) => { util.buildEquation(0, equationText) }
document.getElementById("d").onactivate = (event) => { util.buildEquation('d', equationText) }
document.getElementById("plus").onactivate = (event) => { util.buildEquation('+', equationText) }
document.getElementById("minus").onactivate = (event) => { util.buildEquation('-', equationText) }
document.getElementById("delete").onactivate = (event) => { util.buildEquation('del', equationText) }
document.getElementById("roll").onactivate = (event) => { util.solveEquation(equationText, calculatorResultText) }
document.getElementById("clear").onactivate = (event) => {
  equationText.text = ''
  calculatorResultText.text = ''
}

const diceResultText = document.getElementById("diceResult")
document.getElementById("d2").onactivate = (event) => { diceResultText.text = util.d(1, 2) }
document.getElementById("d4").onactivate = (event) => { diceResultText.text = util.d(1, 4) }
document.getElementById("d6").onactivate = (event) => { diceResultText.text = util.d(1, 6) }
document.getElementById("d8").onactivate = (event) => { diceResultText.text = util.d(1, 8) }
document.getElementById("d10").onactivate = (event) => { diceResultText.text = util.d(1, 10) }
document.getElementById("d00").onactivate = (event) => { diceResultText.text = util.d(1, 100) }
document.getElementById("d12").onactivate = (event) => { diceResultText.text = util.d(1, 12) }
document.getElementById("d20").onactivate = (event) => { diceResultText.text = util.d(1, 20) }
