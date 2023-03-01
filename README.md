<h1 align="center"> API REST - Gestor de usuarios</h1>

## Tabla de contenidos:

---

-   [Descripción y contexto](#descripción-y-contexto)
-   [Guía de usuario](#guía-de-usuario)
-   [Guía de instalación](#guía-de-instalación)
-   [Simultaniedad de los usuarios en tiempo real](#simultaniedad-de-los-usuarios-en-tiempo-real)

## Descripción y contexto

---

API REST:

Validaciones del lado servidor, autenticacion y autorizacion con jwt(Json Web Token), vigencia del token 24h, control de los afiliados y referencia

## Guía de usuario

---

Endpoint: "{HOSTING}/docs": se describe detalladamente cada proceso que debe realizar el Frontend para operar correctamente con la API REST

## Guía de instalación

---

La API REST y el sistema servidor cumple con ciertos requisitos indispensables para su buen funcionamiento.

-   Sistemas Operativos: Windows, Linux, Mac requestMin(1GB RAM, 1GB HDD/SSD)
-   Gestor de base de datos: MySQL
-   Aplicaciones: Nodejs and npm (http://nodejs.org) entorno para la ejecucion de JavaScript

Guía de instalación:

-   Crear la base de datos
-   LLenar las variables de entorno:

```
    PORT: Puerto del hosting
    HOST: Hosting, local donde sera almacenada la API
    USER: Usuario de la base de datos
    PASS: Password de la base de datos
    DB_MYSQL: Nombre de la base de datos
    DB_PORT: Puerto de la base de datos
    EMAIL: Correo electronico del administrador del sistema
    PASSWORD: Password del administrador del sistema
    KEY_SECRET: Caracteres especiales secretos para el encriptado del token
    HOSTING: URL donde se encuentra el servidor example(http://localhost:PORT/) <== url local
```

-   Comandos para correr el proyecto

Descarga de dependencias

```
npm install
```

Servidor de desarrollo

```
npm run dev
```

Transpilar el codigo a javascript

```
npm run build
```

Servidor de produccion

```
npm run start
```

## Simultaniedad de los usuarios en tiempo real

---

Endpoint: "{HOSTING}/": Simple contador de las visitas y usuarios conectados simultaneamente
