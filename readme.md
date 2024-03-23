# Frontend Wallopop - README

Este proyecto consiste en el desarrollo de una aplicación web similar a Wallapop. Se ha implementado utilizando HTML, CSS y JavaScript.

## Requisitos del Proyecto

### Funcionalidades Implementadas

1. **Listado de Anuncios:**
   - Se muestra un listado de anuncios que incluye imagen (Si no esta disponible se usa una default), nombre, descripción, precio y si es compra o venta.
   - Gestión de todos los estados de interfaz: vacío, error, carga y éxito.
   - Al hacer clic en un anuncio, se redirige a la pantalla de detalle de anuncio.
   - Si el usuario ha iniciado sesión, se muestra un botón para acceder a la pantalla de creación de un anuncio. 

2. **Detalle de Anuncio:**
   - Se muestra la foto (si disponible), nombre, descripción, precio y si es compra o venta del anuncio.
   - Gestión de todos los estados de interfaz: vacío, error, carga y éxito.
   - Si el usuario ha iniciado sesión, se muestra un botón para acceder a la pantalla de creación de un anuncio.
   - Si el usuario está autenticado y es propietario del anuncio, se muestra un botón para eliminar el anuncio, solicitando confirmación antes de eliminarlo.

3. **Creación de un Anuncio:**
   - Se presenta un formulario con campos para foto (opcional), nombre, descripción, precio y si es compra o venta.
   - Al enviar el formulario, se realiza una petición al backend para guardar el anuncio.
   - Gestión de todos los estados de interfaz: error, carga y éxito.
   - Esta pantalla solo es accesible para usuarios autenticados; de lo contrario, se redirecciona a la página de listado de anuncios.

4. **Login:**
   - Se muestra un formulario solicitando nombre de usuario y contraseña.
   - Al enviar el formulario, se autentica al usuario contra el backend para obtener un token JWT.
   - Gestión de todos los estados de interfaz: carga, error y éxito.

5. **Registro:**
   - Similar a la página de login, solicita nombre de usuario y contraseña.
   - Al enviar el formulario, registra al usuario en el backend.
   - Gestión de todos los estados de interfaz: carga, error y éxito.

### Requisitos Opcionales

- Gestión de paginación de anuncios en el listado. De inicio solo se mostraran 10 anuncios y un boton para cargar mas que cargara 10 mas hasta haber mostrado todos los anuncios
- Se ha implementado un buscador que busca sobre el campo nombre cada anuncio
- Es posible  editar un anuncio, solo si el usuario autenticado es el propietario del mismo.
- Filtrado de anuncios usando tags, con opción de incluir tags dinámicos, estos aparecen en un desplegable junto a la barra de busqueda. Tambien se puede acceder a ellos pulsando sobre el listado de tags de un anuncio para ver otros similares.

## Configuración del Backend

Se utiliza **sparrest.js** como API REST de apoyo para la práctica. Para configurar y ejecutar el servidor del backend, sigue estos pasos:

1. Clona el repositorio de sparrest.js.
2. Dentro de la carpeta del proyecto, instala las dependencias con `npm install`.
3. Copia el archivo db.json al directorio de sparrest.js
4. Inicia el servidor ejecutando `npm start`.
5. Por defecto, el servidor estará disponible en `http://127.0.0.1:8000/`.

### Endpoints Disponibles

- **POST /auth/register:** Permite registrar un usuario.
- **POST /auth/login:** Endpoint de autenticación para obtener un token JWT.
- **POST /upload:** Permite la subida de archivos.
- **/api/:** Contiene los endpoints ofrecidos por json-server.

Para usar métodos POST, PUT o DELETE en cualquier subruta de `/api/`, se necesita autenticación mediante token JWT. Añade la cabecera `Authorization: Bearer <token>` en las peticiones HTTP, donde `<token>` es el valor del token obtenido en el endpoint de login.

## Instrucciones de Ejecución

1. Clona este repositorio.
2. Ejecuta npx live-server.

## Posibilidades de mejora o ampliación:

1. Que el lisatdo de tags forme parte de una ruta espeficica dentro de la base de datos para no tener que hacer una llamada a toda la base de datos de anuncios para sacar el listado.
2. Posibilidad de incluir mas campos en el registro de usuario como Nombre, direccion etc.
3. Necesidad de un boton de venta para poner en contacto al comprador con el vendedor.
4. Creacion de un espacio de gestion de usuario para poder editar datos personales o foto de perfil.
5. Implementacion de un chat de contacto para evitar el uso de aplicaciones externas.
