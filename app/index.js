import document from "document"
import * as messaging from "messaging"
import * as util from "../common/utils"

const equationText = document.getElementById("equation")
const calculatorResultText = document.getElementById("calculatorResult")
document.getElementById("1").onclick = (event) => { util.buildEquation(1, equationText) }
document.getElementById("2").onclick = (event) => { util.buildEquation(2, equationText) }
document.getElementById("3").onclick = (event) => { util.buildEquation(3, equationText) }
document.getElementById("4").onclick = (event) => { util.buildEquation(4, equationText) }
document.getElementById("5").onclick = (event) => { util.buildEquation(5, equationText) }
document.getElementById("6").onclick = (event) => { util.buildEquation(6, equationText) }
document.getElementById("7").onclick = (event) => { util.buildEquation(7, equationText) }
document.getElementById("8").onclick = (event) => { util.buildEquation(8, equationText) }
document.getElementById("9").onclick = (event) => { util.buildEquation(9, equationText) }
document.getElementById("0").onclick = (event) => { util.buildEquation(0, equationText) }
document.getElementById("d").onclick = (event) => { util.buildEquation('d', equationText) }
document.getElementById("plus").onclick = (event) => { util.buildEquation('+', equationText) }
document.getElementById("minus").onclick = (event) => { util.buildEquation('-', equationText) }
document.getElementById("delete").onclick = (event) => { util.buildEquation('del', equationText) }
document.getElementById("roll").onclick = (event) => { util.solveEquation(equationText, calculatorResultText) }
document.getElementById("clear").onclick = (event) => {
  equationText.text = ''
  calculatorResultText.text = ''
}

const diceResultText = document.getElementById("diceResult")
document.getElementById("d2").onclick = (event) => { diceResultText.text = util.d(1, 2) }
document.getElementById("d4").onclick = (event) => { diceResultText.text = util.d(1, 4) }
document.getElementById("d6").onclick = (event) => { diceResultText.text = util.d(1, 6) }
document.getElementById("d8").onclick = (event) => { diceResultText.text = util.d(1, 8) }
document.getElementById("d10").onclick = (event) => { diceResultText.text = util.d(1, 10) }
document.getElementById("d00").onclick = (event) => { diceResultText.text = util.d(1, 100) }
document.getElementById("d12").onclick = (event) => { diceResultText.text = util.d(1, 12) }
document.getElementById("d20").onclick = (event) => { diceResultText.text = util.d(1, 20) }

const getTileInfo = (index) => {
  return {
    type: "favouriteRollsPool",
    name: rolls[index][0],
    roll: rolls[index][1],
    index: index,
  }
}
const configureTile = (tile, info) => {
  if (info.type == "favouriteRollsPool") {
    if(info.index == 0) return tile.getElementById("heading").text = info.name
    tile.getElementById("name").text = info.name
    tile.getElementById("roll").text = info.roll
    tile.getElementById("touch").onclick = (event) => {
      equationText.text = info.roll
      util.solveEquation(equationText, calculatorResultText)
      document.getElementById("container").value = 1
    }
  }
}

const favouriteRollsList = document.getElementById("favouriteRolls")
let rolls = [["Saved Rolls"]]
favouriteRollsList.delegate = {
  getTileInfo: getTileInfo,
  configureTile: configureTile,
}
favouriteRollsList.length = rolls.length

messaging.peerSocket.onmessage = event => {
  if (event.data.key === "savedRolls" && event.data.newValue) {
    const savedRolls = JSON.parse(event.data.newValue)
    rolls = [["Saved Rolls"]]
    savedRolls.forEach(roll => { rolls.push(roll["name"].split(",")) })
    favouriteRollsList.length = rolls.length
  }
}
