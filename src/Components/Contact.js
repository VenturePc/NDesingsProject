import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <section>
      <h2>Contact Us</h2>
      <Form className="mb-4">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="you@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="How can we help you?" />
        </Form.Group>
        <Button variant="dark" type="submit">Send Message</Button>
      </Form>

      <h4>Contact Details</h4>
      <address>
        123 Design Street, Civil Lines, Nagpur, Maharashtra, India<br/>
        <strong>Phone:</strong> +91 98765 43210<br/>
        <strong>Email:</strong> <br/>
      </address>
       <p>
        Follow us on:&nbsp;
        <a href="https://www.instagram.com/ndesignsngp?igsh=MTZ5OXMycGFzZ25qMg==" aria-label="Instagram">Instagram</a>&nbsp;
      </p>
    </section>
  );
}
