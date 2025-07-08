# aplicacion-fullstack
Ejercicio de programacion

# Pasos de instalacion
- Dentro de vscode utilizaras git clone de esta rama en el repositorio
- Una vez clonado necesitaras tener instalado Docker Desktop y Docker Compose
- En la terminal que esta dentro de la carpeta del proyecto (a el que le hiciste clone) ejecutaras:

    docker-compose up -d

Esto iniciara los servicios dentro del contenedor

- Una vez finalizado el proceso utiliza:

    docker-compose ps

para ver si los servicios arrancaron y observar sus puertos. Ahora lo que siguiente es entrar a la url de Hasura, la cual debe ser:

    http://localhost:8080

para entrar al GraphiQL, con esto entraras a la pestaña "Data", seleccionas la base de datos, le das a "public" y trackearas todas las relaciones de la base de datos hasta que no quede nada por trackear y listo.

- Puedes acceder a Node-RED desde los puertos que estan en Docker Desktop o utilizar localhost con los puertos que te extrajo la terminal al ejecutar el comando anterios

# Pasos para importar los nodos de Node-RED
- En el proyecto dentro de la carpeta nodered, esta un archivo flows.json
- Copias el contenido de ese archivo y accedes a la interfaz de Node-RED (localhost:1880)
- En la esquina superior derecha estara el icono de un menu, le daras click al menu y seleccionaras "Import"
- Pegas el codigo o seleccionas el archivo para importarlo

Esto lo puedes probar desde Postman usando http://localhost:1880/api/datos y http://localhost:1880/api/cliente/"id en numerico sin las comillas"

# Arrancar la aplicación Next.Js
Una vez todo listo con el volumen de Docker, nos iremos a la direccion del proyecto "frontend" y crearemos un archivo env.local, el cual su contenido sera unicamente:

    NEXT_PUBLIC_NODERED_URL=http://localhost:1880

para que pueda tomar los endpoints de Nodered, luego entraremos a la carpeta frontend con nuestro IDE y una vez dentro del directorio con nuestro ejecutaremos el comando:

    npm run dev

para iniciar la aplicacion, una vez cargado te tendra que lanzar en el terminal diferentes URLs, a nosotros nos interesa la siguiente:

    http://localhost:3000

desde aca ya podras ver el frontend con los datos de la base de datos

# ¿Como se empezo el proyecto?
Despues de probar un buen rato ambas herramientas como Hasura (por lo interesante que fue GraphiQL) y Node-RED, opte por preguntar a la IA como puedo integrar estas tecnologias en Docker, ya que nunca lo he utilizado, al tener un docker-compose.yml listo, empece a escalarlo poco a poco hasta que pude iniciar despues de distintos intentos los servicios requeridos en el ejercicio, con esto pude integrar el init.sql para que docker dentro de postgres integrara una base de datos como la que se pide con datos poblados al arrancar, una vez esto listo decidi hacer el cliente frontend en Next.Js de forma sencilla
