function getDate() {
  var today = new Date();
  var year = today.getFullYear();
  document.getElementById("footer__date").innerHTML = year;
}

getDate();