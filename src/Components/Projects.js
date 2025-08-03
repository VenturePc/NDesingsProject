import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const projects = [
  {
    name: "Modern Villa in Civil Lines",
    location: "Nagpur, Maharashtra",
    type: "Residential",
    description: "A spacious, light-filled home with renewable energy features.",
    image: "/images/villa.jpg"
  },
  {
    name: "Skyline Business Center",
    location: "Pune, Maharashtra",
    type: "Commercial",
    description: "A LEED Gold certified office building designed for optimal productivity and sustainability.",
    image: "/images/skyline.jpg"
  },
  {
    name: "Green Hope School",
    location: "Nagpur, Maharashtra",
    type: "Institutional",
    description: "Innovative classrooms and outdoor spaces foster learning and play.",
    image: "/images/school.jpg",
    testimonial: "ndesigns brought our vision to life. The kids and teachers love the new space! – Principal Joshi"
  }
];

export default function Projects() {
  return (
    <section>
      <h2>Our Projects</h2>
      <Row>
        {projects.map((proj, idx) => (
          <Col md={4} sm={6} key={idx} className="mb-4">
            <Card>
              <Card.Img variant="top" src={proj.image} alt={proj.name} />
              <Card.Body>
                <Card.Title>{proj.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{proj.type} | {proj.location}</Card.Subtitle>
                <Card.Text>{proj.description}</Card.Text>
                {proj.testimonial && <Card.Text className="fst-italic small text-secondary">"{proj.testimonial}"</Card.Text>}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
