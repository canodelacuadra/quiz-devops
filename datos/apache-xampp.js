window.QUIZ = {
  mensajes: {
    "perfecto": {
      "t": "¡Puntuación perfecta!",
      "x": "Has acertado todas las preguntas. Dominas la configuración de Apache en XAMPP: httpd.conf, directivas, hosts virtuales y logs."
    },
    "excelente": {
      "t": "¡Excelente trabajo!",
      "x": "Tienes muy claras las directivas y los archivos de configuración de Apache. Repasa las preguntas falladas y estarás perfecto."
    },
    "bien": {
      "t": "¡Buen trabajo!",
      "x": "Vas por buen camino. Lee con calma las explicaciones de este repaso y vuelve a intentarlo para subir la nota."
    },
    "practicar": {
      "t": "Sigue practicando",
      "x": "No te preocupes: lo importante es aprender. Revisa las explicaciones de abajo, abre la carpeta conf de XAMPP y vuelve a intentarlo."
    }
  },
  preguntas: [
  {
    pregunta: '¿Qué función cumple Apache dentro de XAMPP?',
    opciones: [
      'Gestionar la base de datos MySQL',
      'Recibir peticiones HTTP y entregar las páginas y recursos de la web',
      'Editar el código PHP de la aplicación',
      'Administrar los correos electrónicos del servidor'
    ],
    correcta: 1,
    explicacion: 'Apache es el servidor web de XAMPP. Recibe las peticiones HTTP del navegador y sirve los archivos de la web. Cuando la página contiene PHP, Apache pasa la petición al intérprete de PHP y devuelve el resultado al navegador. MySQL es el gestor de la base de datos y es un componente distinto.'
  },
  {
    pregunta: '¿Dónde se encuentra el archivo principal de configuración de Apache en una instalación estándar de XAMPP para Windows?',
    opciones: [
      'C:/xampp/htdocs/httpd.conf',
      'C:/xampp/apache/logs/httpd.conf',
      'C:/xampp/php/httpd.conf',
      'C:/xampp/apache/conf/httpd.conf'
    ],
    correcta: 3,
    explicacion: 'El archivo principal es C:/xampp/apache/conf/httpd.conf. La carpeta htdocs contiene los proyectos web, no la configuración de Apache. La carpeta logs guarda los registros y la carpeta php contiene el intérprete de PHP.'
  },
  {
    pregunta: '¿Qué directiva de httpd.conf indica el puerto en el que Apache escucha las peticiones?',
    opciones: [
      'Listen',
      'DocumentRoot',
      'ServerName',
      'Include'
    ],
    correcta: 0,
    explicacion: 'Listen establece el puerto de escucha, por ejemplo Listen 80 para HTTP o Listen 443 para HTTPS. Si otro programa ya está usando ese puerto, Apache no podrá arrancar correctamente y habrá que revisar el conflicto.'
  },
  {
    pregunta: '¿Qué directiva define la carpeta raíz desde la que Apache sirve los documentos?',
    opciones: [
      'ServerName',
      'Listen',
      'ErrorLog',
      'DocumentRoot'
    ],
    correcta: 3,
    explicacion: 'DocumentRoot indica la carpeta que corresponde a la raíz del sitio. En una instalación habitual de XAMPP suele ser C:/xampp/htdocs. Los archivos y carpetas que estén dentro de esa ruta se pueden solicitar desde el navegador.'
  },
  {
    pregunta: '¿Qué directiva asocia un nombre de dominio o de servidor a la configuración de Apache?',
    opciones: [
      'ServerName',
      'DocumentRoot',
      'AllowOverride',
      'CustomLog'
    ],
    correcta: 0,
    explicacion: 'ServerName identifica el nombre del servidor, por ejemplo localhost o un dominio concreto. Dentro de un bloque VirtualHost se utiliza para indicar el dominio al que se aplica esa configuración.'
  },
  {
    pregunta: '¿Para qué se utiliza la directiva Directory en httpd.conf?',
    opciones: [
      'Para cargar un módulo de Apache',
      'Para cambiar el puerto de escucha',
      'Para definir reglas y permisos que se aplican a una carpeta concreta',
      'Para incluir otro archivo de configuración'
    ],
    correcta: 2,
    explicacion: 'Los bloques Directory permiten aplicar directivas a una carpeta del sistema de archivos, como Options, AllowOverride o Require. Así se controla qué se puede hacer con los archivos de esa ruta y quién puede acceder a ellos.'
  },
  {
    pregunta: '¿Qué directiva determina si los archivos .htaccess pueden sobrescribir parte de la configuración?',
    opciones: [
      'LoadModule',
      'Include',
      'AllowOverride',
      'Listen'
    ],
    correcta: 2,
    explicacion: 'AllowOverride controla el uso de .htaccess. Con None se ignora ese archivo; con All se permiten la mayoría de sus directivas. En un entorno local se suele usar All para la carpeta de proyectos, pero conviene entender el riesgo antes de cambiarlo.'
  },
  {
    pregunta: '¿Qué directiva se utiliza para activar módulos como mod_rewrite?',
    opciones: [
      'LoadModule',
      'ServerName',
      'DocumentRoot',
      'ErrorLog'
    ],
    correcta: 0,
    explicacion: 'LoadModule carga un módulo en Apache. Por ejemplo, LoadModule rewrite_module modules/mod_rewrite.so activa las reescrituras de URL. Si la línea está comentada con #, el módulo no se carga aunque esté instalado.'
  },
  {
    pregunta: '¿Qué directiva permite incorporar otros archivos de configuración dentro de httpd.conf?',
    opciones: [
      'Include',
      'Listen',
      'DirectoryIndex',
      'CustomLog'
    ],
    correcta: 0,
    explicacion: 'Include permite dividir la configuración en varios archivos. Un ejemplo típico es Include conf/extra/httpd-vhosts.conf. Si esa línea está comentada, los hosts virtuales definidos en el archivo incluido no se aplicarán.'
  },
  {
    pregunta: '¿Dónde se suele encontrar el archivo que contiene los hosts virtuales en XAMPP?',
    opciones: [
      'C:/xampp/apache/conf/httpd.conf',
      'C:/xampp/apache/conf/extra/httpd-vhosts.conf',
      'C:/xampp/apache/logs/access.log',
      'C:/xampp/htdocs/vhosts.conf'
    ],
    correcta: 1,
    explicacion: 'Los hosts virtuales se definen habitualmente en C:/xampp/apache/conf/extra/httpd-vhosts.conf. Para que se apliquen, httpd.conf debe incluir ese archivo mediante la directiva Include y la línea no debe estar comentada.'
  },
  {
    pregunta: '¿Qué significa la etiqueta VirtualHost *:80?',
    opciones: [
      'Que el host virtual solo acepta peticiones desde localhost',
      'Que el host virtual atiende peticiones en cualquier IP del puerto 80',
      'Que Apache escucha únicamente en el puerto 443',
      'Que el host virtual se aplica solo a archivos PHP'
    ],
    correcta: 1,
    explicacion: 'El asterisco representa todas las interfaces de red y :80 indica el puerto HTTP. Por tanto, ese bloque atiende peticiones HTTP que lleguen al puerto 80. Para HTTPS se utiliza habitualmente el puerto 443.'
  },
  {
    pregunta: '¿Qué directiva registra los errores de Apache?',
    opciones: [
      'CustomLog',
      'ServerName',
      'DocumentRoot',
      'ErrorLog'
    ],
    correcta: 3,
    explicacion: 'ErrorLog indica dónde se escriben los errores del servidor, por ejemplo ErrorLog "logs/error.log". Revisar ese archivo es una de las primeras cosas que debemos hacer si Apache no arranca o una página falla.'
  },
  {
    pregunta: '¿Dónde se guardan normalmente los logs de Apache en XAMPP?',
    opciones: [
      'C:/xampp/htdocs/logs',
      'C:/xampp/php/logs',
      'C:/xampp/apache/logs',
      'C:/xampp/mysql/logs'
    ],
    correcta: 2,
    explicacion: 'Los registros de Apache están en C:/xampp/apache/logs. Allí suelen encontrarse error.log y access.log. El archivo de errores ayuda a diagnosticar problemas y el de accesos registra las peticiones recibidas.'
  },
  {
    pregunta: 'Después de modificar httpd.conf, ¿qué es lo más recomendable?',
    opciones: [
      'Borrarlo y volver a instalar XAMPP',
      'Hacer una copia previa, comprobar la sintaxis y reiniciar Apache',
      'Reiniciar el ordenador sin comprobar nada',
      'Cambiar el puerto 80 por el 3306'
    ],
    correcta: 1,
    explicacion: 'Antes de editar conviene guardar una copia del archivo. Después se comprueba la sintaxis, por ejemplo con httpd -t, y se reinicia Apache desde el panel de XAMPP. Si hay un error, se revisa el mensaje y el archivo error.log.'
  },
  {
    pregunta: '¿Cuál es una buena práctica al editar la configuración de Apache?',
    opciones: [
      'Editar directamente sin copia y probar en producción',
      'Publicar httpd.conf en la carpeta htdocs para consultarlo',
      'Desactivar todos los logs para que vaya más rápido',
      'Guardar una copia del archivo y documentar los cambios antes de aplicarlos'
    ],
    correcta: 3,
    explicacion: 'Es recomendable conservar una copia de la configuración, anotar qué se cambia y probar los cambios en local antes de aplicarlos en un servidor real. El archivo de configuración no debe publicarse en htdocs y los logs son necesarios para detectar problemas.'
  }
]
};
