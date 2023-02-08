import React from "react"
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import BasicLoginForm from "@/component/BasicLoginForm";

function Login() {
  return (
  <main className={styles.main}>
    <h1>Login Page</h1>
    <div style={{
        marginTop: "20px"
    }}>
        <BasicLoginForm />
    </div>
  </main>
  )
     
}

export default Login