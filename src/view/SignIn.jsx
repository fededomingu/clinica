import React from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { Boton, Login } from '../styles/SignIn';
import { Title } from '../styles/SignUp';

const SingIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

  }
  return (
    <div>
    <Title>
      Sing In
    </Title>
    <Login>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
        <FormLabel>e-mail</FormLabel>
        <FormControl>
        </FormControl>
        <FormLabel>Password</FormLabel>
        <FormControl>

        </FormControl>
        </FormGroup>
        <Button variant='success' style={{justifyContent: "center", marginTop: "10px"}}>Ingresar</Button>
      </Form>
    </Login>
    </div>
  )
}

export default SingIn