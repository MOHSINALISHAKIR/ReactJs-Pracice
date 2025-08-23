import { useState } from "react"

export default function LudoBoard(){
    let [moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0})
    let updateBlue = ()=>{
        setMoves((prevMoves)=>{
            return {
                ...prevMoves,
                blue:prevMoves.blue+1
            }
        })
    }
    let updateYellow = ()=>{
        setMoves((prevMoves)=>{
            return {
                ...prevMoves,
                yellow:prevMoves.yellow+1
            }
        })
    }
    let updateGreen = ()=>{
        setMoves((prevMoves)=>{
            return {
                ...prevMoves,
                green:prevMoves.green+1
            }
        })
    }
    let updateRed = ()=>{
        setMoves((prevMoves)=>{
            return {
                ...prevMoves,
                red:prevMoves.red+1
            }
        })
    }
    return (
        <div style={{textAlign:'center'}}>
         <h2>Game Begins</h2>
         <div>
            <h4>Blue Moves:{moves.blue}</h4>
            <button style={{backgroundColor:'blue'}} onClick={updateBlue}>+1</button>
         </div>
         <div>
            <h4>Yellow Moves:{moves.yellow}</h4>
            <button style={{backgroundColor:'yellow',color:'black'}} onClick={updateYellow}>+1</button>
         </div>
         <div>
            <h4>Green Moves:{moves.green}</h4>
            <button style={{backgroundColor:'green'}} onClick={updateGreen}>+1</button>
         </div>
         <div>
            <h4>Red Moves:{moves.red}</h4>
            <button style={{backgroundColor:'red'}} onClick={updateRed}>+1</button>
         </div>
        </div>

    )
}