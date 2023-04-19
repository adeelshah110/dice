import React from 'react'
import { Button, Stack } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'

const Login = () => {
  return (
    <Stack>
    <Formik initialValues= {{ email:"", password:"" }} >
      <Form>
        <Field name ="email"/>
        <Field name = "password" />
        <Button type="submit">Login</Button>
      
      </Form>
      
      </Formik>
  </Stack>
  );
};

export default Login