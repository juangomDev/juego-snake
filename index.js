const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d')


let fondo = new Image();
fondo.src = "./img/fondo.jpg"

let wall = new Image();
wall.src = "./img/wall.jpg"

let snake = new Image();
snake.src = "./img/snake.jpg"


window.onload = () => {
    ctx.drawImage(wall, 0, 0, 405, 405)
    ctx.drawImage(fondo, 15, 15, 370, 370)
    fruitRan()
    brickRan()

    function drawloop() {
        ctx.drawImage(wall, 0, 0, 405, 405)
        ctx.drawImage(fondo, 15, 15, 370, 370)


        //ecena1()


        function gameOver() {
            clearInterval(loop)
            //ecena2()
        }



        draw(fruit, "#f00")
        draw(snk, "#fff")
        draw(brick, "#00f")

        function norepetir() {
            fruitRan()
            collition(brick, fruit) ? norepetir() : false
            headerCopy.map((x) => {
                collition(x, fruit) ? norepetir(): false
            })
            console.log("HOLA");
        }

        if (collition(snk, fruit)) {

            norepetir()

            header.push({ x: snk.x, y: snk.y, w: 12, h: 12 })
            headerCopy.push({ x: snk.x, y: snk.y, w: 12, h: 12 })
        }



        if (header.length > 0) {
            function fru(n) {
                if (header.length > n) {
                    header[n] = { x: header[n - 1].x, y: header[n - 1].y, w: 6, h: 6 }
                    headerCopy[n] = { x: headerCopy[n - 1].x, y: headerCopy[n - 1].y, w: 6, h: 6 }
                }
            }

            

            header.map((x, n) => {
                draw(x, "#000");
                if (n !== 0) {
                    fru(header.length - n)
                    fru(headerCopy.length - n)
                }
            })
            headerCopy[0] = { x: snk.x, y: snk.y, w: 10, h: 10 }
        }



        if (snk.rightPressed) {

            if (header.length > 0) {
                header[0] = {
                    x: snk.x - 3, y: snk.y + 3, w: 6, h: 6
                }
            }
            if (collition(clone(snk, "x", 1), Walls[1])) {
                collition(snk, Walls[1]) ? gameOver() : snk.x = 373
            } else if (collition(clone(snk, "x", 1), brick)) {
                collition(snk, brick) ? gameOver() : snk.x = brick.x - snk.w
            } else (snk.x += snk.v)

        }
        else if (snk.leftPressed) {

            if (header.length > 0) { header[0] = { x: snk.x + 3, y: snk.y + 3, w: 6, h: 6 } }

            if (collition(clone(snk, "x", 0), Walls[0])) {
                collition(snk, Walls[0]) ? gameOver() : snk.x = 15
            } else if (collition(clone(snk, "x", 0), brick)) {
                collition(snk, brick) ? gameOver() : snk.x = brick.x + snk.w
            } else (snk.x -= snk.v)
        }
        else if (snk.abovePressed) {

            if (header.length > 0) { header[0] = { x: snk.x + 3, y: snk.y + 3, w: 6, h: 6 } }

            if (collition(clone(snk, "y", 0), Walls[2])) {
                collition(snk, Walls[2]) ? gameOver() : snk.y = 15
            } else if (collition(clone(snk, "y", 0), brick)) {
                collition(snk, brick) ? gameOver() : snk.y = brick.y + snk.h
            } else (snk.y -= snk.v)
        }
        else if (snk.downPressed) {

            if (header.length > 0) { header[0] = { x: snk.x + 3, y: snk.y - 3, w: 6, h: 6 } }

            if (collition(clone(snk, "y", 1), Walls[3])) {
                collition(snk, Walls[3]) ? gameOver() : snk.y = 373
            } else if (collition(clone(snk, "y", 1), brick)) {
                collition(snk, brick) ? gameOver() : snk.y = brick.y - snk.h
            } else (snk.y += snk.v)
        }





        header.map((x, n) => {
            if (n !== 0) {
                if (collition(snk, x)) { clearInterval(loop) }
            }
        })




    }

    let loop = setInterval(drawloop, 100)
    //
};

