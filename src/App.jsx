import { useState } from 'react'
import './App.css'
import Die from"./components/Die"
function App() {
  const[dice , setDice]=useState(generateAllNewDice());
    function generateAllNewDice(){
       return new Array(10).fill(0)
       .map(()=> Math.ceil(Math.random()*6))
    }
    const diceElements = dice.map((num)=><Die value={num}/>)
    function rollDice(){
      setDice(generateAllNewDice())
    }
  return (
    <>
      <body>
        <main>
          
         <div class="dice-container">
            
           <div className="dice">
             {diceElements}
           </div>
           <button onClick={rollDice} className="roll-button">Roll</button>
         </div>
           
        </main>
     </body>
    </>
  )
} 

export default App
