document.getElementById("main-form").addEventListener("submit", function (e) {
    document.getElementById("results").style.display = "none";

    document.getElementById("loading").style.display = "block";

    setTimeout(convert, 2000);

    e.preventDefault();
});

function convert() {
    const tempCel = document.getElementById("celsius");
    const results = document.getElementById("converted");

    let calculated = (tempCel.value * 9) / 5 + 32;

    if (tempCel.value !== "") {
        results.value = calculated;

        document.getElementById("results").style.display = "block";

        document.getElementById("loading").style.display = "none";
    } else {
        showError("Make sure your numbers are valid");
    }
}

function showError(error) {
    document.getElementById("results").style.display = "none";

    document.getElementById("loading").style.display = "none";

    const errorDiv = document.createElement("div");

    const card = document.querySelector(".card");

    const heading = document.querySelector(".heading");

    errorDiv.className = "alert alert-danger";

    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector(".alert").remove();
}
