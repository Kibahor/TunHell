const games = document.getElementById('games').value;
const victoires = document.getElementById('victoires').value;
const looses = games - victoires;

const barCanvas = document.getElementById('barCanvas');

const barChart = new Chart(barCanvas, {
    type : "doughnut",
    data: {
        labels:["Looses","Victories"],
        datasets: [{
            backgroundColor: [
                'rgb(66, 158, 166)',
                'rgb(21, 59, 80)'
            ],
            hoverOffset: 10,
            data: [looses, victoires],
        }]
    },
});