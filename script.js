var img = document.getElementsByTagName('img')[0];
// var div = document.querySelector('.muve_img');
// var body = document.querySelector('body');

// mousedown
// mousemove
// mouseup
function eee(e) {
    img.style.position = 'absolute';
    let saveX = e.offsetX;
    let saveY = e.offsetY; 
    
    document.addEventListener('mousemove', function(e) {
       
        img.style.position = 'absolute';
        img.style.top = e.pageY-parseInt(css.margin)-saveY+'px';
        img.style.left = e.pageX-parseInt(css.margin)-saveX+'px';
    });
}

img.addEventListener('dragstart', function(e) {
    e.preventDefault();
});
let rect = img.getBoundingClientRect();
let css = getComputedStyle(img);

img.addEventListener('mousedown',function(e) {
    let saveX = e.offsetX;
    let saveY = e.offsetY; 
    
    document.addEventListener('mousemove', function(e) {
        img.style.position = 'absolute';
        img.style.top = e.pageY-parseInt(css.margin)-saveY+'px';
        img.style.left = e.pageX-parseInt(css.margin)-saveX+'px';
    });
});

img.addEventListener('mouseup', function(e) {
    document.addEventListener('mousemove',function() {
        return false;
    });
});




       




