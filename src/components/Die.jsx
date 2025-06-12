
const Die = (props) => {
  
  return (
    <div >
        <button 
        className={props.isHeld ? "stable-die": "die"}
        onClick={()=>props.hold(props.id)}
        aria-pressed=  {props.isHeld}
        aria-label={`die with value ${props.value},${props.isHeld? "held":"not held"}`}

>{props.value}</button>
    </div>
)
}

export default Die;