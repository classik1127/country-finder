const params = new URLSearchParams(window.location.search)

const newcon = params.get("country");

const result = document.getElementById("resultname");
result.textContent = newcon;
// console.log(newcon);


// for switching page back to home

function switchpage() {
    window.location.href = "index.html";
}

const notfound = document.getElementById("notfound");
const found = document.getElementById("found");
            found.style.display = "flex";

fetch("https://restcountries.com/v3.1/name/japan")
    .then(Response => Response.json())
    .then(data => {
            console.log(data)
        if (data.status === 404) {
            notfound.style.display = "block";
            found.style.display = "none";
            
        }
        else{            
            found.style.display = "flex: ";
            console.log("data")
        }
    }
    )


// for page with result
