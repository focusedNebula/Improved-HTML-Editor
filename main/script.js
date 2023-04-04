function showResult() {
    const myWindow = window.open("", "mywindow1");
    myWindow.document.write(x);
}
  
window.onload = function() {
    alert("Type HTML code into the box!");
}