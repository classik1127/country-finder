fetch("navbar.html")
    .then(Response => Response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data ;
    });



const navtwo = document.getElementById("navtwo");
function hi() {
    let country = navtwo.value;
    console.log(country);
}
// function searchcountry() {
//     let country = input.value;
//     window.location.href = `result.html?country=${country}`
//     input.value = "";
// }

