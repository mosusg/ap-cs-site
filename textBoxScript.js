function changeText() {
  document.getElementById("firstHeader").innerHTML = "Right";
}

var text = document.getElementById("myInput").value;

function testTheText() {
  if (text.includes("test")) {
    changeText();
  } else {
    document.getElementById("firstHeader").innerHTML = "Wrong";
  }
}
