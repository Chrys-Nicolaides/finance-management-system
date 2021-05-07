import React, { useRef, useEffect } from "react";
import theme from "../../tailwindConfig";

import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-moment";

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend
);

function BarChart({ data, width, height }) {
  const canvas = useRef(null);
  const legend = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    const chart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        layout: {
          padding: {
            //   top: 12,
            //   bottom: 16,
            left: 20,
            right: 20,
          },
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              callback: (value) => formatValue(value),
            },
          },
          x: {
            type: "time",
            time: {
              parser: "MM-DD-YYYY",
              unit: "month",
              displayFormats: {
                month: "MMM",
              },
            },
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              boxWidth: 15,
              boxHeight: 15,
              borderRadius: 100,
              color: [theme.colors.gray[500]],
              font: {
                // size: 16,
                weight: "bold",
              },
            },
          },
          tooltip: {
            callbacks: {
              title: () => false,
              label: (context) => formatValue(context.parsed.y),
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
  }, []);

  const formatValue = (value) =>
    Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumSignificantDigits: 3,
      notation: "compact",
    }).format(value);

  //

  return (
    <div className="bar-child relative flex flex-grow flex-wrap m-auto w-full h-auto">
      {/* <ul ref={legend} className=""></ul> */}
      {/* <div className=""> */}
      <canvas ref={canvas} width={width} height={height}></canvas>
      {/* </div> */}
    </div>
  );
}

export default BarChart;
