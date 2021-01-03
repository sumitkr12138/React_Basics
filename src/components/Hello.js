import React from  'react'

// const Hello = () => {
//     return (
//         <div>
//             <h1> this is jsx </h1>
//         </div>
//     )
// }


// const Hello = () => {
//     return React.createElement ('div', null,'Hello')
// }



const Hello = () => {
return React.createElement(
    'div',null,
    React.createElement('h1',null,'this is without using jsx')
)

}
export default Hello