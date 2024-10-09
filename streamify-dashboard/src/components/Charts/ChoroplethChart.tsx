"use client";

import React, { useEffect, useRef, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile, scaleThreshold } from "d3-scale";
// import { scaleLinear, scaleQuantile } from "d3-scale";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StateRevenueType } from "@/lib/types";

// US map topojson data
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function USChoroplethMap({
  revenueByState,
}: {
  revenueByState: StateRevenueType[];
}) {
  console.log("tarun revenueByState", revenueByState);
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (event: React.MouseEvent) => {
    if (mapRef.current) {
      const mapRect = mapRef.current.getBoundingClientRect();
      const x = event.clientX - mapRect.left;
      const y = event.clientY - mapRect.top;

      // Adjust tooltip position to stay within map bounds
      const tooltipWidth = 150;
      const tooltipHeight = 40;
      const padding = 10;

      let adjustedX = x;
      let adjustedY = y;

      if (x + tooltipWidth > mapRect.width - padding) {
        adjustedX = mapRect.width - tooltipWidth - padding;
      }
      if (y + tooltipHeight > mapRect.height - padding) {
        adjustedY = mapRect.height - tooltipHeight - padding;
      }

      setTooltipPosition({ x: adjustedX, y: adjustedY });
    }
  };

  const colorScale = scaleThreshold()
    .domain(revenueByState.map((d: StateRevenueType) => d.revenue))
    // @ts-ignore
    .range([
      "#e3f2fd",
      "#bbdefb",
      "#90caf9",
      "#64b5f6",
      "#42a5f5",
      "#2196f3",
      "#1e88e5",
      "#1976d2",
    ]);

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>Aggregate Revenue (2024)</CardTitle>
        <CardDescription>Total revenue for the year</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative" ref={mapRef}>
          <ComposableMap projection="geoAlbersUsa" className="w-full h-auto">
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  // console.log(geo.id, geo.properties); // Check the structure

                  const cur = revenueByState.find((s) => s.id === geo.id);
                  // console.log("current is ", cur);

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      // @ts-ignore
                      fill={cur ? colorScale(cur.revenue) : "#F5F5F5"}
                      stroke="#FFF"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none", opacity: 0.8 },
                        pressed: { outline: "none", opacity: 0.8 },
                      }}
                      onMouseEnter={() => {
                        setTooltipContent(
                          `${cur?.state}: $${cur?.revenue.toLocaleString()}`
                        );
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      onMouseMove={handleMouseMove}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
          {tooltipContent && (
            <div
              className="absolute bg-white p-2 rounded shadow-md text-sm pointer-events-none text-black"
              style={{
                left: tooltipPosition.x,
                top: tooltipPosition.y,
                // transform: "translateX(-50%)",
              }}
            >
              {tooltipContent}
            </div>
          )}
          <div className="absolute bottom-0 left-0 bg-white bg-opacity-80 p-2 rounded-md hidden md:block ">
            <div className="text-sm font-semibold mb-1">Revenue</div>
            <div className="flex items-center space-x-1">
              {colorScale.range().map((color, i) => (
                <div
                  key={i}
                  // @ts-ignore
                  style={{ backgroundColor: color }}
                  className={`w-4 h-4`}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span>
                $
                {Math.min(
                  ...revenueByState.map((d) => d.revenue)
                ).toLocaleString()}
              </span>
              <span>
                $
                {Math.max(
                  ...revenueByState.map((d) => d.revenue)
                ).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
