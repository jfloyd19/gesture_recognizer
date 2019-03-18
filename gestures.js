downX = 0
downY = 0

$("#gestureArea").mousedown(function(event) {
  $("#gestureResult").text("Mouse Down");
  downX = event.pageX
  downY = event.pageY

});

$("#gestureArea").mouseup(function(event) {
  $("#gestureResult").text("Mouse Up");
  upX = event.pageX
  upY = event.pageY

  if(upX < downX){
      $("#gestureResult").text("Swipe Left");
  }
  else if (upX > downX) {
    $("#gestureResult").text("Swipe Right");
  }
  else if (upX == downX) {
    $("#gestureResult").text("Mouse Up");
  }

});

$("#gestureArea").dblclick(function(event) {
  $("#gestureResult").text("Double Click");
});

$("#gestureArea").mouseenter(function(event) {
  $("#gestureResult").text("Pointer in Gesture Area");
});

$("#gestureArea").mouseleave(function(event) {
  $("#gestureResult").text("Pointer not in Gesture Area");
});
