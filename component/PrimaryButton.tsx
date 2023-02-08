'use client'
import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';


function PrimaryButton(props) {
    
  return (

    <Button variant="outline-primary" onClick={props.handleData}>Primary</Button>
  )
}

export default PrimaryButton