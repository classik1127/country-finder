const params = new URLSearchParams(window.location.search)

const newcon = params.get("country");

const result = document.getElementById("resultname");
result.textContent = newcon;
// console.log(newcon);


// for switching page back to home

function switchpage() {
    window.location.href = "index.html";
}