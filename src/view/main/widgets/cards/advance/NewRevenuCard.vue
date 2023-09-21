<template>
    <b-card class="hp-card-6" body-class="pb-0">
        <div class="d-flex align-items-center justify-content-between mb-16">
            <h5 class="mb-0">Revenue</h5>
            <p class="hp-badge-text text-black-80 hp-text-color-dark-30 mb-0">
                May 2021
            </p>
        </div>

        <b-row>
            <b-col cols="12">
                <b-row align-v="center">
                    <b-col cols="6">
                        <apexchart type="line" height="100" legend="legend" :options="options1" :series="series1">
                        </apexchart>
                    </b-col>

                    <b-col class="hp-flex-none w-auto">
                        <p class="hp-text-color-dark-0 mb-0">Total Sales</p>

                        <div class="d-flex align-items-center">
                            <h5 class="mb-0 mr-4">$ 12,253</h5>

                            <i class="ri-arrow-right-down-line lh-1 text-danger" style="font-size: 12px"></i>

                            <p class="mb-0 hp-input-description text-danger">10%</p>
                        </div>
                    </b-col>
                </b-row>
            </b-col>

            <b-col cols="12">
                <b-row align-v="center">
                    <b-col cols="6">
                        <apexchart type="line" height="100" legend="legend" :options="options2" :series="series2">
                        </apexchart>
                    </b-col>

                    <b-col class="hp-flex-none w-auto">
                        <p class="hp-text-color-dark-0 mb-0">Total Expense</p>

                        <div class="d-flex align-items-center">
                            <h5 class="mb-0 mr-4">$4,253</h5>

                            <i class="ri-arrow-right-up-line lh-1 text-primary" style="font-size: 12px"></i>

                            <p class="mb-0 hp-input-description text-primary">10%</p>
                        </div>
                    </b-col>
                </b-row>
            </b-col>

            <b-col cols="12">
                <b-row align-v="center">
                    <b-col cols="6">
                        <apexchart type="line" height="100" legend="legend" :options="options3" :series="series3">
                        </apexchart>
                    </b-col>

                    <b-col class="hp-flex-none w-auto">
                        <p class="hp-text-color-dark-0 mb-0">Total Profit</p>

                        <div class="d-flex align-items-center">
                            <h5 class="mb-0 mr-4">$4,253</h5>

                            <i class="ri-subtract-fill lh-1 text-warning" style="font-size: 12px"></i>

                            <p class="mb-0 hp-input-description text-warning">10%</p>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

export default {
    data() {
        return {
            series1: [
                {
                    data: [0, 20, 10, 40, 50, 30],
                },
            ],
            options1: {
                chart: {
                    type: "line",
                    id: "revenue-line-1",
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    },
                },
                legend: {
                    show: false,
                },
                markers: {
                    size: 1,
                    strokeColors: "#FF8B9A",
                    strokeOpacity: 0,
                },

                colors: ["#FF8B9A"],
                stroke: {
                    lineCap: "round",
                    width: 2,
                },
                tooltip: {
                    enabled: false,
                },
                dataLabels: {
                    enabled: false,
                },
                grid: {
                    show: true,
                    borderColor: "#B2BEC3",
                    strokeDashArray: 6,
                    position: "back",
                    xaxis: {
                        lines: {
                            show: true,
                        },
                    },
                    yaxis: {
                        lines: {
                            show: false,
                        },
                    },
                },
                xaxis: {
                    show: false,
                    labels: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                },
                responsive: [
                    {
                        breakpoint: 426,
                        options: {
                            legend: {
                                itemMargin: {
                                    horizontal: 16,
                                    vertical: 8,
                                },
                            },
                        },
                    },
                ],
                yaxis: {
                    show: false,
                },
            },
            series2: [
                {
                    data: [0, 20, 10, 40, 50, 30],
                },
            ],
            options2: {
                chart: {
                    type: "line",
                    id: "revenue-line-2",
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    },
                },
                legend: {
                    show: false,
                },
                markers: {
                    size: 1,
                    strokeColors: "#0063F7",
                    strokeOpacity: 0,
                },
                colors: ["#0063F7"],
                stroke: {
                    lineCap: "round",
                    width: 2,
                },
                tooltip: {
                    enabled: false,
                },
                dataLabels: {
                    enabled: false,
                },
                grid: {
                    show: true,
                    borderColor: "#B2BEC3",
                    strokeDashArray: 6,
                    position: "back",
                    xaxis: {
                        lines: {
                            show: true,
                        },
                    },
                    yaxis: {
                        lines: {
                            show: false,
                        },
                    },
                },
                xaxis: {
                    show: false,
                    labels: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                },
                responsive: [
                    {
                        breakpoint: 426,
                        options: {
                            legend: {
                                itemMargin: {
                                    horizontal: 16,
                                    vertical: 8,
                                },
                            },
                        },
                    },
                ],
                yaxis: {
                    show: false,
                },
            },
            series3: [
                {
                    data: [0, 20, 10, 40, 50, 30],
                },
            ],
            options3: {
                chart: {
                    type: "line",
                    id: "revenue-line-3",
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    },
                },
                legend: {
                    show: false,
                },
                markers: {
                    size: 1,
                    strokeColors: "#FFE393",
                    strokeOpacity: 0,
                },
                colors: ["#FFE393"],
                stroke: {
                    lineCap: "round",
                    width: 2,
                },
                tooltip: {
                    enabled: false,
                },
                dataLabels: {
                    enabled: false,
                },
                grid: {
                    show: true,
                    borderColor: "#B2BEC3",
                    strokeDashArray: 6,
                    position: "back",
                    xaxis: {
                        lines: {
                            show: true,
                        },
                    },
                    yaxis: {
                        lines: {
                            show: false,
                        },
                    },
                },
                xaxis: {
                    show: false,
                    labels: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                },
                responsive: [
                    {
                        breakpoint: 426,
                        options: {
                            legend: {
                                itemMargin: {
                                    horizontal: 16,
                                    vertical: 8,
                                },
                            },
                        },
                    },
                ],
                yaxis: {
                    show: false,
                },
            },
        };
    },
    components: {
        BRow,
        BCol,
        BCard,
    },
};
</script>
