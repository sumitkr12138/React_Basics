import React from 'react'
// function Greet() {
//     return<h1>hello sumit how are you</h1>
// }


// const Greet = () =><h1>Hellllllloooooooo</h1>


const Greet = props => {
    console.log (props)
    return (    <div>
        <h1> hello this is {props.name} and {props.Gender} </h1>
        {props.children}
        </div>
    )
}




export default Greet