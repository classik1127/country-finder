const input = document.getElementById("input");



function searchcountry() {
    if (!input.value) return;
    let country = input.value;
    window.location.href = `result.html?country=${country}`
    input.value = "";
}
    
    input.addEventListener("keydown", 
        function (event) {
            if (event.key === "Enter") {
                searchcountry();
            }
        }
)