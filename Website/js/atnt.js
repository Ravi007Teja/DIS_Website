new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: [
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019
        ],
        datasets: [
            {
                data: [
                    86,
                    114,
                    106,
                    150,
                    180,
                    200,
                    190,
                    290,
                    600,
                    2478
                ],
                label: "Africa",
                borderColor: "#3e95cd",
                fill: false
            },
            {
                data: [
                    500,
                    520,
                    530,
                    629,
                    700,
                    800,
                    960,
                    1100,
                    1500,
                    5267
                ],
                label: "Asia",
                borderColor: "#8e5ea2",
                fill: false
            },
            {
                data: [
                    168,
                    170,
                    178,
                    190,
                    203,
                    276,
                    408,
                    547,
                    675,
                    734
                ],
                label: "Europe",
                borderColor: "#3cba9f",
                fill: false
            },
            {
                data: [
                    40,
                    20,
                    10,
                    16,
                    24,
                    38,
                    74,
                    167,
                    508,
                    784
                ],
                label: "Latin America",
                borderColor: "#e8c3b9",
                fill: false
            }, {
                data: [
                    4336,
                    312,
                    1723,
                    82,
                    26,
                    7,
                    2,
                    2
                ],
                label: "North America",
                borderColor: "#c45850",
                fill: false
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Customer Churn Trend over the years(value in thousands)'
        },
        responsive:true,
        maintainAspectRatio:false
    }
});

