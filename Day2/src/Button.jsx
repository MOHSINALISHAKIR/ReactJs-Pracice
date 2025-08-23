function Click (){
    console.log('button was clicked')
}
function MovesOver (){
    console.log('mouse inside input tag')
}
export default function Button (){
    return (
        <>
        <h2>Events In React.Js</h2>
        <input type="text" onMouseEnter={MovesOver} />
        <button onClick={Click}>Click</button>
        </>
    )
}