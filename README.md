# Proyecto CRUD de Usuarios

Este proyecto se desarrolló con un **enfoque full-stack**, utilizando **React** para la interfaz de usuario y **Node.js, Express y Sequelize** en el backend, con **SQLite** como base de datos. La arquitectura sigue una estructura basada en **componentes reutilizables** en el frontend y **rutas bien definidas** en el backend para la gestión CRUD de usuarios.

## 🔹 Flujo de Trabajo en el Desarrollo  

### 1️⃣ Configuración del Backend  
- Se estableció la **API REST** con Express, organizando rutas para **crear, leer, actualizar y eliminar** usuarios.  
- Uso de **Sequelize** para interactuar con **SQLite**, facilitando la gestión de la base de datos sin depender de sistemas externos.  

### 2️⃣ Construcción del Frontend  
- Implementación de la interfaz con **React**, asegurando una estructura modular y componentes reutilizables.  
- Creación de la **tabla de usuarios** y la **barra de búsqueda** con estilos personalizados en **CSS**.  

### 3️⃣ Integración Backend-Frontend  
- Uso de **fetch o axios** para realizar solicitudes HTTP desde React y sincronizar los datos con el backend.  
- Manejo de respuestas y validaciones para garantizar una comunicación fluida.  

## ⚠️ Áreas donde hubo desafíos y soluciones  
Estos fueron algunos puntos donde se presentaron dificultades durante el desarrollo:

### 🔹 **Centrado y disposición de elementos en CSS**  
🔸 Hubo ajustes necesarios para que la **barra de búsqueda** se alineara correctamente dentro del CRUD.  
🔸 Solución: Se implementó **Flexbox** y `justify-content: center;` en los contenedores adecuados.  

### 🔹 **Integración de API con React**  
🔸 En algunos puntos, las solicitudes no devolvían los datos correctamente.  
🔸 Solución: Se revisaron las dependencias de estado y se ajustaron los métodos `useEffect` y `setState`.  

### 🔹 **Gestión de Git y subida al repositorio**  
🔸 Error al hacer `git push`, indicando que el repositorio remoto tenía cambios no sincronizados.  
🔸 Solución: Se ejecutó `git pull origin main --rebase` antes del `git push`.  

### 🔹 **Evitar repetición en los encabezados**  
🔸 Se identificó que "Gestión de Usuarios" aparecía dos veces en la interfaz.  
🔸 Solución: Se ajustó la estructura y se añadió un subtítulo más descriptivo.  

## 🎯 Conclusión  
A pesar de los desafíos, el proyecto demuestra **resiliencia**, **atención a los detalles** y un fuerte enfoque en la **optimización de la interfaz y la funcionalidad**. La implementación de **React y Express** junto con **Sequelize** creó una solución **escalable y eficiente**, permitiendo una comunicación fluida entre el **Frontend** y el **Backend**.  
