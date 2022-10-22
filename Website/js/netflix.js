new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
        labels: [
            "TV-MA",
            "TV-14",
            "TV-PG",
            "R",
            "PG-13",
            "TV-Y7",
            "TV-Y",
            "PG",
            "TV-G",
            "NR",
            "G"
        ],
        datasets: [
            {
                label: "Ratings",
                backgroundColor: [
                    "#3e95cd",
                    "#8e5ea2",
                    "#3cba9f",
                    "#e8c3b9",
                    "#c45850"
                ],
                data: [
                    3200,
                    2200,
                    800,
                    600,
                    500,
                    400,
                    380,
                    360,
                    300,
                    100,
                    20
                ]
            }
        ]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Ratings by content type'
        },
        responsive:true,
        maintainAspectRatio:false
    }
});

