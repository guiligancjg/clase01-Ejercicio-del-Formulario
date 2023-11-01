document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("estado");
    const actual = document.getElementById("estadoActual");
    select.addEventListener("change", function(e) {
        const selectedValue = e.target.value;
        actual.textContent = selectedValue;
    });
});