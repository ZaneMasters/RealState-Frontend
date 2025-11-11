import { render, screen, fireEvent } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard Component", () => {
  const property = {
    idProperty: "1",
    name: "Casa del Lago",
    address: "Calle 10 #20-30",
    price: 1200000000,
  };

test("renders property data correctly", () => {
  render(<PropertyCard property={property} onView={() => {}} />);

  expect(screen.getByText("Casa del Lago")).toBeInTheDocument();
  expect(screen.getByText(/Calle 10/)).toBeInTheDocument();
});


  test("calls onView when 'Ver Detalles' clicked", () => {
    const mockOnView = jest.fn();
    render(<PropertyCard property={property} onView={mockOnView} />);

    fireEvent.click(screen.getByText("Ver Detalles"));

    expect(mockOnView).toHaveBeenCalledWith(property);
  });
});
