import React from "react";
import { Modal, Button, Badge } from "react-bootstrap";

export default function PropertyDetailModal({ show, onHide, property, owner, image }) {

  if (!property) return null;

  const imageUrl = Array.isArray(image) && image.length > 0
    ? `${image[0].file}?auto=compress&cs=tinysrgb&w=1200`
    : "https://via.placeholder.com/800x400?text=No+Image";

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          {property.name}{" "}
          <br/>
          <Badge bg="info" text="dark" className="ms-2">
            Propietario: {owner?.name || "Sin propietario"}
          </Badge>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img 
          src={imageUrl} 
          alt={property.name} 
          className="img-fluid rounded mb-3" 
        />

        <p><strong>Dirección:</strong> {property.address}</p>
        <p><strong>Precio:</strong> ${property.price.toLocaleString()}</p>
        <p><strong>Año:</strong> {property.year}</p>
        <p><strong>Código Interno:</strong> {property.codeInternal}</p>

      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

