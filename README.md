# Proyecto de Cumpleaños

Este proyecto es una aplicación Angular que te permite calcular los días hasta tu próximo cumpleaños. El componente principal de esta aplicación es `BirthdayComponent`.

## Componente `BirthdayComponent`

`BirthdayComponent` es un componente Angular que se encarga de recopilar información del usuario, validarla y calcular los días hasta su próximo cumpleaños. A continuación, se describen las características clave de este componente:

- **Formulario de Usuario**: El componente incluye un formulario que permite al usuario ingresar su nombre y la fecha de su cumpleaños.

- **Validación de Datos**: Antes de realizar cualquier cálculo, se verifica que los campos del formulario estén completos y que la fecha de cumpleaños sea válida.

- **Llamada a un Servicio**: Se utiliza el servicio `BirthdayService` para calcular los días hasta el próximo cumpleaños. Este servicio realiza una solicitud HTTP a un servidor Spring Boot para realizar el cálculo.

- **Mensajes de Error**: Si los datos ingresados no son válidos, se muestra un mensaje de error en un modal utilizando el componente `ModalComponent`.

- **Interfaz Gráfica**: El componente se integra con la interfaz gráfica de la aplicación, que puede incluir elementos como botones y campos de entrada.

Para obtener más detalles sobre la estructura y funcionamiento de este componente, asegúrate de revisar el código fuente y los comentarios en el mismo.

## Requisitos del Proyecto

Este proyecto requiere Angular y se integra con un servidor Spring Boot para calcular los días hasta el próximo cumpleaños. Asegúrate de tener todas las dependencias y servicios necesarios configurados antes de ejecutar la aplicación.

## Ejecución de la Aplicación

Para ejecutar la aplicación, sigue estos pasos:

1. Asegúrate de tener Angular CLI instalado en tu sistema.
2. Clona este repositorio en tu máquina local.
3. Abre una terminal en el directorio raíz del proyecto.
4. Ejecuta `ng serve` para iniciar el servidor de desarrollo de Angular.
5. Abre tu navegador web y navega a `http://localhost:4200` para acceder a la aplicación.

## Contribución

Si deseas contribuir a este proyecto o tienes alguna sugerencia, no dudes en ponerte en contacto.