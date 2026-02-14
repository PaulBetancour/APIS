document.getElementById("creditForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let income = parseFloat(document.getElementById("income").value);
    let cupo = parseFloat(document.getElementById("cupo_solicitado").value);
    let score1 = parseInt(document.getElementById("score_1").value);
    let score2 = parseInt(document.getElementById("score_2").value);
    let score3 = parseInt(document.getElementById("score_3").value);
    let score4 = parseInt(document.getElementById("score_4").value);

    let promedioScore = (score1 + score2 + score3 + score4) / 4;

    let ratio = income / cupo;

    let resultado = "";

    if (promedioScore > 650 && ratio > 0.3) {
        resultado = "Crédito Aprobado ✅";
    } else {
        resultado = "Crédito Rechazado ❌";
    }

    document.getElementById("resultText").innerHTML =
        `Promedio Score: ${promedioScore.toFixed(2)} <br>
         Ratio Ingreso/Cupo: ${ratio.toFixed(2)} <br>
         <strong>${resultado}</strong>`;
});
