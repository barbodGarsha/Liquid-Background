const canvas = document.getElementById("test-canvas")
const canvas_w = canvas.getBoundingClientRect().width;
const canvas_h = canvas.getBoundingClientRect().height;
const canvas_max_x = canvas_w - 1
const canvas_max_y = canvas_h - 1
const ctx = canvas.getContext("2d")


//Canvas Eventlisteners------------------------------------------
canvas.addEventListener("mousemove", function(e){
    
})



function draw_border(border_width) {
    ctx.fillRect(0, 0, canvas_w, canvas_max_y)
    ctx.clearRect(border_width - 1, border_width  - 1, canvas_max_x - (2 * border_width), canvas_max_y - (2 * border_width))
}

draw_border(30)
