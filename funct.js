let snk = {
    x: 172, y: 175, h: 12, w: 12,
    rightPressed: false, leftPressed: false,
    abovePressed: false, downPressed: false,
    v: 12
}

let score = 0
//                x, y, h, w        
let Walls = [{ x: 0, y: 0, w: 15, h: 400 }, { x: 385, y: 0, w: 15, h: 400 },
{ x: 0, y: 0, w: 400, h: 15 }, { x: 0, y: 385, w: 400, h: 15 }]


let fruit = {x: 0, y: 0, w:12, h:12}
let brick = {x: 0, y: 0, w:12, h:12}

let header = [], headerCopy = []

function draw(obj, c) {
    ctx.fillStyle = c
    ctx.fillRect(obj.x, obj.y, obj.w, obj.h,)
}


function collition(x, obj) {
    let X = obj.x + obj.w,
        Y = obj.y + obj.h,
        touch = false

    if (X >= x.x && obj.x <= x.x + x.w) {
        if (Y >= x.y && obj.y <= x.y + x.h) {
            return touch = true
        } else { touch = false }
    } else { touch = false }

    return touch
}

function clone(obj, address, pos) {
    let p = { x: obj.x, y: obj.y, w: obj.w, h: obj.h };

    if (address == "x") {
        pos == 0 ? p.x = obj.x - obj.h : p.x = obj.x + obj.w
    }
    else if (address == "y") {
        pos == 0 ? p.y = obj.y - obj.h : p.y = obj.y + obj.h
    }
    return p
}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// console.log();
function detener() {
    snk.rightPressed = false;
    snk.leftPressed = false;
    snk.abovePressed = false;
    snk.downPressed = false;
}

function keyDownHandler(e) {
    

    if (e.keyCode == 39) { 
        if (!snk.leftPressed) { 
            detener();
            snk.rightPressed = true;  
        }
    }
    else if (e.keyCode == 37) { 
        if (!snk.rightPressed) { 
            detener();
            snk.leftPressed  = true; 
        }
    }  
    else if (e.keyCode == 38) { 
        if (!snk.downPressed) { 
            detener();
            snk.abovePressed = true; 
        }
    }
    else if (e.keyCode == 40) { 
        if (!snk.abovePressed) { 
            detener();
            snk.downPressed  = true; 
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



const random = (min,max) => (Math.floor(Math.random()*(max - min)) + min);

function fruitRan() {
    fruit.x = random(16, 370)
    fruit.y = random(16, 370)
}

function brickRan() {
    brick.x = random(16, 370)
    brick.y = random(16, 370)
}
