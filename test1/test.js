function getUser(str) {
  if (str == "") {
    getUsers();
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("workers-table").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET", "get-user.php?q=" + str, true);
    xmlhttp.send();
  }
}

function getUsers() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("workers-table").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "get-users.php", true);
  xmlhttp.send();
}
