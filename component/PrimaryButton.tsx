'use client'
import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';


function PrimaryButton(props) {
  const handleData =()=> {
    const newdata = "hello";
    props.handleData(newdata);
  }
    
  return (

    <Button variant="outline-primary" onClick={handleData}>Primary</Button>
  )
}

export default PrimaryButton