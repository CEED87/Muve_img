var img = document.getElementsByTagName('img');
var div = document.querySelector('.muve_img');


function imges() {
    document.addEventListener('mousemove', function (event) {
        var muveImg = event.target;
        if (muveImg.tagName === 'IMG') {
            muveImg.style.cursor = 'pointer';
            muveImg.addEventListener('mousedown', function() {
                muvImg(muveImg);
                getImg(div);
                hasImg(div);
            });
        } 
    });
}

function muvImg(setImg) {
    setImg.setAttribute('draggable', 'true');
    setImg.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData("text", event.target.id);
    });
}

function getImg(newImg) {
    newImg.addEventListener('drop', function (event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        if (event.target.tagName !== 'IMG') {
            event.target.appendChild(document.getElementById(data));
        }

    });
}

function hasImg(getdiv) {
    getdiv.addEventListener('dragover', function (event) {
        event.preventDefault();

    });
}

imges();