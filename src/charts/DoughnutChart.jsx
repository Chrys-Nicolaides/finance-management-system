import React, { useRef, useEffect } from "react";
import theme from "../../tailwindConfig";

import {
  Chart,
  DoughnutController,
  ArcElement,
  TimeScale,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-moment";

Chart.register(DoughnutController, ArcElement, TimeScale, Tooltip);

function DoughnutChart({ data, width, height }) {
  const canvas = useRef(null);
  const legend = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    const chart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        cutout: "75%",
        layout: {
          padding: 12,
        },
        plugins: {
          legend: {
            display: true,
            position: "left",
            labels: {
              boxWidth: 15,
              boxHeight: 15,
              borderRadius: 50,
              color: [theme.colors.gray[500]],
              font: {
                borderRadius: 50,
                size: 16,
                weight: "bold",
              },
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            return (
              Chart.defaults.global.tooltips.callbacks.label(
                tooltipItem,
                data
              ) + "%"
            );
          },
        },
      },
    });
    return () => chart.destroy();
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div>
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
      <div>
        <ul ref={legend} className="flex flex-wrap justify-center mr-10"></ul>
      </div>
    </div>
  );
}

export default DoughnutChart;
