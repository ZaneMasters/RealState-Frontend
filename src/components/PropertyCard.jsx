import React from "react";
import { Card, Button } from "react-bootstrap";

export default function PropertyCard({ property, onView }) {
  // ✅ Tomamos la imageUrl que viene precargada desde HomePage
  const imageUrl = property.imageUrl || "https://via.placeholder.com/400x250?text=No+Image";

  return (
    <Card className="shadow-sm border-0 mb-3" style={{ overflow: "hidden" }}>
      
      {/* Miniatura de imagen */}
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={property.name}
        style={{
          height: "180px",
          objectFit: "cover",
        }}
      />

      <Card.Body>
        <Card.Title className="fw-bold">{property.name}</Card.Title>
        <Card.Text className="mb-2">
          <strong>Dirección: </strong>{property.address}<br />
          <strong>Precio: </strong>${property.price.toLocaleString()}
        </Card.Text>

        <Button variant="info" onClick={() => onView(property)}>
          Ver Detalles
        </Button>
      </Card.Body>
    </Card>
  );
}
