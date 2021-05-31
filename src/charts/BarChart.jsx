import React, { useRef, useEffect } from "react";
import theme from "../../tailwindConfig";
import useBreakpoint from "use-breakpoint";

import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-date-fns";

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend
);

const BREAKPOINTS = { mobile: 0, tablet: 700, desktop: 1445 };

function BarChart({ data, width, height }) {
  const canvas = useRef(null);
  const legend = useRef(null);

  let breakpoint;
  const CurrentBreakpoint = () => {
    breakpoint = useBreakpoint(BREAKPOINTS, "desktop").breakpoint;
  };
  CurrentBreakpoint();

  useEffect(() => {
    const ctx = canvas.current;
    const chart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        layout: {
          padding: 0,
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
            },
            ticks: {
              font: {
                size: 12,
                weight: "bold",
              },
              beginAtZero: true,
              maxTicksLimit: 5,
              callback: (value) => formatValue(value),
            },
          },
          x: {
            type: "time",

            time: {
              parser: "dd-MM-yyyy",
              unit: "month",
              displayFormats: {
                month: "MMM",
              },
            },
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              font: {
                size: 14,
                weight: "bold",
              },
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: breakpoint == "desktop" ? "right" : "bottom",
            labels: {
              boxWidth: 15,
              boxHeight: 15,
              borderRadius: 100,
              padding: 30,
              color: [theme.colors.gray[500]],
              font: {
                size: 14,
                weight: "bold",
                style: "normal",
                family:
                  "'-apple-system', 'BlinkMacSystemFont', '-apple-system', Roboto, 'Helvetica', 'sans-serif', 'Apple Color Emoji'",
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
        responsive: true,
        maintainAspectRatio: false,
      },
    });
    return () => chart.destroy();
  }, [data, breakpoint]);

  const formatValue = (value) =>
    Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumSignificantDigits: 3,
      notation: "compact",
    }).format(value);

  //

  return (
    <div className="bar-child relative flex flex-grow flex-wrap m-auto w-full h-full">
      {/* <canvas ref={canvas} width={width} height={height}></canvas> */}
      <canvas ref={canvas} height={height}></canvas>
    </div>
  );
}

export default BarChart;
