import React from "react";
import { Badge } from "react-bootstrap";

export default function OwnerBadge({ owner }) {
  if (!owner) return <Badge bg="secondary">👤 Sin propietario</Badge>;

  return (
    <Badge bg="info" text="dark">
      👤 {owner.name}
    </Badge>
  );
}
