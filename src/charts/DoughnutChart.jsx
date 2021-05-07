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
          padding: 50,
        },
        plugins: {
          legend: {
            display: true,
            position: "left",
            padding: 0,
            labels: {
              boxWidth: 10,
              boxHeight: 10,
              padding: 10,
              color: [theme.colors.gray[500]],
              font: {
                size: 12,
                weight: "bold",
              },
            },
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: function (item) {
                return item.label + " " + item.parsed + "%";
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
        responsive: false,
        maintainAspectRatio: false,
      },
    });
    return () => chart.destroy();
  }, [data]);

  return (
    <div className="doughnut-child relative flex flex-grow flex-wrap m-auto w-full h-auto">
      <canvas ref={canvas} width={width} height={height}></canvas>
      <ul ref={legend} className=""></ul>
    </div>
  );
}

export default DoughnutChart;
