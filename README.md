    🛠️ Configuración inicial

    Crear la base de datos en MySQL
    Antes de iniciar la aplicación, asegúrate de crear una base de datos en tu servidor MySQL con el nombre que desees.

    Cambiar la cadena de conexión
    Ve al archivo application.properties ubicado en el src y modifica la cadena de conexión con los datos de tu base de datos:
    spring.datasource.url=jdbc:mysql://localhost:3306/tu_basededatos
    spring.datasource.username=tu_usuario
    spring.datasource.password=tu_contraseña

    🚀Ejecucion

    Iniciar el back:
    Ejecuten el proyecto, ya sea desde InteliJDEA o desde la consola en la raiz del proyecto con "./mvnw spring-boot:run"

    Iniciar el front:
    Diriganse a la carpeta front-end y ejecuten el comando de "ng serve"
    
