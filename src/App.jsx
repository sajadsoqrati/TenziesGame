import { useState } from 'react'
import {nanoid} from 'nanoid'
import './App.css'
import Die from"./components/Die"
function App() {
  const[dice , setDice]=useState(generateAllNewDice());
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
        die=> die.id === id ? {...die,isHeld:!die.isHeld}:die
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
           <button onClick={rollDice} className="roll-button">Roll</button>
         </div>
           
        </main>
     </body>
    
  )
} 

export default App
