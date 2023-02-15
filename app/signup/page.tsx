import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import TextBox from '@/component/TextBox';
import BasicLoginForm from '@/component/BasicLoginForm';


function Signup() {
  return (
    <>
        <div style={{
            display: "flex", flexDirection: "column", alignItems: "center"
        }}>
            <h1>Signup Form</h1>
            <TextBox />
            <BasicLoginForm />
        </div>
    </>
  )
}

export default Signup