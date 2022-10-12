import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { Formulario, Title, Wrapper } from '../styles/SingUp';

const SingUp = () => {
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
        // onSubmit: (values); => {

        // }
    });


  return (
    <div>
      <Formulario>
      
        <Title>
          Hola
        </Title>
      
      </Formulario>
    </div>
  )
}

export default SingUp