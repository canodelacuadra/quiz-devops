'use strict';
/* ================= DATOS DEL QUIZ =================
   Las preguntas y los mensajes llegan desde window.QUIZ, definido en datos/*.js.
   En cada pregunta: opciones (4), correcta = índice de la correcta (0-3),
   explicacion = texto que se muestra tras responder. */
var PREGUNTAS = (window.QUIZ && window.QUIZ.preguntas) || [];

/* ================= LÓGICA DEL QUIZ ================= */
var LETRAS = ['A', 'B', 'C', 'D'];
var preguntas = [], actual = 0, seleccionada = null, respuestas = [];

function $(id) { return document.getElementById(id); }
function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
function iconoSvg(nombre) {
  var rutas = {
    'check': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
    'cruz': '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
    'bombilla': '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    'flecha': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'
  };
  return '<svg class="marca" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + rutas[nombre] + '</svg>';
}

function mezclar(lista) {
  return lista.map(function (q) {
    var idx = q.opciones.map(function (_, i) { return i; });
    for (var i = idx.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = idx[i]; idx[i] = idx[j]; idx[j] = t;
    }
    return { pregunta: q.pregunta, opciones: idx.map(function (i) { return q.opciones[i]; }), correcta: idx.indexOf(q.correcta), explicacion: q.explicacion };
  });
}

function mostrar(nombre) {
  ['inicio', 'pregunta', 'resultados'].forEach(function (s) {
    $('pantalla-' + s).hidden = (s !== nombre);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function aciertos() {
  var n = 0;
  for (var i = 0; i < preguntas.length; i++) {
    if (respuestas[i] !== undefined && respuestas[i] === preguntas[i].correcta) n++;
  }
  return n;
}

function pintarProgreso() {
  var total = preguntas.length;
  $('progreso-texto').innerHTML = 'Pregunta <span class="verde">' + (actual + 1) + '</span> de ' + total;
  $('progreso-aciertos').textContent = aciertos() + ' aciertos hasta ahora';
  $('etiqueta-numero').textContent = 'Pregunta ' + (actual + 1);
  var pct = ((actual + (seleccionada !== null ? 1 : 0)) / total) * 100;
  $('barra-relleno').style.width = pct + '%';
  $('barra-relleno').setAttribute('aria-label', 'Progreso: pregunta ' + (actual + 1) + ' de ' + total);
}

function pintarPregunta() {
  var q = preguntas[actual];
  seleccionada = null;
  $('texto-pregunta').textContent = q.pregunta;
  $('grupo-opciones').innerHTML = q.opciones.map(function (op, i) {
    return '<button type="button" class="opcion" data-i="' + i + '" onclick="seleccionar(' + i + ')">' +
      '<span class="letra">' + LETRAS[i] + '</span>' +
      '<span class="texto">' + esc(op) + '</span>' +
      '</button>';
  }).join('');
  $('caja-feedback').hidden = true;
  $('zona-siguiente').hidden = true;
  pintarProgreso();
}

function empezar() {
  preguntas = mezclar(PREGUNTAS);
  actual = 0;
  respuestas = [];
  mostrar('pregunta');
  pintarPregunta();
}

function seleccionar(i) {
  if (seleccionada !== null) return;
  seleccionada = i;
  respuestas[actual] = i;
  var q = preguntas[actual];
  var botones = document.querySelectorAll('#grupo-opciones .opcion');
  botones.forEach(function (b, idx) {
    b.disabled = true;
    if (idx === q.correcta) { b.classList.add('correcta'); b.insertAdjacentHTML('beforeend', iconoSvg('check')); }
    else if (idx === i) { b.classList.add('fallada'); b.insertAdjacentHTML('beforeend', iconoSvg('cruz')); }
    else { b.classList.add('apagada'); }
  });
  var ok = (i === q.correcta);
  var caja = $('caja-feedback');
  caja.className = 'feedback ' + (ok ? 'fb-ok' : 'fb-casi');
  $('fb-icono').innerHTML = iconoSvg(ok ? 'check' : 'bombilla');
  $('fb-titulo').textContent = ok ? '¡Correcto, muy bien!' : 'Casi. La respuesta correcta es la ' + LETRAS[q.correcta] + '.';
  $('fb-texto').textContent = q.explicacion;
  caja.hidden = false;
  $('btn-siguiente').innerHTML = (actual === preguntas.length - 1 ? 'Ver mi resultado' : 'Siguiente pregunta') +
    ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.25rem;height:1.25rem;margin-left:.5rem"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
  $('zona-siguiente').hidden = false;
  pintarProgreso();
}

function siguiente() {
  if (actual === preguntas.length - 1) {
    pintarResultados();
    mostrar('resultados');
  } else {
    actual++;
    pintarPregunta();
  }
}

function mensajeResultado(pct) {
  var m = (window.QUIZ && window.QUIZ.mensajes) || {};
  if (pct === 100 && m.perfecto) return m.perfecto;
  if (pct >= 75 && m.excelente) return m.excelente;
  if (pct >= 50 && m.bien) return m.bien;
  if (m.practicar) return m.practicar;
  return { t: 'Sigue practicando', x: 'Revisa las explicaciones y vuelve a intentarlo.' };
}

var totalPreguntasEl = document.getElementById('total-preguntas');
if (totalPreguntasEl) totalPreguntasEl.textContent = PREGUNTAS.length + ' preguntas';

function pintarResultados() {
  var total = preguntas.length, ok = aciertos();
  var pct = (ok / total) * 100;
  var nota = (ok / total * 10).toFixed(1).replace('.', ',');
  var m = mensajeResultado(pct);
  $('res-titulo').textContent = m.t;
  $('res-texto').textContent = m.x;
  $('res-aciertos').textContent = ok;
  $('res-total').textContent = '/ ' + total;
  $('res-nota').textContent = nota;
  $('lista-repaso').innerHTML = preguntas.map(function (q, i) {
    var bien = (respuestas[i] === q.correcta);
    return '<li class="repaso ' + (bien ? 'r-ok' : 'r-mal') + '">' +
      '<div class="repaso-flex">' +
      '<span class="repaso-icono">' + iconoSvg(bien ? 'check' : 'cruz') + '</span>' +
      '<div style="min-width:0">' +
      '<p class="repaso-pregunta">' + (i + 1) + '. ' + esc(q.pregunta) + '</p>' +
      (bien ? '' : '<p class="repaso-correcta">Respuesta correcta: ' + esc(q.opciones[q.correcta]) + '</p>') +
      '<p class="repaso-explicacion">' + esc(q.explicacion) + '</p>' +
      '</div></div></li>';
  }).join('');
}
