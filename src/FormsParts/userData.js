import React from 'react'

export default function preview(props) {
  return (
    <>
    <h1>Preview</h1>
    <p>this is for preview form data</p>
    <p> you can see all the previous  data which you fill up </p>
    <button onClick={props.backstep}>Go Back</button>
    </>
  )
}
