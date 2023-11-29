function changeLocation() {
    let maxWidth = window.innerWidth - 100;
    let maxHeight = window.innerHeight - 100;

    let leftSize = Math.floor(Math.random() * maxWidth);
    let rightSize = Math.floor(Math.random() * maxHeight);
    document.getElementById("button").style.left = leftSize +'px';
    document.getElementById("button").style.top = rightSize +'px';
}

