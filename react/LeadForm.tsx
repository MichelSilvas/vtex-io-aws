import React from 'react'
import styles from './styles.css'
import { Container, Button, Form } from 'react-bootstrap'

import Amplify from 'aws-amplify';
import { API } from 'aws-amplify';

import awsExports from "./aws-exports";

Amplify.configure(awsExports);

async function addContact() {
  const data = {
    body: {
      name: formState.name,
      email: formState.email,
      phone: formState.phone
    }
  };

  console.log(data);
  const apiData = await API.post('leadapi', '/contacts', data);
  console.log({ apiData });
  alert('Cadastrado');
}

const formState: { [x: number]: any; name: any; email: any; phone: any; } = { name: '', email: '', phone: 0 };

function updateFormState(key: any, value: any) {
  formState[key] = value;
}

function LeadForm() {
  return (
    <Container>
      <div>
        <br />
        <Form>
          <Form.Group className={styles.name}>
            <Form.Label className={styles.nameUser}>Nome: </Form.Label>
            <Form.Control placeholder="Nome" onChange={e => updateFormState('name', e.target.value)} />
          </Form.Group>
          <br />
          <Form.Group className={styles.email}>
            <Form.Label className={styles.emailUser}>E-mail: </Form.Label>
            <Form.Control placeholder="E-mail" type="email" onChange={e => updateFormState('email', e.target.value)} />
          </Form.Group>
          <br />
          <Form.Group className={styles.telefone}>
            <Form.Label className={styles.telefoneUser}>Telefone: </Form.Label>
            <Form.Control placeholder="Telefone" onChange={e => updateFormState('phone', e.target.value)} />
          </Form.Group>
          <br />
          <Button className={styles.botao} onClick={addContact}>Cadastre-se</Button>
          <br />
        </Form>
      </div>
    </Container>
  )
}

export default LeadForm
