import { render, screen } from "@testing-library/react";
import PropertyDetailModal from "../components/PropertyDetailModal";

describe("PropertyDetailModal Component", () => {
  const property = {
    name: "Apartamento Central",
    address: "Carrera 5 #40-20",
    price: 350000000,
    year: 2020,
    codeInternal: "PROP001",
  };

  const owner = {
    name: "Juan Pérez",
    email: "juan@example.com",
    phone: "3001234567",
  };

  const image = [
    {
      file: "https://example.com/img.jpg",
    },
  ];

  test("renders property and owner details", () => {
    render(
      <PropertyDetailModal
        show={true}
        onHide={() => {}}
        property={property}
        owner={owner}
        image={image}
      />
    );

    expect(screen.getByText("Apartamento Central")).toBeInTheDocument();
    expect(screen.getByText(/Carrera 5/)).toBeInTheDocument();
    expect(screen.getByText(/Juan Pérez/)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      `${image[0].file}?auto=compress&cs=tinysrgb&w=1200`
    );
  });
});
