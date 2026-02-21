document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // GRÁFICA 1: DISTRIBUCIÓN EDAD
    // ===============================

    const edadCtx = document.getElementById("edadChart");

    new Chart(edadCtx, {
        type: "bar",
        data: {
            labels: ["18-25", "26-35", "36-45", "46-60", "60+"],
            datasets: [{
                label: "Cantidad de Clientes",
                data: [120, 250, 180, 95, 30],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // =====================================
    // GRÁFICA 2: INGRESO VS CUPO SOLICITADO
    // =====================================

    const ingresoCtx = document.getElementById("ingresoChart");

    new Chart(ingresoCtx, {
        type: "scatter",
        data: {
            datasets: [{
                label: "Ingreso vs Cupo",
                data: [
                    { x: 1000, y: 8000 },
                    { x: 1500, y: 10000 },
                    { x: 2000, y: 15000 },
                    { x: 2500, y: 18000 },
                    { x: 3000, y: 25000 }
                ]
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Ingreso Mensual"
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: "Cupo Solicitado"
                    }
                }
            }
        }
    });

});
