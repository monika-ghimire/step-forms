// import Form1 from "./FormsParts/Form";
// import Data from './FormsParts/Data'
import Step1 from "./FormsParts/Step1";
import Step2 from "./FormsParts/step2";
import UserData from "./FormsParts/userData";
import "./App.css";
import React, { useState } from "react";
function App() {

  const [formStep, setFormStep] = useState(0);


   const nextStep=()=>{
    setFormStep(formStep+1)
   }


  const backstep=()=>{
    if(formStep>0)
    {
      setFormStep(formStep-1)
    }
   
   console.log(formStep)
  }

  return (
    <div className="App">
      {formStep === 0 && <Step1 next={nextStep}  />}
      {formStep === 1 && <Step2 next={nextStep}  previous={backstep} />}
      {formStep === 2 && <UserData next={nextStep}  previous={backstep}/>}
     
    </div>
  );
}

export default App;



 {/*   
      {form===0 &&  <Form1 data={Data} cardIndex={0}/> }
      {form===1 && <Form1 data={Data} cardIndex={1} />}
      {form===2 &&  <Form1 data={Data} cardIndex={2}/>} */}