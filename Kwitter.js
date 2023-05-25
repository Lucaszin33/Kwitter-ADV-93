function adduser() {
    var username = document.getElementById("userName").value;
  localStorage.setItem("username", username);
  console.log("sucesso!");
  window.location.replace("kwitter room.html")
}