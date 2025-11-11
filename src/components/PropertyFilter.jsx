import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

export default function PropertyFilter({ onFilter }) {
  const [filters, setFilters] = useState({
    name: "",
    address: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // ✅ QUITA SIMBOLOS Y FORMATEA
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const numeric = value.replace(/\D/g, ""); // deja solo números
    setFilters({ ...filters, [name]: numeric });
  };

  const formatCurrency = (value) => {
    if (!value) return "";
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0
    }).format(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleClear = () => {
    const empty = { name: "", address: "", minPrice: "", maxPrice: "" };
    setFilters(empty);
    onFilter(empty);
  };

  return (
    <Form className="p-3 bg-light rounded shadow-sm mb-4" onSubmit={handleSubmit}>
      <Row className="align-items-end">
        <Col md={3}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="name"
              value={filters.name}
              onChange={handleChange}
              placeholder="Ej: Casa, Apartamento..."
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group>
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              name="address"
              value={filters.address}
              onChange={handleChange}
              placeholder="Ej: Carrera 10..."
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group>
            <Form.Label>Precio Mínimo</Form.Label>
            <Form.Control
              type="text"
              name="minPrice"
              value={formatCurrency(filters.minPrice)}
              onChange={handlePriceChange}
              placeholder="$100.000"
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group>
            <Form.Label>Precio Máximo</Form.Label>
            <Form.Control
              type="text"
              name="maxPrice"
              value={formatCurrency(filters.maxPrice)}
              onChange={handlePriceChange}
              placeholder="$500.000.000"
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Button type="submit" variant="primary" className="w-100 mb-2 mt-2">
            Filtrar
          </Button>
          <Button
            type="button"
            variant="outline-secondary"
            className="w-100"
            onClick={handleClear}
          >
            Limpiar
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
