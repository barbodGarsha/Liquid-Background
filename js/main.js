const canvas = document.getElementById("test-canvas")
const canvas_w = canvas.getBoundingClientRect().width;
const canvas_h = canvas.getBoundingClientRect().height;
const canvas_max_x = canvas_w - 1
const canvas_max_y = canvas_h - 1
const ctx = canvas.getContext("2d")


//Canvas Eventlisteners------------------------------------------
canvas.addEventListener("mousemove", function(e){
    get_mouse_position(canvas, e)
})


function get_mouse_position(Canvas, e) {
    let rect = Canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    console.log("Coordinate x: " + x, 
                "Coordinate y: " + y);
}

function draw_border(Border_width) {
    ctx.fillRect(0, 0, canvas_w, canvas_max_y)
    ctx.clearRect(Border_width - 1, Border_width  - 1, canvas_max_x - (2 * Border_width), canvas_max_y - (2 * Border_width))
}

draw_border(30)
