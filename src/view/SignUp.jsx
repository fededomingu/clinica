import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import { Formulario, Title, Wrapper } from '../styles/SignUp';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const SignUp = () => {
  const [showSuccess, setshowSuccess] = useState(null);
  const navigate = useNavigate();

  const Success = () => {
    if(showSuccess === true) {
   alert(" Se ha registrado exitosamente");
   navigate("/login");}
   else{ 
    alert("No se pudo registrar, vuelva a intentarlo mas tarde")
    navigate("/login");
   }
}
    const formik = useFormik({
        initialValues: {
            name: "",
            lastName: "",
            dni: "",
            domicilio: "",
            telefono: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Nombre Obligatorio"),
            lastName: Yup.string().required("Apellido Obligatorio"),
            dni: Yup.number().lessThan(7).moreThan(8).required("DNI Obligatorio"),
            domicilio: Yup.string().required("Domicilio Obligatorio"),
            telefono: Yup.number().lessThan(10, "Debe ser un numero valido").moreThan(10, "Debe ser un numero valido").integer().required("Obligatorio"),
            email: Yup.string().email("Ingrese un email valido").required("email Obligatorio"),
            password: Yup.string().min(8, "La contraseña debe tener al menos 8 caracteres")
            .required("Campo Obligatorio")
            .matches(/^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{6,}$/, 
            "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial")
        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values) => {
          setshowSuccess(true);
          console.log(values);

        },
        
    });


  return (
    <div>
      
      
        <Title>
          REGISTRO
        </Title>
        <Formulario>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikemail">
              <Form.Label>Documento</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="number"
                  name="dni"
                  value={formik.values.dni}
                  onChange={formik.handleChange}
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>Domicilio</Form.Label>
              <Form.Control
                type="text"
                name="domicilio"
                value={formik.values.domicilio}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="number"
                name="telefono"
                value={formik.values.telefono}
                onChange={formik.handleChange}
              />
            </Form.Group>
              </Row>
            <Row className='mb-3'>          
            <Form.Group as={Col} md="6" controlId="validationFormik05">
              <Form.Label>e-mail</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationFormik05">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
          </Form.Group>
          </Row>
          <Button variant="success" type="submit" style={{alingItem: "center"}}>Registrarse</Button>
        </Form>
        </Formulario>
    </div>
  )
}

export default SignUp