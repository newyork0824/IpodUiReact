import React,{useState,useEffect} from "react"
import {Context} from "./Context"


function DiceGame() {
  const {setSideImg} = React.useContext(Context)
  setSideImg(false)
  const [winner, setWinner] = useState(false)

  //user Values

const [userScore, setUserScore] = useState(0)
const [diceValueUser, setDiceValueUser] = useState(0)
const [userTurn, setUserTurn] = useState(true)
const [userHasWon, setUserHasWon] = useState(false)


//Cpu values

const [cpuScore, setCpuScore] = useState(0)
const [diceValueCpu, setDiceValueCpu] = useState(0)
const [cpuTurn, setCpuTurn] = useState(false)
const [cpuHasWon, setCpuHasWon] = useState(false)
let winningScore = 20 

useEffect(() => {
  if(userScore >= winningScore) {
    setUserHasWon(true)
    setWinner(true)
  }

}, [userScore,winningScore])


useEffect(() => {
  if(cpuScore >= winningScore) {
    setCpuHasWon(true)
    setWinner(true)
  }

}, [cpuScore,winningScore])



const rollDiceUser = () => {
  setDiceValueUser(Math.floor(Math.random() *6) + 1) 
   setUserScore(prevScore => prevScore + diceValueUser)
   setCpuTurn(true)
    setUserTurn(false)
   
   console.log(userScore)
}

const rollDiceCpu = () => {
    setDiceValueCpu(Math.floor(Math.random() *6) + 1)
    setCpuScore(prevScore => prevScore + diceValueCpu)
    setCpuTurn(false)
    setUserTurn(true)
  
}

const resetGame = () => {
  setWinner(false)
  setCpuHasWon(false)
  setUserHasWon(false)
  setUserScore(0)
  setCpuScore(0)
  setDiceValueUser(0)
  setDiceValueCpu(0)
}



return (
<div className="dice-game-container
 con">
{winner ? <h1> {userHasWon ? "User has Won!" : "Cpu has Won"} </h1> : <h1> {userTurn ? "User's Turn" : "Cpu's Turn"} </h1>}
    <div className = "play-area-el">
      <div className="user-score-dice">
      <h1> User </h1>
       <h2> Score: {userScore} </h2>
       <h2> {diceValueUser} </h2>

      </div>
      <div className = "cpu-score-dice">
      <h1> Cpu </h1>
       <h2> Score: {cpuScore} </h2>
       <h2> {diceValueCpu} </h2>
    </div>
</div>
{winner ? <button className="reset-game-btn" onClick={resetGame}> Reset Game </button> : 
<button className="roll-dice-btn" onClick={userTurn ? rollDiceUser : rollDiceCpu}> Roll Dice </button>}
</div>





)


}

export default DiceGame