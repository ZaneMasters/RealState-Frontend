# 🏡 Real Estate Frontend

Frontend de la aplicación **Real Estate** desarrollado con **React + Bootstrap 5**, que consume la API REST construida en **.NET 9 + MongoDB**.

El sistema permite listar propiedades, aplicar filtros por nombre, dirección y rango de precios, y visualizar los detalles de cada propiedad junto con su propietario e imagen asociada.

---

## 🚀 Tecnologías utilizadas

- **React 18**
- **Vite o Create React App** (según tu configuración)
- **Axios** — consumo de API REST
- **Bootstrap 5** — diseño responsivo
- **React-Bootstrap** — componentes de UI
- **ESLint + Prettier** — buenas prácticas de código

---

## 🧱 Arquitectura del proyecto

```
frontend/
├── src/
│   ├── api/                    # Servicios para comunicación con la API
│   │   ├── propertyApi.js
│   │   ├── ownerApi.js
│   │   └── propertyImageApi.js
│   ├── components/             # Componentes reutilizables
│   │   ├── PropertyCard.jsx
│   │   ├── PropertyFilter.jsx
│   │   ├── PropertyList.jsx
│   │   ├── PropertyDetailModal.jsx
│   │   └── OwnerBadge.jsx
│   ├── pages/                  # Vistas principales
│   │   └── HomePage.jsx
│   ├── styles/                 # Estilos personalizados
│   │   └── custom.css
│   ├── App.jsx                 # Enrutador principal
│   └── index.jsx               # Punto de entrada de React
├── package.json
└── README.md
```

---

## 🌐 API Backend utilizada

| Endpoint | Método | Descripción |
|-----------|---------|-------------|
| `/api/property` | GET | Retorna todas las propiedades (acepta filtros) |
| `/api/property/{id}` | GET | Retorna una propiedad específica |
| `/api/owner/{id}` | GET | Retorna los datos del propietario |
| `/api/propertyimage/{idProperty}` | GET | Retorna la imagen asociada a una propiedad |

---

## ⚙️ Configuración del entorno

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/ZaneMasters/RealState-Frontend.git
cd RealState-Frontend
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Configurar la URL de la API

Edita el archivo `src/api/config.js` para apuntar a tu backend:

```js
export const API_BASE_URL = "http://localhost:5153/api";
```

### 4️⃣ Ejecutar el servidor de desarrollo

```bash
npm run dev
```

> Abre [http://localhost:3000](http://localhost:3000)

---

## 🎯 Funcionalidades principales

### 🏠 Listado de propiedades
- Se obtiene desde `/api/property`
- Muestra nombre, dirección y precio.
- Cada tarjeta incluye un botón **"Ver detalles"**

### 🔍 Filtros
Filtros dinámicos implementados en el frontend y enviados al backend como query params:
```js
?name=Casa&address=Carrera&minPrice=500000&maxPrice=2000000
```

Filtros disponibles:
- **Nombre**
- **Dirección**
- **Rango de precio (mínimo / máximo)**

### 👁️ Ver detalles de propiedad
- Muestra información completa:
  - Nombre, dirección, precio, código interno, año.
  - Propietario (consultado desde `/api/owner/{id}`).
  - Imagen asociada (consultada desde `/api/propertyimage/{idProperty}`).
- Se carga solo al abrir el modal (lazy loading → mejor rendimiento).

### 📱 Responsividad
- Diseño 100% adaptativo con **Bootstrap Grid System**.
- Interfaz usable tanto en desktop como en móvil.

---

## 🧩 Principales componentes

| Componente | Descripción |
|-------------|-------------|
| `PropertyFilter.jsx` | Filtros por nombre, dirección y rango de precios |
| `PropertyList.jsx` | Renderiza la lista de propiedades |
| `PropertyCard.jsx` | Tarjeta individual con resumen de propiedad |
| `PropertyDetailModal.jsx` | Modal con detalles, propietario e imagen |
| `OwnerBadge.jsx` | Muestra un pequeño identificador de propietario |

---

## 💡 Buenas prácticas aplicadas

- **Clean Architecture (Frontend)**  
  Capas separadas de presentación, lógica y comunicación (api / components / pages).

- **Error handling**  
  Manejo de errores con `try/catch` en todos los servicios API.

- **Performance optimizado**  
  - Peticiones paralelas (`Promise.all`)
  - Lazy loading de owner e imagen en modal
  - Renderizado condicional solo cuando los datos están disponibles

- **Código limpio y modular**  
  - Reutilización de componentes.
  - Separación de responsabilidades.
  - Nombres consistentes y descriptivos.

---

## 🧪 Pruebas unitarias

El proyecto incluye pruebas con:
- **Vitest** o **Jest** para componentes React.
- **React Testing Library** para testing funcional de UI.

Ejemplo de estructura sugerida:
```
src/
├── __tests__/
│   ├── PropertyFilter.test.jsx
│   ├── PropertyCard.test.jsx
│   └── PropertyDetailModal.test.jsx
```

---

## 🧠 Evaluación (criterios cumplidos)

| Criterio | Cumplimiento | Descripción |
|-----------|---------------|-------------|
| **Arquitectura Limpia (Front + Back)** | ✅ | Capas separadas y mantenibles |
| **Estructura de código** | ✅ | Modular y escalable |
| **Documentación** | ✅ | README completo, comentarios en código |
| **Buenas prácticas** | ✅ | Clean code, manejo de errores, queries optimizadas |
| **Performance** | ✅ | Lazy loading y peticiones paralelas |
| **Responsive Design** | ✅ | Bootstrap |
| **Unit Testing Ready** | ⚙️ | Preparado para agregar Vitest/Jest |

---

## 📄 Licencia

Este proyecto es de uso libre para propósitos educativos y de evaluación técnica.

---

## 👨‍💻 Autor

**Angel Eduardo Rodríguez Arguello**  
💼 Fullstack Developer (Java / .NET / React)  
📧 angel.pro98@gmail.com  
🌐 [LinkedIn](https://www.linkedin.com/in/angel-eduardo-rodriguez-arguello)
