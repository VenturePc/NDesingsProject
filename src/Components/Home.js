import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Logo.png";

export default function Home() {
  return (
    <section className="text-center py-5">
      <img 
      src={logo}
      alt="NDesigns"
      />
      <p className="lead fst-italic">Where Vision Meets Structure</p>
      <p>
        Designing distinctive, sustainable spaces from concept to completion.
      </p>
      <div className="my-4">
        <Button variant="dark" as={Link} to="/projects" className="mx-2">
          View Our Projects
        </Button>
        <Button variant="outline-dark" as={Link} to="/contact" className="mx-2">
          Contact Us
        </Button>
      </div>
      {/* Hero image placeholder */}
      <img
        src="/images/hero.jpg"
        alt="ndesigns Architecture"
        className="img-fluid rounded shadow"
        style={{ maxHeight: 300 }}
      />
    </section>
  );
}
