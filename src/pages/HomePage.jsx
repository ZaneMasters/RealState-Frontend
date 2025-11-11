import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import PropertyFilter from "../components/PropertyFilter";
import PropertyList from "../components/PropertyList";
import PropertyDetailModal from "../components/PropertyDetailModal";
import { getProperties } from "../api/propertyApi";
import { getOwnerById } from "../api/ownerApi";
import { getPropertyImageById } from "../api/propertyImageApi";

export default function HomePage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [details, setDetails] = useState({ owner: null, image: null });
  const [showModal, setShowModal] = useState(false);

  // ✅ Cargar propiedades + imagen principal
  const fetchProperties = async (filters = {}) => {
    setLoading(true);

    try {
      // 🟦 1. Obtener propiedades base
      const data = await getProperties(filters);

      // 🟦 2. Obtener imágenes en paralelo
      const images = await Promise.all(
        data.map((prop) => getPropertyImageById(prop.idProperty))
      );

      // 🟦 3. Unir propiedades con su imagen
      const enhancedProperties = data.map((prop, index) => {
        const imgArr = images[index];

        const mainImage =
          Array.isArray(imgArr) && imgArr.length > 0 ? imgArr[0] : null;

        return {
          ...prop,
          imageUrl: mainImage
            ? `${mainImage.file}?auto=compress&cs=tinysrgb&w=500`
            : "https://via.placeholder.com/400x250?text=No+Image",
          rawImages: imgArr, // opcional si luego quieres enviarlas completas al modal
        };
      });

      setProperties(enhancedProperties);
    } catch (error) {
      console.error("Error al obtener propiedades:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  // ✅ Cargar detalles solo cuando se selecciona
  const handleView = async (property) => {
    setSelected(property);
    setShowModal(true);

    try {
      const [owner, image] = await Promise.all([
        getOwnerById(property.idOwner),
        getPropertyImageById(property.idProperty),
      ]);

      setDetails({ owner, image });
    } catch (err) {
      console.error("Error al cargar detalles:", err);
    }
  };

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">🏡 Propiedades Disponibles</h1>

      <PropertyFilter onFilter={fetchProperties} />

      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <PropertyList properties={properties} onView={handleView} />
      )}

      <PropertyDetailModal
        show={showModal}
        onHide={() => setShowModal(false)}
        property={selected}
        owner={details.owner}
        image={details.image}
      />
    </Container>
  );
}
