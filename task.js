let previousBox;

function changeColor(element) {
    if (previousBox) {
        previousBox.style.backgroundColor = getDifferentColor(); /* change the previous color */
    }
    element.style.backgroundColor = 'pink'; /* change the present color */
    previousBox = element;
}

function getDifferentColor() {
    const colors = ['#FFC0CB', '#ADD8E6', '#98FB98', '#FFD700']; /* You can customize this array with different colors */
    return colors[Math.floor(Math.random() * colors.length)];
}