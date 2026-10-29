window.QUIZ = {
  "mensajes": {
    "perfecto": {
      "t": "¡Puntuación perfecta!",
      "x": "Has acertado todas las preguntas. Dominas los conceptos fundamentales de la Web: DNS, IP, dominios, hosting, servidores, puertos y la pila LAMP."
    },
    "excelente": {
      "t": "¡Excelente trabajo!",
      "x": "Tienes muy claros los conceptos de la web. Repasa las preguntas falladas y estarás perfecto."
    },
    "bien": {
      "t": "¡Buen trabajo!",
      "x": "Vas por buen camino. Lee con calma las explicaciones de este repaso y vuelve a intentarlo para subir la nota."
    },
    "practicar": {
      "t": "Sigue practicando",
      "x": "No te preocupes: lo importante es aprender. Revisa las explicaciones de abajo, repasa los conceptos y vuelve a intentarlo."
    }
  },
  "preguntas": [
    {
      "pregunta": "¿Cuál es la función principal del DNS?",
      "opciones": [
        "Traducir nombres como www.ejemplo.com a direcciones IP",
        "Enviar correos electrónicos",
        "Guardar las fotos de las webs",
        "Diseñar el aspecto de las páginas"
      ],
      "correcta": 0,
      "explicacion": "El DNS es la «agenda de contactos» de Internet: tú dices el nombre de la web y él te da el número (la IP) al que hay que llamar para encontrarla."
    },
    {
      "pregunta": "Cuando escribes www.ejemplo.com y pulsas Enter, ¿qué le pregunta tu navegador al DNS?",
      "opciones": [
        "¿Qué IP tiene esta web?",
        "¿Cuál es la contraseña del servidor?",
        "¿Me puedes enviar la página completa?",
        "¿Qué fotos tiene esta web?"
      ],
      "correcta": 0,
      "explicacion": "El navegador pregunta al DNS por la IP de ese nombre. Con el número en la mano, ya puede pedir la página al servidor web correspondiente."
    },
    {
      "pregunta": "¿Qué es una dirección IP?",
      "opciones": [
        "El número que identifica a cada ordenador dentro de la red",
        "El nombre de la persona que usa el ordenador",
        "La contraseña del Wi-Fi",
        "El título de la página web"
      ],
      "correcta": 0,
      "explicacion": "Cada ordenador conectado a Internet tiene una IP: un número que funciona como su «dirección de casa» para saber a dónde enviar los datos."
    },
    {
      "pregunta": "Una dirección IP sería como…",
      "opciones": [
        "La dirección de una casa: dice dónde está cada ordenador",
        "El color del ordenador",
        "La marca del teclado",
        "El nombre del navegador que usas"
      ],
      "correcta": 0,
      "explicacion": "Para enviar una carta necesitas la dirección de la casa; para enviar datos por la red necesitas la IP del ordenador. Mismo concepto, mundo digital."
    },
    {
      "pregunta": "En la dirección https://www.ejemplo.com, ¿cuál es el dominio?",
      "opciones": [
        "ejemplo.com",
        "https",
        "www",
        "el candado de seguridad"
      ],
      "correcta": 0,
      "explicacion": "El dominio es el nombre principal de la web: ejemplo.com. «https» es la forma de conectar y «www» indica que es una web."
    },
    {
      "pregunta": "¿Por qué usamos nombres de dominio (ejemplo.com) en lugar de direcciones IP?",
      "opciones": [
        "Porque los nombres son más fáciles de recordar que los números",
        "Porque las IP están prohibidas",
        "Porque los dominios hacen la web más rápida",
        "Porque las IP solo sirven para el correo"
      ],
      "correcta": 0,
      "explicacion": "Recordar ejemplo.com es mucho más fácil que recordar un número largo. El DNS se encarga, en segundo plano, de traducir el nombre a su IP."
    },
    {
      "pregunta": "¿Qué es el hosting?",
      "opciones": [
        "El «alquiler» de espacio en un servidor para guardar tu web",
        "El programa para diseñar páginas",
        "El nombre del dueño de la web",
        "Un tipo de cable de red"
      ],
      "correcta": 0,
      "explicacion": "Tu web tiene que estar guardada en algún sitio que nunca se apague. Contratar hosting es como alquilar un local: pones tus archivos allí y quedan abiertos al público 24 horas."
    },
    {
      "pregunta": "¿Qué es un servidor web?",
      "opciones": [
        "Un ordenador siempre encendido que guarda las webs y las envía cuando alguien las pide",
        "El portátil del diseñador de la web",
        "Un mueble donde se guardan los cables",
        "La impresora de la oficina"
      ],
      "correcta": 0,
      "explicacion": "Su trabajo es fácil de explicar: espera a que un navegador le pida una página y se la envía. Por eso nunca se apaga."
    },
    {
      "pregunta": "¿Para qué sirve el puerto?",
      "opciones": [
        "Para indicar a qué servicio van los datos, como el número de un apartamento",
        "Para medir el tamaño de la pantalla",
        "Para poner música en la web",
        "Para cerrar el navegador"
      ],
      "correcta": 0,
      "explicacion": "Si la IP es la dirección del edificio, el puerto es el número del apartamento: dice por qué «puerta» entran los datos (por ejemplo, la 443 para webs seguras)."
    },
    {
      "pregunta": "¿Qué significa que una web empiece por https:// (y muestre un candado)?",
      "opciones": [
        "Que la comunicación con esa web va cifrada y es más segura",
        "Que la web es más rápida que las demás",
        "Que es la página oficial del gobierno",
        "Que necesitas un móvil para abrirla"
      ],
      "correcta": 0,
      "explicacion": "La «s» final significa «seguro»: los datos viajan cifrados y nadie puede leerlos por el camino. Es lo que ves en tiendas online o al iniciar sesión."
    },
    {
      "pregunta": "En el modelo cliente-servidor, ¿quién da el primer paso?",
      "opciones": [
        "El cliente: pide algo y espera la respuesta del servidor",
        "El servidor: envía cosas sin que nadie las pida",
        "Los dos a la vez, sin orden",
        "El router: decide quién empieza"
      ],
      "correcta": 0,
      "explicacion": "Como en un restaurante: primero el cliente pide (tu navegador) y luego el servidor sirve. Sin petición no hay respuesta."
    },
    {
      "pregunta": "Cuando navegas por una web, ¿qué papel juega tu navegador (Chrome, Firefox…)?",
      "opciones": [
        "Es el cliente: pide las páginas y las muestra en pantalla",
        "Es el servidor: guarda las webs que visitas",
        "Es el DNS de la web visitada",
        "No tiene ningún papel"
      ],
      "correcta": 0,
      "explicacion": "El navegador construye la petición, la envía al servidor y pinta en tu pantalla lo que recibe. Por eso se le llama «cliente»."
    },
    {
      "pregunta": "Al abrir una web por primera vez, ¿en qué orden ocurre todo?",
      "opciones": [
        "El DNS da la IP del dominio → el navegador pide la página al servidor → el servidor la envía",
        "El servidor busca al cliente → el DNS envía la página → el navegador la guarda",
        "El navegador guarda la página → el servidor pide la IP → el DNS responde",
        "El hosting crea la web → el dominio se registra → el cliente la compra"
      ],
      "correcta": 0,
      "explicacion": "Primero se traduce el nombre (DNS), después se pide la página (petición) y por último se recibe (respuesta). Así de simple funciona la web."
    },
    {
      "pregunta": "¿Qué es Internet?",
      "opciones": [
        "Una red mundial que conecta millones de ordenadores entre sí",
        "La red privada de una empresa",
        "Un programa para ver páginas",
        "El conjunto de todos los cables de una oficina"
      ],
      "correcta": 0,
      "explicacion": "Internet es «la red de redes»: millones de redes pequeñas conectadas entre sí forman una red gigante a la que llega casi todo el planeta."
    },
    {
      "pregunta": "¿Qué es una intranet?",
      "opciones": [
        "Una red privada que solo pueden usar las personas de la empresa",
        "Lo mismo que Internet, pero gratis",
        "Una web para vender productos",
        "Una red que solo funciona de noche"
      ],
      "correcta": 0,
      "explicacion": "Usa la misma tecnología que Internet, pero es un «club privado»: solo entran los empleados, para ver documentos y herramientas internas."
    },
    {
      "pregunta": "¿Qué es una extranet?",
      "opciones": [
        "Una red privada que también abre la puerta a personas externas autorizadas",
        "Una red que pueden usar todos los vecinos del barrio",
        "Una red sin contraseñas",
        "La parte de Internet que aparece en Google"
      ],
      "correcta": 0,
      "explicacion": "Es una intranet que se «abre un poco»: además de los empleados, entran socios, proveedores o clientes autorizados, siempre con su usuario y contraseña."
    },
    {
      "pregunta": "Una tienda deja que sus proveedores consulten los pedidos con usuario y contraseña, pero nadie más puede entrar. ¿Qué es?",
      "opciones": [
        "Una extranet",
        "Una intranet, porque pide contraseña",
        "Internet normal",
        "Una red P2P"
      ],
      "correcta": 0,
      "explicacion": "Al permitir entrar solo a personas externas concretas y autorizadas, la red privada deja de ser intranet y pasa a ser extranet."
    },
    {
      "pregunta": "¿Qué significa la pila LAMP?",
      "opciones": [
        "Linux, Apache, MySQL y PHP",
        "Luz, Agua, Metales y Plástico",
        "Linux, Apple, Microsoft y PayPal",
        "Una lámpara conectada a Internet"
      ],
      "correcta": 0,
      "explicacion": "Son las cuatro piezas gratuitas y abiertas que suelen trabajar juntas en un servidor web: el sistema, el servidor, la base de datos y el lenguaje."
    },
    {
      "pregunta": "En la pila LAMP, ¿qué hace Apache?",
      "opciones": [
        "Recibe las peticiones de los navegadores y les envía las páginas",
        "Es el sistema operativo del servidor",
        "Guarda los datos de los usuarios",
        "Dibuja la página en tu pantalla"
      ],
      "correcta": 0,
      "explicacion": "Apache es el «recepcionista» del servidor: atiende a cada visitante y le entrega lo que pide."
    },
    {
      "pregunta": "En la pila LAMP, ¿qué hace MySQL?",
      "opciones": [
        "Guarda y ordena los datos: usuarios, productos, comentarios…",
        "Es el sistema operativo del servidor",
        "Es el navegador del cliente",
        "Sirve las páginas al visitante"
      ],
      "correcta": 0,
      "explicacion": "MySQL es la base de datos: un archivador muy ordenado donde se guarda la información de la web, lista para usarse cuando haga falta."
    },
    {
      "pregunta": "En la pila LAMP, ¿qué hace PHP?",
      "opciones": [
        "Genera las páginas en el servidor antes de enviarlas al navegador",
        "Es el navegador del usuario",
        "Cifra la conexión a Internet",
        "Es el sistema operativo del servidor"
      ],
      "correcta": 0,
      "explicacion": "PHP prepara «al momento» cada página: consulta los datos, los mezcla con el diseño y entrega al navegador la página ya terminada."
    },
    {
      "pregunta": "En la pila LAMP, ¿cuál es el sistema operativo sobre el que se apoya todo?",
      "opciones": [
        "Linux",
        "Apache",
        "MySQL",
        "PHP"
      ],
      "correcta": 0,
      "explicacion": "Linux es la base sobre la que se instalan las demás piezas. Es gratuito, muy estable y el rey de los servidores."
    }
  ]
};
