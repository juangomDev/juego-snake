function ecena1() {
    ctx.drawImage(snake, 120, 70, 160, 200)

    ctx.fillStyle = "rgba(87, 87, 87, 0.678)"
    ctx.fillRect(80, 280, 240, 60 )

    ctx.fillRect(350, 10, 40, 40 )
}

function ecena2() {
    ctx.fillStyle = "rgb(180, 180, 180, 0.4)"
    ctx.drawImage(wall, 60, 50, 280, 280)
    ctx.fillRect(60, 50, 280, 280 )

    //text
    ctx.fillStyle = `#000`;
    ctx.font="bold italic 30px arial";
    ctx.fillText("score: " + score, 100, 230)
    ctx.font="bold italic 40px arial";
    ctx.fillText("Game over", 95, 120)

    //botones
    ctx.fillStyle = "rgba(0, 250, 0)"
    ctx.fillRect(75, 250, 120, 60 )
    ctx.fillStyle = "rgba(250, 0, 0)"
    ctx.fillRect(205, 250, 120, 60 )

    // text2
    ctx.fillStyle = `#000`;
    ctx.font="bold italic 30px arial";
    ctx.fillText("resect", 90, 290)
    ctx.fillText("star", 240, 290)
}