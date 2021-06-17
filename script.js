var getImg = document.getElementsByTagName('img');
var divFlex = document.querySelector('.parent_box');

divFlex.addEventListener('mouseover', function (e) {
  if (e.target.tagName === 'IMG') {
    e.target.style.cursor = 'move';
  }
});

divFlex.onmousedown = function (e) {
  var div = e.target;
  if (div.tagName === 'IMG') {
    let saveX = e.offsetX;
    let saveY = e.offsetY;
    let css = getComputedStyle(div);
    div.style.zIndex = 2;


    document.onmousemove = function (e) {
      div.style.position = 'absolute';
      div.style.top = e.pageY - parseInt(css.margin) - saveY + 'px';
      div.style.left = e.pageX - parseInt(css.margin) - saveX + 'px';
    };
  }

  div.ondragstart = function () {
    return false;
  };

  div.onmouseup = function (e) {
    div.style.zIndex = 1;
    document.onmousemove = function () {
      return false;
    };
  };

};