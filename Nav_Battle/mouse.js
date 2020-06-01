
function getMouse(element){
    const mouse={
        x:0,
        y:0
    }

    element.addEventListener('mousemove', function(event){
        console.log(event);
    })

    return mouse;
}
