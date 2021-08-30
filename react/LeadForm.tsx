import React from 'react'
import { Container, Button, Form } from 'react-bootstrap'

function LeadForm() {
  return (
    <Container>
      <div>
        <br />
        <Form>
          <Form.Group className="name">
            <Form.Label>Nome: </Form.Label>
            <Form.Control placeholder="Nome" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control placeholder="Email" type="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Celular: </Form.Label>
            <Form.Control placeholder="Celular" />
          </Form.Group>
          <Button>Receba seu cupom!</Button>
        </Form>
      </div>
    </Container>
  )
}

export default LeadForm
