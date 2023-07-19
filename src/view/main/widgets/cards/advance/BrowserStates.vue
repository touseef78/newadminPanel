<template>
  <b-card class="hp-card-3 hp-eCommerceCardOne">
    <b-row>
      <b-col cols="12" class="mb-8">
        <b-row align-v="start" align-h="between">
          <b-col>
            <h5 class="mb-0">Browser states</h5>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <p class="hp-badge-text text-black-80 hp-text-color-dark-30 mb-0">
              May 2021
            </p>
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="12">
        <b-row
          align-v="center"
          align-h="between"
          class="mt-12"
          :key="index"
          v-for="(item, index) in statesData"
        >
          <b-col cols="6">
            <div class="d-flex align-items-center">
              <div class="mr-8">
                <img :src="item.avatar" :alt="item.title" />
              </div>

              <p class="hp-p1-body mb-0">{{ item.title }}</p>
            </div>
          </b-col>

          <b-col cols="6">
            <div
              class="d-flex align-items-center justify-content-end position-relative"
            >
              <p class="hp-badge-text mb-0 mr-8">{{ item.value }}</p>

              <apexchart
                :type="item.chart.type"
                :width="item.chart.width"
                :height="item.chart.height"
                :options="item.chart.options"
                :series="item.chart.series"
              ></apexchart>
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
      statesData: [
        {
          avatar: require("@/assets/img/browser/chrome.svg"),
          title: "Google Chrome",
          value: "50.2%",
          chart: {
            type: "radialBar",
            series: [50.2],
            height: 22,
            width: 24,
            options: {
              grid: {
                show: false,
                padding: {
                  left: -15,
                  right: -15,
                  top: -12,
                  bottom: -15,
                },
              },
              colors: ["#C903FF"],
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: "20%",
                  },
                  track: {
                    background: "#DFE6E9",
                  },
                  dataLabels: {
                    showOn: "always",
                    name: {
                      show: false,
                    },
                    value: {
                      show: false,
                    },
                  },
                },
              },
              stroke: {
                lineCap: "round",
              },
            },
          },
        },
        {
          avatar: require("@/assets/img/browser/firefox.svg"),
          title: "Mozila Firefox",
          value: "12.5%",
          chart: {
            type: "radialBar",
            series: [12.5],
            height: 22,
            width: 24,
            options: {
              grid: {
                show: false,
                padding: {
                  left: -15,
                  right: -15,
                  top: -12,
                  bottom: -15,
                },
              },
              colors: ["#FFC700"],
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: "20%",
                  },
                  track: {
                    background: "#DFE6E9",
                  },
                  dataLabels: {
                    showOn: "always",
                    name: {
                      show: false,
                    },
                    value: {
                      show: false,
                    },
                  },
                },
              },
              stroke: {
                lineCap: "round",
              },
            },
          },
        },
        {
          avatar: require("@/assets/img/browser/safari.svg"),
          title: "Apple Safari",
          value: "24.8%",
          chart: {
            type: "radialBar",
            series: [24.8],
            height: 22,
            width: 24,
            options: {
              grid: {
                show: false,
                padding: {
                  left: -15,
                  right: -15,
                  top: -12,
                  bottom: -15,
                },
              },
              colors: ["#1BE7FF"],
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: "20%",
                  },
                  track: {
                    background: "#DFE6E9",
                  },
                  dataLabels: {
                    showOn: "always",
                    name: {
                      show: false,
                    },
                    value: {
                      show: false,
                    },
                  },
                },
              },
              stroke: {
                lineCap: "round",
              },
            },
          },
        },
        {
          avatar: require("@/assets/img/browser/edge.svg"),
          title: "Microsoft Edge",
          value: "4.7%",
          chart: {
            type: "radialBar",
            series: [4.2],
            height: 22,
            width: 24,
            options: {
              grid: {
                show: false,
                padding: {
                  left: -15,
                  right: -15,
                  top: -12,
                  bottom: -15,
                },
              },
              colors: ["#0010F7"],
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: "20%",
                  },
                  track: {
                    background: "#DFE6E9",
                  },
                  dataLabels: {
                    showOn: "always",
                    name: {
                      show: false,
                    },
                    value: {
                      show: false,
                    },
                  },
                },
              },
              stroke: {
                lineCap: "round",
              },
            },
          },
        },
        {
          avatar: require("@/assets/img/browser/opera.svg"),
          title: "Opera",
          value: "7.8%",
          chart: {
            type: "radialBar",
            series: [7.8],
            height: 22,
            width: 24,
            options: {
              grid: {
                show: false,
                padding: {
                  left: -15,
                  right: -15,
                  top: -12,
                  bottom: -15,
                },
              },
              colors: ["#FF0022"],
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: "20%",
                  },
                  track: {
                    background: "#DFE6E9",
                  },
                  dataLabels: {
                    showOn: "always",
                    name: {
                      show: false,
                    },
                    value: {
                      show: false,
                    },
                  },
                },
              },
              stroke: {
                lineCap: "round",
              },
            },
          },
        },
      ],
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
  },
};
</script>
