import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState({ name: "", email: "", text: "" });

  const handleSubmit = async (event) => {
    setValidated(true);
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      event.preventDefault();
      await fetch(`mailto:thomas.achard@ensc.fr`)
    }
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const handleChange = (event) => {
    setEmail({ ...email, [event.target.name]: event.target.value });
  };

  return (
    <Container className="mt-5 d-flex flex-column">
      <Row className="mb-5">
        <Col xs={3} md={4}></Col>
        <Col>
          <Row className="mb-4">
            <h1>Restons en contact !</h1>
          </Row>
          <Row className="mb-3">
            <p className="fs-3 fw-light text-wrap">
              Je serais ravi de discuter avec vous. Pour cela, n'hésitez pas à
              m'envoyer un mail ou un message sur{" "}
              <a href="https://www.linkedin.com/in/thomas-achard-healthtech/">
                LinkedIn
              </a>
              .
            </p>
          </Row>
        </Col>
        <Col xs={2}></Col>
      </Row>
      <Row>
        <Col xs={6} className="mx-auto">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Text className="fs-5">Bonjour Thomas,</Form.Text>
            <Form.Group className="mt-3" controlId="formText">
              <Form.Control
                required
                name="text"
                as="textarea"
                rows={10}
                placeholder="J'aimerais vous parler d'un projet / en savoir plus sur une de vos réalisations / boire un verre avec vous / vous faire un retour ..."
                value={email.text}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Entrez un corps au mail
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Text className="fs-5">Cordialement,</Form.Text>
            <Form.Group className="my-3" controlId="formNom">
              <Form.Control name="name" required placeholder="Votre nom" />
              <Form.Control.Feedback type="invalid">
                Veuillez donner votre nom.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control name="email" required placeholder="Votre e-mail" />
              <Form.Control.Feedback type="invalid">
                Une adresse email est obligatoire pour envoyer un mail.
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Envoyer un mail</Button>
          </Form>
        </Col>
      </Row>
      <Row className="m-3"></Row>
    </Container>
  );
};

export default Contact;
