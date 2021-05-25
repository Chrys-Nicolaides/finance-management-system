import React, { useRef, useEffect } from "react";
import theme from "../../tailwindConfig";
import useBreakpoint from "use-breakpoint";

import {
  Chart,
  DoughnutController,
  ArcElement,
  TimeScale,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-date-fns";

Chart.register(DoughnutController, ArcElement, TimeScale, Tooltip);

const BREAKPOINTS = { mobile: 0, tablet: 700, desktop: 1445 };

function DoughnutChart({ data, width, height }) {
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
      type: "doughnut",
      data: data,

      options: {
        cutout: "75%",
        layout: {
          padding: 20,
        },
        plugins: {
          legend: {
            display: true,
            position: breakpoint == "desktop" ? "left" : "bottom",
            labels: {
              boxWidth: 10,
              boxHeight: 10,
              padding: 20,
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
        responsive: true,
        maintainAspectRatio: false,
      },
    });
    return () => chart.destroy();
  }, [data, breakpoint]);

  return (
    <div className="doughnut-child relative flex flex-grow flex-wrap m-auto w-full h-full">
      {/* <canvas ref={canvas} width={width} height={height}></canvas> */}
      <canvas ref={canvas}></canvas>
    </div>
  );
}

export default DoughnutChart;
