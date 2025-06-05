
const Die = (props) => {
  
  return (
    <div >
        <button 
        className={props.isHeld ? "stable-die": "die"}
        onClick={()=>props.hold(props.id)}
        
>{props.value}</button>
    </div>
)
}

export default Die;