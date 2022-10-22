new Chart(document.getElementById("polar-chart"), {
    type: 'polarArea',
    data: {
        labels: [
            "Rock",
            "Pop",
            "Latin",
            "RnB",
            "Rap"
        ],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: [
                    "#3e95cd",
                    "#8e5ea2",
                    "#3cba9f",
                    "#e8c3b9",
                    "#c45850"
                ],
                data: [
                    8,
                    45,
                    15,
                    25,
                    7
                ]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Popularity quotient by genres(in percentage)'
        },
        responsive:true,
        maintainAspectRatio:false
    }
});

