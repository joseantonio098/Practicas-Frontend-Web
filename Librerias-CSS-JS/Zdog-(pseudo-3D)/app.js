//----------------------------------------> EJEMPLO 1
let illo = new Zdog.Illustration({ //Creamos el lienzo (Elemento Padre)
    element : '.zdog-canvas',
});

new Zdog.Ellipse({ // Agregar círculo
    addTo : illo,
    diameter : 150,
    stroke : 30,
    color : '#636',
});

illo.updateRenderGraph(); // Actualizar y renderizar

//----------------------------------------> EJEMPLO 2
let illo2 = new Zdog.Illustration({
    element : '.zdog-canvas2',
});

new Zdog.Ellipse({
    addTo : illo2,
    diameter : 150,
    stroke : 30,
    color : '#636',
})

function animate(){
    // rotar illo2 cada frame (Fotograma)
    illo2.rotate.y += 0.05
    illo2.rotate.x += 0.0001
    illo2.updateRenderGraph();

    requestAnimationFrame(animate); // animar el siguiente frame
}
animate(); 

//----------------------------------------> EJEMPLO 3
let illo3 = new Zdog.Illustration({
    element : '.zdog-canvas3',
    zoom : 0.8, // Escalar escena (zoom 0.8X)
});

new Zdog.Ellipse({
    addTo : illo3,
    diameter : 150,
    translate : {z : 50}, // Posición 50px adelante (z-Index)
    stroke : 30,
    color : '#636',
});

new Zdog.Rect({
    addTo : illo3,
    width : 150,
    height : 150,
    translate : {z : -50}, // Posición 50px atras 
    stroke : 30,
    fill : true, // Llenar figura
    color : '#e62',
})

function animate2(){
    illo3.rotate.y += 0.03
    illo3.updateRenderGraph();
    
    requestAnimationFrame(animate2);
}
animate2();

//----------------------------------------> EJEMPLO 4
let isSpinning = true;  

let illo4 = new Zdog.Illustration({
    element : '.zdog-canvas4',
    zoom : 1.1,
    dragRotate : true, // habilitar arrastrar escena

    onDragStart : function(){ // deshabilitar arrastrar escena al comienzo
        isSpinning = false; 
    },
});

new Zdog.Ellipse({
    addTo : illo4,
    diameter : 150,
    translate : {z : 40},
    stroke : 30,
    color : '#5AA939',
});

new Zdog.Rect({
    addTo : illo4,
    width : 150,
    height : 150,
    translate : {z : -40},
    stroke : 30,
    color : '#1AB092',
});

function animate3(){
    if(isSpinning){
        illo4.rotate.x += 0.05;
    }

    illo4.updateRenderGraph();
    requestAnimationFrame(animate3);
}
animate3();