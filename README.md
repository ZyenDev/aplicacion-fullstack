# aplicacion-fullstack
Ejercicio de programacion

# Pasos de instalacion
- Dentro de vscode utilizaras git clone de esta rama en el repositorio
- Una vez clonado necesitaras tener instalado Docker Desktop y Docker Compose
- En la terminal que esta dentro de la carpeta del proyecto (a el que le hiciste clone) ejecutaras docker-compose up -d
- Esto iniciara los servicios dentro del contenedor

Una vez finalizado el proceso utiliza docker-compose ps para ver si los servicios arrancaron y observar sus puertos
Puedes acceder a Node-RED desde los puertos que estan en Docker Desktop o utilizar localhost con los puertos que te extrajo la terminal al ejecutar el comando anterios

# Pasos para importar los nodos de Node-RED

- En el proyecto dentro de la carpeta nodered, esta un archivo flows.json
- Copias el contenido de ese archivo y accedes a la interfaz de Node-RED (localhost:1880)
- En la esquina superior derecha estara el icono de un menu, le daras click al menu y seleccionaras "Import"
- Pegas el codigo o seleccionas el archivo para importarlo

Esto lo puedes probar desde Postman usando http://localhost:1880/api/datos y http://localhost:1880/api/cliente/"id en numerico sin las comillas"

Falto la integracion de un Frontend en Next.Js ya que de momento desconozco como usarlo
Tuve problemas al hacer un post para crear los pedidos, por ende esta en progreso
