'use client'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

function TextBox() {
    return(
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder='Enter your name'/>
                </Form.Group>
            </Form>
        </>
    )
}

export default TextBox