import { render, screen, fireEvent } from "@testing-library/react";
import PropertyFilter from "../components/PropertyFilter";

describe("PropertyFilter Component", () => {
  test("renders all form fields", () => {
    render(<PropertyFilter onFilter={() => {}} />);
    expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
    expect(screen.getByLabelText("Dirección")).toBeInTheDocument();
    expect(screen.getByLabelText("Precio Mínimo")).toBeInTheDocument();
    expect(screen.getByLabelText("Precio Máximo")).toBeInTheDocument();
  });

  test("calls onFilter with correct values on submit", () => {
    const mockFilter = jest.fn();
    render(<PropertyFilter onFilter={mockFilter} />);

    // Cambiar inputs por su label (getByLabelText funciona ahora que hay ids)
    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Casa" } });
    fireEvent.change(screen.getByLabelText("Dirección"), { target: { value: "Calle 10" } });

    // Precio: pasamos el número sin formato; el componente almacenará el numérico
    fireEvent.change(screen.getByLabelText("Precio Mínimo"), { target: { value: "500000" } });

    // Enviamos el form usando el testid
    const form = screen.getByTestId("filter-form");
    fireEvent.submit(form);

    expect(mockFilter).toHaveBeenCalledWith({
      name: "Casa",
      address: "Calle 10",
      minPrice: "500000",
      maxPrice: "",
    });
  });

  test("clears filters when clicking 'Limpiar'", () => {
    const mockFilter = jest.fn();
    render(<PropertyFilter onFilter={mockFilter} />);

    // llenar un campo para luego limpiar
    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Apartamento" } });

    // click en Limpiar
    fireEvent.click(screen.getByText("Limpiar"));

    // el último llamado a onFilter debe ser con filtros vacíos
    expect(mockFilter).toHaveBeenLastCalledWith({
      name: "",
      address: "",
      minPrice: "",
      maxPrice: "",
    });
  });
});
