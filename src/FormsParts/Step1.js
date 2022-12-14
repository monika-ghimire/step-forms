import React from "react";

export default function Form2(props) {
  return (
    <>
     <div><h1>Personal Details</h1>
             <p>Name</p>
             <input type="text" placeholder={"Enter YOur NAME"}/>
             <br/>

             <p>Last Name</p>
             <input type="text" placeholder={"Enter YOur Last NAME"}/>
             <br/>

             <p>Date of Birth</p>
             <input type="date" placeholder={"Enter Your DOB"}/>
             <br/>


       <button onClick={props.next}>next</button>
      </div>
    </>
  );
}
