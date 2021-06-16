var getImg = document.getElementsByTagName('img');
var div = document.querySelector('.set_img');
// var body = document.querySelector('body');

// mousedown
// mousemove
// mouseup



// ================================================================================

  
div.addEventListener('mouseover', function(e) {
  if (e.target.tagName === 'IMG') {
    e.target.style.cursor = 'move';
  } 
});

document.onmousedown = function(e) {
  var img = e.target;
  img.style.cursor = 'move';
  // img.style.position = 'absolute';
if (img.tagName === 'IMG') {
  console.log(e.target)
let saveX = e.offsetX;
let saveY = e.offsetY; 
let css = getComputedStyle(img);
img.style.zIndex = 2;


document.onmousemove = function(e) {
    img.style.position = 'absolute';
    
    img.style.top = e.pageY-parseInt(css.margin)-saveY+'px';
    img.style.left = e.pageX-parseInt(css.margin)-saveX+'px';
  };
}

img.ondragstart = function() {
  return false;
};

  img.onmouseup = function(e) {
    img.style.zIndex = 1;
    document.onmousemove = function() {
      return false;
  };
};

};





       




