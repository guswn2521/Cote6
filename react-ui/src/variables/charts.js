import languages from "./languages.json";
const response = 82357;

export const barChartData = [
    {
        name: "Response",
        data: Object.values(languages["counts"]).slice(0, 38),
    },
];

export const barChartOptions = {
    chart: {
        toolbar: {
            show: false,
        },
    },
    tooltip: {
        style: {
            backgroundColor: "red",
            fontSize: "8px",
            fontFamily: undefined,
        },
        onDatasetHover: {
            style: {
                backgroundColor: "red",
                fontSize: "12px",
                fontFamily: undefined,
            },
        },
        theme: "dark",
    },
    xaxis: {
        categories: Object.values(languages["unique_values"]).slice(0, 38),
        show: false,
        labels: {
            show: false,
            style: {
                colors: "#fff",
                fontSize: "12px",
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: true,
        color: "#fff",
        labels: {
            show: true,
            style: {
                colors: "#fff",
                fontSize: "14px",
            },
        },
    },
    grid: {
        show: false,
    },
    fill: {
        colors: "black",
    },
    dataLabels: {
        enabled: true,
        textAnchor: "start",
        formatter: function (value) {
            const result = ((value / response) * 100).toFixed(2);
            return result + "%";
        },
    },
    plotOptions: {
        bar: {
            horizontal: true,
            borderRadius: 8,
            columnWidth: "12px",
        },
    },
    responsive: [
        {
            breakpoint: 768,
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 0,
                    },
                },
            },
        },
    ],
};

export const lineChartData = [
    {
        name: "Mobile apps",
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
    {
        name: "Websites",
        data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
    },
];

export const lineChartOptions = {
    chart: {
        type: "bar",
        height: 350,
    },
    tooltip: {
        theme: "dark",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        type: "datetime",
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        labels: {
            style: {
                colors: "#c8cfca",
                fontSize: "12px",
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: "#c8cfca",
                fontSize: "12px",
            },
        },
    },
    legend: {
        show: false,
    },
    grid: {
        strokeDashArray: 5,
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 0.8,
            opacityTo: 0,
            stops: [],
        },
        colors: ["#4FD1C5", "#2D3748"],
    },
    colors: ["#4FD1C5", "#2D3748"],
};
