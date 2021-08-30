import React from 'react'
import styles from './styles.css'
import { Container, Button, Form } from 'react-bootstrap'

function LeadForm() {
  return (
    <Container>
      <div>
        <br />
        <Form>
          <Form.Group className={styles.name}>
            <Form.Label className={styles.nameUser}>Nome: </Form.Label>
            <Form.Control placeholder="Nome" />
          </Form.Group>
          <br />
          <Form.Group className={styles.email}>
            <Form.Label className={styles.emailUser}>E-mail: </Form.Label>
            <Form.Control placeholder="E-mail" type="email" />
          </Form.Group>
          <br />
          <Form.Group className={styles.telefone}>
            <Form.Label className={styles.telefoneUser}>Telefone: </Form.Label>
            <Form.Control placeholder="Telefone" />
          </Form.Group>
          <br />
          <Button className={styles.botao}>Receba seu cupom!</Button>
          <br />
        </Form>
      </div>
    </Container>
  )
}

export default LeadForm
