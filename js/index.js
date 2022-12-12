const apps = document.getElementById("apps");

window.onmousemove = e => {
    const 
        mouseX = e.clientX,
        mouseY = e.clientY;
    
    const
        xDemical = mouseX / window.innerWidth,
        yDemical = mouseY / window.innerHeight;

    const
        maxX = apps.offsetWidth - window.innerWidth,
        maxY = (apps.offsetHeight - window.innerHeight) / 2;

    const
        panX = maxX * xDemical * -1,
        panY = maxY * yDemical * -1;

    apps.animate({
        transform: `translate(${panX}px, ${panY}px)`
    }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
    })
}

