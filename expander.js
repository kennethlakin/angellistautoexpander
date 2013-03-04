function theScrollListener() { 
 var items = document.querySelectorAll(".startup-row");
 for(var i = 0; i < items.length; ++i) {
  if(! items[i].classList.contains("expanded")) {
   var e = document.createEvent("MouseEvents");
   e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); 
   items[i].dispatchEvent(e);
  }
 }
}
addEventListener("scroll", theScrollListener);
