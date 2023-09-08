const snake = {
    x: 50,
    y: 50,
    w: 10,
    h: 10,
    above: false,
    down: false,
    right: false,
    left: false,
    speed: 10,
    body: [],
    img: "snakeDraw"
}

const wall = [
    {x: 0,   y: 0,   w: 20,  h: 400,}, // above
    {x: 0,   y: 0,   w: 400, h: 20,}, // right
    {x: 0,   y: 380, w: 400, h: 20,}, // down
    {x: 380, y: 0,   w: 20,  h: 400,}, // left
    {x: 0,   y: 0,   w: 10,  h: 10,}  // octaculo  
]

const elements = {
    fruit: [],
    brick: [],
    score: 0,
    minute: 3,
    second: 59
}

// mover cabeza
function headMovements() {
    snake["above"] ? snake.y -= snake.speed :
        snake["down"] ? snake.y += snake.speed :
            snake["right"] ? snake.x += snake.speed :
                snake["left"] ? snake.x -= snake.speed : false
}
// hacer que el cuerpo siga los pasos de la cabesa  
function inheritMovements() {

    snake.body.map( (obj, numero, array) => {
        if (numero > 0){
            obj.x = array[numero - 1]
            obj.y = array[numero - 1]
        } 
    } )

    snake.body[0].x = snake.x
    snake.body[0].y = snake.y

}

// coliciones 
function collition(x, obj) {
    let touch = false

    const vertical = obj.y + obj.h >= x.y && obj.y <= x.y + x.h,
        horizontal = obj.x + obj.w >= x.x && obj.x <= x.x + x.w

    horizontal ? vertical ? touch = true : touch = false : touch = false

    return touch
}

function verifyIntermediate(n) {
    addressX = snake["right"] || snake["left"]
    addressY = snake["above"] || snake["down"]

    function intermediate() {
        addressX ? snake["right"] ? snake.x += 1 : snake.x -= 1 : false
        addressY ? snake["down"]  ? snake.y += 1 : snake.y -= 1 : false

        collition(snake, wall[n]) ? true : intermediate()
    }

    function preMovements() {
        const Ghost = { x: snake.x, y: snake.y, w: snake.w, h: snake.h, }

        addressX ? snake["right"] ? Ghost.x += snake.w : Ghost.x -= snake.w : false
        addressY ? snake["above"] ? Ghost.y -= snake.h : Ghost.y += snake.h : false

        return Ghost
    }

    let ghost = preMovements()
    collition(ghost, wall[n]) ? intermediate() : false


}

function elementsCollition() {
    let b = elements.brick
        f = elements.fruit

    function posFruit(obj) {
        obj.x = random(20,360) // cambiar posicion de la fruta X
        obj.y = random(20,360) // cambiar posicion de la fruta Y
        snake.body.push( {x: 50, y: 50, w: 10, h: 10, img: snakeDraw, pos: [0, 20]} ) // agrega un elemento del cuerpo nuevo
        
        collition(obj, snake)   && posFruit()  // que no aparesca encima de la cabeza
        collition(obj, wall[4]) && posFruit()  // que no aparesca encima de el 4to muro

        b.map( ( x ) => { collition(obj, x) && posFruit() }) // que no aparesca encima de los octaculos
        snske.body.map( ( x ) => { collition(obj, x) && posFruit() }) // que no aparesca encima del cuerpo
            
        elements.score += 1  // mas puntos
    }

    function type(type) {
        type.map( ( x ) => {
            collition(snake, x) && type.v ? posFruit(x) : false
        })
    }

    elements.fruit.length > 0 && type(f)
    elements.brick.length > 0 && type(b)
}

// falta coliones con el cuerpo de la serpiente
function collitionWilkBody() {
    snake.body.map( (x, namber) => {
        namber > 0 && collition(x, snake) ? console.log("final"): false
    } )
}


// elementos  y puntos

const random = (min,max) => (Math.floor(Math.random()*(max - min)) + min);

function fruit() {
    elements.fruit.push({ 
        x: random(20,360),  
        y: random(20,360),  
        w: 10,  
        h: 10, 
        v: true,
        img: aset,
        pos: [0, (random(0,1)*10)*2]
    })
}

function brick() {
    elements.brick.push({ 
        x: random(20,360),  
        y: random(20,360),  
        w: 10,  
        h: 10,  
        v: false,
        img: aset,
        pos: [0, 40]
    })
}

function tiempo() {
    if (elements.second = 0) {
        elements.minute -= 1
        elements.second = 60
    }
    elements.second -= 1
}

// dibujar en mantalla

function elementoDraw(obj) {
    ctx.drawImage(
        obj.img,
        obj.pos[0], obj.pos[1],
        20,20, 
        obj.x,
        obj.y,
        obj.w,
        obj.h 
    )
}

function bodyDraw() {
    snake.body.map((x, namber) => {
        namber !== x.length -1 &&
        ctx.drawImage(
        x.img,
        pos[0], pos[1],
        20,20, 
        obj.x,
        obj.y,
        obj.w,
        obj.h 
    )
    }) 

    function cola() {
        ctx.drawImage(
            snakeDraw,
            pos[0], pos[2],
            20,20, 
            obj.x,
            obj.y,
            obj.w,
            obj.h 
        )
    }
}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// console.log();
function detener() {
    snake.right = false;
    snake.left = false;
    snake.above = false;
    snake.down = false;
}

function keyDownHandler(e) {
    

    if (e.keyCode == 39) { 
        if (!snake.left) { 
            detener();
            snake.right = true;  
        }
    }
    else if (e.keyCode == 37) { 
        if (!snake.right) { 
            detener();
            snake.left  = true; 
        }
    }  
    else if (e.keyCode == 38) { 
        if (!snake.down) { 
            detener();
            snake.above = true; 
        }
    }
    else if (e.keyCode == 40) { 
        if (!snake.above) { 
            detener();
            snake.down  = true; 
        }
    }
    
}
 
function keyUpHandler(e) {
    //    if(e.keyCode == 39) {
    //        obj.rightPressed = false;
    //    }
    //    else if(e.keyCode == 37) {
    //        obj.leftPressed = false;
    //    }
    //    else if(e.keyCode == 38) {
    //        obj.abovePressed = false;
    //    }
    //    else if(e.keyCode == 40) {
    //        obj.downPressed = false;
    //    }
}



//juangomDev 
//Khanjuan123