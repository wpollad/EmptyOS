const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

resize();

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

const pos = { 
    x: 0, 
    y: 0 
};

function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
}

function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }

function draw(e) {
    if (e.buttons !== 1) return;
  
    ctx.beginPath(); 
  
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'rgb(151, 49, 144)';
  
    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); 
  
    ctx.stroke();
  }