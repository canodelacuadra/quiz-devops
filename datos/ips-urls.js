window.QUIZ = {
  "mensajes": {
    "perfecto": {
      "t": "¡Puntuación perfecta!",
      "x": "Has acertado todas las preguntas. Dominas las direcciones IP, los nombres de dominio y la anatomía de una URL."
    },
    "excelente": {
      "t": "¡Excelente trabajo!",
      "x": "Tienes muy claras las IPs, los dominios y las partes de una URL. Repasa las preguntas falladas y estarás perfecto."
    },
    "bien": {
      "t": "¡Buen trabajo!",
      "x": "Vas por buen camino. Lee con calma las explicaciones de este repaso y vuelve a intentarlo para subir la nota."
    },
    "practicar": {
      "t": "Sigue practicando",
      "x": "No te preocupes: lo importante es aprender. Revisa las explicaciones de abajo, repasa las direcciones y las URLs y vuelve a intentarlo."
    }
  },
  "preguntas": [
    {
      "pregunta": "¿Qué es una dirección IP?",
      "opciones": [
        "El número que identifica a un dispositivo dentro de una red",
        "El nombre de la página web",
        "La contraseña del router",
        "El puerto que usa el navegador"
      ],
      "correcta": 0,
      "explicacion": "Una dirección IP identifica a un dispositivo dentro de una red, igual que una dirección identifica una casa. Puede ser IPv4 o IPv6, y puede ser pública o privada según la red en la que se use."
    },
    {
      "pregunta": "¿Cuál es la diferencia principal entre IPv4 e IPv6?",
      "opciones": [
        "IPv6 es solo para redes privadas",
        "IPv4 es más moderno que IPv6",
        "IPv6 usa 128 bits y permite muchas más direcciones que IPv4",
        "IPv6 no necesita direcciones IP"
      ],
      "correcta": 2,
      "explicacion": "IPv4 utiliza 32 bits y permite aproximadamente 4.300 millones de direcciones. IPv6 utiliza 128 bits, por lo que dispone de un espacio de direcciones muchísimo mayor. IPv6 se escribe en hexadecimal y suele incluir dos puntos."
    },
    {
      "pregunta": "¿Qué caracteriza a una dirección IP privada?",
      "opciones": [
        "Puede usarse en cualquier servidor público sin restricciones",
        "Se usa dentro de una red local y no se enruta directamente por Internet",
        "Solo existe en IPv6",
        "Es la dirección que asigna el DNS a los dominios"
      ],
      "correcta": 1,
      "explicacion": "Las IP privadas se utilizan dentro de redes locales, como una casa, una oficina o un aula. No se enrutan directamente por Internet; para salir a la red pública se suele usar NAT en el router. Ejemplos habituales son 192.168.x.x o 10.x.x.x."
    },
    {
      "pregunta": "¿Qué dirección se usa normalmente para referirse a localhost en IPv4?",
      "opciones": [
        "0.0.0.0",
        "255.255.255.255",
        "192.168.1.1",
        "127.0.0.1"
      ],
      "correcta": 3,
      "explicacion": "127.0.0.1 es la dirección de loopback en IPv4: apunta al propio equipo. En IPv6 se usa ::1. La dirección 0.0.0.0 se emplea para escuchar en todas las interfaces y 255.255.255.255 es la dirección de broadcast."
    },
    {
      "pregunta": "¿Qué función cumple el DNS?",
      "opciones": [
        "Traducir nombres de dominio a direcciones IP",
        "Asignar una IP privada a cada visitante",
        "Cifrar las peticiones HTTP",
        "Guardar los archivos de la web"
      ],
      "correcta": 0,
      "explicacion": "El DNS funciona como una agenda: el navegador le pregunta por la IP asociada a un nombre como www.ejemplo.com y recibe la dirección del servidor al que debe conectarse. Así no necesitamos recordar números IP."
    },
    {
      "pregunta": "¿Qué es una URL?",
      "opciones": [
        "El nombre del servidor donde se aloja una base de datos",
        "Un programa para diseñar páginas web",
        "La dirección que identifica un recurso en la Web y permite localizarlo",
        "La contraseña de acceso a un sitio"
      ],
      "correcta": 2,
      "explicacion": "Una URL (Uniform Resource Locator) es la dirección completa de un recurso en la Web. Incluye el esquema o protocolo, el host, y puede incluir puerto, ruta, query string y fragmento."
    },
    {
      "pregunta": "En https://www.ejemplo.com/cursos/html, ¿qué parte es el esquema o protocolo?",
      "opciones": [
        "www",
        "https",
        "ejemplo.com",
        "/cursos/html"
      ],
      "correcta": 1,
      "explicacion": "El esquema indica cómo se realiza la conexión. En este caso, https significa HTTP sobre TLS, una comunicación cifrada. Otros esquemas habituales son http, ftp o mailto."
    },
    {
      "pregunta": "En https://www.ejemplo.com/cursos/html, ¿qué parte es el host?",
      "opciones": [
        "https",
        "/cursos/html",
        "html",
        "www.ejemplo.com"
      ],
      "correcta": 3,
      "explicacion": "El host identifica el servidor al que se conecta el navegador. Aquí es www.ejemplo.com. El nombre de dominio ejemplo.com forma parte del host, y www es un subdominio."
    },
    {
      "pregunta": "En https://www.ejemplo.com:8443/cursos, ¿qué indica :8443?",
      "opciones": [
        "Un puerto distinto del predeterminado para HTTPS",
        "El nombre de la carpeta de cursos",
        "La versión del navegador",
        "Una dirección IP privada"
      ],
      "correcta": 0,
      "explicacion": "El puerto indica a qué servicio del servidor se conecta el cliente. HTTPS usa el puerto 443 por defecto; aquí se está indicando el 8443 de forma explícita. HTTP usa el 80 por defecto."
    },
    {
      "pregunta": "En https://www.ejemplo.com/cursos/html?nivel=basico, ¿qué parte es la ruta del recurso?",
      "opciones": [
        "https",
        "www.ejemplo.com",
        "/cursos/html",
        "?nivel=basico"
      ],
      "correcta": 2,
      "explicacion": "La ruta o path indica la ubicación del recurso dentro del servidor. En este ejemplo es /cursos/html. La parte que empieza por ? es la query string, no la ruta."
    },
    {
      "pregunta": "En https://www.ejemplo.com/buscar?q=html&orden=asc, ¿qué parte es la query string?",
      "opciones": [
        "/buscar",
        "?q=html&orden=asc",
        "https",
        "www.ejemplo.com"
      ],
      "correcta": 1,
      "explicacion": "La query string comienza con ? y contiene parámetros con formato clave=valor separados por &. Aquí q=html y orden=asc. Los valores especiales, como los espacios, se codifican en la URL, por ejemplo con %20."
    },
    {
      "pregunta": "¿Qué parte de la URL empieza por # y se usa para señalar una sección dentro de la página?",
      "opciones": [
        "El esquema",
        "El puerto",
        "El host",
        "El fragmento"
      ],
      "correcta": 3,
      "explicacion": "El fragmento o ancla empieza por # y permite enlazar a una sección concreta de la página. Normalmente lo procesa el navegador y no se envía al servidor como parte de la petición HTTP."
    },
    {
      "pregunta": "¿Cuál es la diferencia entre un dominio y una URL?",
      "opciones": [
        "El dominio es el nombre del sitio; la URL es la dirección completa de un recurso",
        "El dominio incluye la ruta y la URL solo el nombre",
        "Son exactamente lo mismo",
        "La URL solo existe en IPv4 y el dominio en IPv6"
      ],
      "correcta": 0,
      "explicacion": "El dominio es el nombre del sitio, por ejemplo ejemplo.com. La URL es la dirección completa de un recurso e incluye el esquema, el host, la ruta y, si hace falta, el puerto, la query string y el fragmento."
    },
    {
      "pregunta": "¿Qué significa que una URL sea absoluta?",
      "opciones": [
        "Que solo funciona dentro de la carpeta actual",
        "Que no necesita protocolo para abrirse",
        "Que incluye el esquema y el host, por lo que puede usarse desde cualquier página",
        "Que apunta siempre a localhost"
      ],
      "correcta": 2,
      "explicacion": "Una URL absoluta incluye el esquema y el host, por ejemplo https://www.ejemplo.com/cursos. Una URL relativa se interpreta a partir de la dirección de la página actual, como /cursos o imagen.png."
    },
    {
      "pregunta": "¿Qué representa %20 en una URL?",
      "opciones": [
        "El puerto 20",
        "Un espacio codificado en la URL",
        "Una dirección IP privada",
        "El nombre de un dominio"
      ],
      "correcta": 1,
      "explicacion": "Las URLs no pueden contener ciertos caracteres directamente. El espacio, por ejemplo, se codifica como %20. Esta codificación permite enviar valores con espacios o símbolos especiales en la ruta o en la query string."
    }
  ]
};
