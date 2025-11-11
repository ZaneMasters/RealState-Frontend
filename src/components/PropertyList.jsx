import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropertyCard from './PropertyCard';

export default function PropertyList({ properties, onView }) {
  if (!properties.length) {
    return <p className="text-center mt-4">No se encontraron propiedades.</p>;
  }

  return (
    <Row>
      {properties.map((p) => (
        <Col key={p.idProperty} md={4} sm={6}>
          <PropertyCard property={p} onView={onView} />
        </Col>
      ))}
    </Row>
  );
}
