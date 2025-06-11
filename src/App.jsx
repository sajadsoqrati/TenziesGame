import { useState } from 'react'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti-boom'
import './App.css'
import Die from"./components/Die"
function App() {
  const[dice , setDice]=useState(generateAllNewDice());
  
     const gameWon = 
      (dice.every(die =>die.isHeld) &&
      dice.every(die =>die.value === dice[0].value))
   
    function generateAllNewDice(){
       return new Array(10).fill(0)
       .map(()=> ({
        value:Math.ceil(Math.random()*6),
        isHeld:false,
        id:nanoid()
    }))}
  
    const diceElements = dice.map((dieObj)=><Die 
        isHeld={dieObj.isHeld}
        key={dieObj.id} 
        value={dieObj.value}
        hold={hold}
        id={dieObj.id}
        />)
    
        function rollDice(){
      setDice(oldDice=>oldDice.map(die=>
        die.isHeld?die:
        {...die,value:Math.ceil(Math.random()*6)}
        ))
    }
        function hold(id){
      setDice(oldDice => oldDice.map(
        die => die.id === id ? {...die,isHeld:!die.isHeld}:die
        )
      )
    }

  return (
    
      <body>
        <main>
         
         <div className="dice-container">
             <h1 className="title">Tenzies</h1>
            <p className="instructions">
              Roll until all dice are the same.<br/> Click each die to freeze it at its current value between rolls.
            </p>
          
           <div className="dice">
             {diceElements}
           </div>
           <button onClick={rollDice} className="roll-button">{gameWon?"New Game":"Roll"}</button>
           {gameWon&&<Confetti mode="fall" particleCount={200} colors={['#ff577f', '#ff884b', '#ffd384', '#fff9b0']} />}
         </div>
           
        </main>
     </body>
    
  )
} 

export default App
