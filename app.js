document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("calculate");
    const volume = document.getElementById("volume");

    btn.addEventListener("click", () => {

        let value = Number(document.getElementById("value").value);

        let trim = Number(document.getElementById("trim").value);

        let result = value * 0.315 + trim;

        volume.innerHTML = result.toFixed(3) + " m³";

    });

});
