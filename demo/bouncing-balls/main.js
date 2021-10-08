// setup

"use strict"

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

// get random color
const random_color = () => {
    return (
        "rgb(" + 
        random(0, 255) + "," + 
        random(0, 255) + "," + 
        random(0, 255) + ")"
    ) 
}

// "Constructor" 
const Ball = (x, y, vx, vy, color, size) => ({
    x, y, vx, vy, color, size
})

// "Methods"
const Ball_Procedures = {

    draw: (b) => {

        let C = Canvas

        C.context.beginPath()
        C.context.fillStyle = b.color
        C.context.arc(b.x, b.y, b.size, 0, 2 * Math.PI)
        C.context.fill()
    },

    update: (b) => {

        let C = Canvas
        
        if (b.x + b.size >=  C.width) b.vx = -b.vx
        if (b.x - b.size <=        0) b.vx = -b.vx
        if (b.y + b.size >= C.height) b.vy = -b.vy
        if (b.y - b.size <=        0) b.vy = -b.vy
        
        b.x += b.vx
        b.y += b.vy
    },

    detect_collision: (b) => {
        for (let it of balls) {
            if (b !== it) {
                const dx = b.x - it.x
                const dy = b.y - it.y
                const distance = Math.sqrt(dx * dx + dy * dy)
    
                if (distance < b.size + it.size) {
                    it.color = b.color = random_color()
                }
            }
        }
    }
}



/* ==== Main ==== */

const Canvas = {}
const balls  = []

{
    let ref = document.querySelector('canvas')
    Canvas.ref     = ref
    Canvas.context = ref.getContext('2d')
    Canvas.width   = ref.width  = window.innerWidth
    Canvas.height  = ref.height = window.innerHeight
}

for (let i = 0; i < 100; i++) {
    const size = random(10, 20)
    balls[i] = Ball(
        random(0 + size, Canvas.width  - size),
        random(0 + size, Canvas.height - size),
        random(-7, 7),
        random(-7, 7),
        random_color(),
        size,
    )
}

const loop = () => {

    let C = Canvas
    let B = Ball_Procedures

    C.context.fillStyle = "rgba(0, 0, 0, 0.25)"
    C.context.fillRect(0, 0, C.width, C.height)
    
    for (let it of balls) {
        B.draw(it)
        B.update(it)
        B.detect_collision(it)
    }
    
    requestAnimationFrame(loop)
}

loop()