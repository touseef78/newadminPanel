<template>
    <b-card class="hp-card-6">
        <b-row>
            <b-col cols="12">
                <h5 class="mb-32">Earnings</h5>
            </b-col>

            <b-col cols="12">
                <apexchart :options="options" :series="series" type="donut" height="350" legend="legend"></apexchart>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
import { BRow, BCol, BCard, BAvatarGroup, BAvatar } from "bootstrap-vue";

export default {
    data() {
        return {
            series: [1244, 2155, 1541],
            options: {
                chart: {
                    id: "earnings-donut-card",
                    fontFamily: "Manrope, sans-serif",
                    type: "donut",
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    },
                },
                colors: ["#0063F7", "#98FFE0", "#1BE7FF"],

                labels: ["Online", "Offline", "Marketing"],

                dataLabels: {
                    enabled: false,
                },

                plotOptions: {
                    pie: {
                        donut: {
                            size: "90%",
                            labels: {
                                show: true,
                                name: {
                                    fontSize: "2rem",
                                },
                                value: {
                                    fontSize: "24px",
                                    fontWeight: "regular",
                                    color: "B2BEC3",
                                    formatter(val) {
                                        return `%${Math.round(val / 100)}`;
                                    },
                                },
                                total: {
                                    show: true,
                                    fontSize: "24px",
                                    fontWeight: "regular",
                                    label: "Kitchen",
                                    color: "#636E72",

                                    formatter: function (w) {
                                        return `%${w.globals.seriesTotals.reduce((a, b) => {
                                            return Math.round((a + b) / 100);
                                        }, 0)}`;
                                    },
                                },
                            },
                        },
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

                legend: {
                    itemMargin: {
                        horizontal: 12,
                        vertical: 24,
                    },
                    horizontalAlign: "center",
                    position: "bottom",
                    fontSize: "12px",
                    inverseOrder: true,
                    markers: {
                        radius: 12,
                    },
                },
            },
        };
    },
    components: {
        BRow,
        BCol,
        BCard,
        BAvatarGroup,
        BAvatar,
    },
};
</script>
