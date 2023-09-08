const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d')


let fondo = new Image();
fondo.src = "./img/fondo.jpg"

let wallDraw = new Image();
wallDraw.src = "./img/wall.jpg"

let snakeDraw = new Image();
snakeDraw.src = "./img/snk.png"

let aset = new Image();
aset.src = "./img/aset.png"


window.onload = () => {
    ctx.drawImage(wallDraw, 0, 0, 400, 400)
    ctx.drawImage(fondo, 20, 20, 360, 360)
    fruit()
    brick()

    function drawloop() {
        ctx.drawImage(wallDraw, 0, 0, 405, 405)
        ctx.drawImage(fondo, 20, 20, 360, 360)
       

        //ecena1()


        function gameOver() {
            clearInterval(loop)
            ecena2()
        }

        headMovements() 
        snake.body.length > 0 && inheritMovements()
        verifyIntermediate(0)
        verifyIntermediate(1)
        verifyIntermediate(2)
        verifyIntermediate(3)
        elementsCollition()
        collitionWilkBody()

        elementoDraw(elements.fruit[0])
        elementoDraw(elements.brick[0])
        
        ctx.drawImage(
            snakeDraw,
            0, 0,
            20,20, 
            snake.x,
            snake.y,
            snake.w,
            snake.h 
        )

    }

    let loop = setInterval(drawloop, 100)
    //
};

