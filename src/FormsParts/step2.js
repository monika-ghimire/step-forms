import React from 'react'

export default function Form3(props) {
  return (
    <>
    <div><h1>Address</h1>
            

           
             <p>Address</p>
            <input type="text" placeholder="Enter YOur Address"/>
            <br/>
            <p>Home town Address</p>
            <input type="text" placeholder="Home town Address"/>
       

       <br/>

            <button id='goBack' onClick={props.backstep}>Go Back</button>
             <button onClick={props.next}>next</button>
      
      </div>

     
    </>
  )
}