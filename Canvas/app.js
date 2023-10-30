const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");

/* Dibujar un rectángulo */
ctx.fillStyle = "rgb(215, 17, 17)"; /* Color Relleno */
ctx.beginPath();
ctx.fillRect(0, 0, 100, 300); /* fillRect (x, y, width, height) */
ctx.closePath();

ctx.fillStyle = "blue"
ctx.beginPath();
ctx.rect(310, 70, 80, 50)
ctx.fill();
ctx.closePath();

/* Trazar una linea */
ctx.strokeStyle = "black"; /* Color borde */
ctx.lineWidth = 3; /* Grosor */
ctx.lineCap = "round"; /* Bordes redondeados */
ctx.beginPath(); /* Iniciar camino */
ctx.moveTo(110, 50); /* Punto de inicio moveTo (x1, y1)  */
ctx.lineTo(110, 150); /* Punto de fin lineTo (x2, y2) */ 
ctx.stroke(); /* Realizar trazo  */
ctx.closePath(); /* Cerrar camino  */

/* Dibujar un círculo */
ctx.fillStyle = "orange";
ctx.strokeStyle = "black"
ctx.lineWidth = 3
ctx.beginPath();
ctx.arc(150, 100, 40, 0, 2*Math.PI); /* arc (x, y, radio, ∠ inicial, ∠ final) */
ctx.fill(); /* Rellenar figura */
ctx.stroke();
ctx.closePath();

/* Dibujar un hexágono */
ctx.fillStyle = "pink"
ctx.strokeStyle = "#000";
ctx.beginPath();
ctx.moveTo(250, 50);
ctx.lineTo(220, 75)
ctx.lineTo(220, 110)
ctx.lineTo(250, 135)
ctx.lineTo(280, 110)
ctx.lineTo(280, 75)
ctx.lineTo(250, 50);
ctx.fill();
ctx.closePath();

/* Usar gradientes en una figura */
const grd = ctx.createLinearGradient(120,0,220,0); /* createLinearGradient(x0, y0, x1, y1) */
grd.addColorStop(0,"red"); /* addColorStop (posición, color) */
grd.addColorStop(1,"yellow");

ctx.fillStyle = grd
ctx.strokeStyle = "#000";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.rect(120, 200, 100, 50);
ctx.fill();
ctx.stroke();
ctx.closePath();