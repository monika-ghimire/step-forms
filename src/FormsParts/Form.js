import React from 'react'

export default function Form1({data,cardIndex}) {
  
  return (
    <>
     <div><h1>Form </h1>
     <div>
     {data[cardIndex].map(item=>(
      <div>
             <p>{item.title}</p>
       <input type="text" placeholder={item.placeholder}/>
      </div>
     
     ))}
     </div>
    
    
     </div>
    </>
   
  )
}
