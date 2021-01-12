document.getElementById("main-form").addEventListener("submit", function (e) {
    document.getElementById("results").style.display = "none";

    document.getElementById("loading").style.display = "block";

    setTimeout(calculateTemp, 2000);

    e.preventDefault();
});

function calculateTemp() {
    const tempCel = document.getElementById("celsius");
    const results = document.getElementById("results");

    let calculated = (tempCel.value * 9) / 5 + 32;

    calculated.value = results;

    document.getElementById("results").style.display = "block";

    document.getElementById("loading").style.display = "none";
}
