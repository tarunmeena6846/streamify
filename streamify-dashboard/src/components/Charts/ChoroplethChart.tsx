"use client";

import React, { useRef, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// US map topojson data
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Data for all states (unemployment rates as of September 2023)
const data = [
  { id: "01", state: "Alabama", revenue: 34399 },
  { id: "02", state: "Alaska", revenue: 67122 },
  { id: "04", state: "Arizona", revenue: 65444 },
  { id: "05", state: "Arkansas", revenue: 50719 },
  { id: "06", state: "California", revenue: 76945 },
  { id: "08", state: "Colorado", revenue: 50719 },
  { id: "09", state: "Connecticut", revenue: 57268 },
  { id: "10", state: "Delaware", revenue: 67122 },
  { id: "12", state: "Florida", revenue: 45894 },
  { id: "13", state: "Georgia", revenue: 52429 },
  { id: "15", state: "Hawaii", revenue: 49009 },
  { id: "16", state: "Idaho", revenue: 52429 },
  { id: "17", state: "Illinois", revenue: 67122 },
  { id: "18", state: "Indiana", revenue: 54039 },
  { id: "19", state: "Iowa", revenue: 42679 },
  { id: "20", state: "Kansas", revenue: 44389 },
  { id: "21", state: "Kentucky", revenue: 65444 },
  { id: "22", state: "Louisiana", revenue: 57268 },
  { id: "23", state: "Maine", revenue: 44389 },
  { id: "24", state: "Maryland", revenue: 31269 },
  { id: "25", state: "Massachusetts", revenue: 45894 },
  { id: "26", state: "Michigan", revenue: 60688 },
  { id: "27", state: "Minnesota", revenue: 47604 },
  { id: "28", state: "Mississippi", revenue: 52429 },
  { id: "29", state: "Missouri", revenue: 40969 },
  { id: "30", state: "Montana", revenue: 45894 },
  { id: "31", state: "Nebraska", revenue: 34399 },
  { id: "32", state: "Nevada", revenue: 88401 },
  { id: "33", state: "New Hampshire", revenue: 34399 },
  { id: "34", state: "New Jersey", revenue: 71970 },
  { id: "35", state: "New Mexico", revenue: 62128 },
  { id: "36", state: "New York", revenue: 62128 },
  { id: "37", state: "North Carolina", revenue: 57268 },
  { id: "38", state: "North Dakota", revenue: 31269 },
  { id: "39", state: "Ohio", revenue: 55728 },
  { id: "40", state: "Oklahoma", revenue: 52429 },
  { id: "41", state: "Oregon", revenue: 59009 },
  { id: "42", state: "Pennsylvania", revenue: 55728 },
  { id: "44", state: "Rhode Island", revenue: 44389 },
  { id: "45", state: "South Carolina", revenue: 50719 },
  { id: "46", state: "South Dakota", revenue: 32709 },
  { id: "47", state: "Tennessee", revenue: 52429 },
  { id: "48", state: "Texas", revenue: 67122 },
  { id: "49", state: "Utah", revenue: 37634 },
  { id: "50", state: "Vermont", revenue: 32709 },
  { id: "51", state: "Virginia", revenue: 44389 },
  { id: "53", state: "Washington", revenue: 60688 },
  { id: "54", state: "West Virginia", revenue: 65444 },
  { id: "55", state: "Wisconsin", revenue: 52429 },
  { id: "56", state: "Wyoming", revenue: 54039 },
];

// Total revenue sum: 1,731,000

const colorScale = scaleQuantile()
  .domain(data.map((d) => d.revenue))
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

export default function USChoroplethMap() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (event: React.MouseEvent) => {
    if (mapRef.current) {
      const mapRect = mapRef.current.getBoundingClientRect();
      const x = event.clientX - mapRect.left;
      const y = event.clientY - mapRect.top;

      // Adjust tooltip position to stay within map bounds
      const tooltipWidth = 150; // Approximate width of tooltip
      const tooltipHeight = 40; // Approximate height of tooltip
      const padding = 10; // Padding from the edges

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
                  // Log the geo object to inspect its structure
                  console.log(geo, "geo is ");

                  // Assuming the state abbreviation is in geo.properties.iso_3166_2
                  const cur = data.find((s) => s.id === geo.id);
                  console.log("current is ", cur);

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
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
                  style={{ backgroundColor: color }}
                  className="w-4 h-4"
                />
              ))}
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span>
                ${Math.min(...data.map((d) => d.revenue)).toLocaleString()}
              </span>
              <span>
                ${Math.max(...data.map((d) => d.revenue)).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
