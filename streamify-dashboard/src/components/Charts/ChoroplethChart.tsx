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
  { id: "01", state: "Alabama", value: 2.1 },
  { id: "02", state: "Alaska", value: 4.1 },
  { id: "04", state: "Arizona", value: 4.0 },
  { id: "05", state: "Arkansas", value: 3.1 },
  { id: "06", state: "California", value: 4.7 },
  { id: "08", state: "Colorado", value: 3.1 },
  { id: "09", state: "Connecticut", value: 3.5 },
  { id: "10", state: "Delaware", value: 4.1 },
  { id: "12", state: "Florida", value: 2.8 },
  { id: "13", state: "Georgia", value: 3.2 }, // FIPS 13 for Georgia
  { id: "15", state: "Hawaii", value: 3.0 }, // FIPS 15 for Hawaii
  { id: "16", state: "Idaho", value: 3.2 }, // FIPS 16 for Idaho
  { id: "17", state: "Illinois", value: 4.1 }, // FIPS 17 for Illinois
  { id: "18", state: "Indiana", value: 3.3 }, // FIPS 18 for Indiana
  { id: "19", state: "Iowa", value: 2.6 }, // FIPS 19 for Iowa
  { id: "20", state: "Kansas", value: 2.7 }, // FIPS 20 for Kansas
  { id: "21", state: "Kentucky", value: 4.0 }, // FIPS 21 for Kentucky
  { id: "22", state: "Louisiana", value: 3.5 }, // FIPS 22 for Louisiana
  { id: "23", state: "Maine", value: 2.7 }, // FIPS 23 for Maine
  { id: "24", state: "Maryland", value: 1.9 }, // FIPS 24 for Maryland
  { id: "25", state: "Massachusetts", value: 2.8 }, // FIPS 25 for Massachusetts
  { id: "26", state: "Michigan", value: 3.7 }, // FIPS 26 for Michigan
  { id: "27", state: "Minnesota", value: 2.9 }, // FIPS 27 for Minnesota
  { id: "28", state: "Mississippi", value: 3.2 }, // FIPS 28 for Mississippi
  { id: "29", state: "Missouri", value: 2.5 }, // FIPS 29 for Missouri
  { id: "30", state: "Montana", value: 2.8 }, // FIPS 30 for Montana
  { id: "31", state: "Nebraska", value: 2.1 }, // FIPS 31 for Nebraska
  { id: "32", state: "Nevada", value: 5.4 }, // FIPS 32 for Nevada
  { id: "33", state: "New Hampshire", value: 2.1 }, // FIPS 33 for New Hampshire
  { id: "34", state: "New Jersey", value: 4.4 }, // FIPS 34 for New Jersey
  { id: "35", state: "New Mexico", value: 3.8 }, // FIPS 35 for New Mexico
  { id: "36", state: "New York", value: 3.8 }, // FIPS 36 for New York
  { id: "37", state: "North Carolina", value: 3.5 }, // FIPS 37 for North Carolina
  { id: "38", state: "North Dakota", value: 1.9 }, // FIPS 38 for North Dakota
  { id: "39", state: "Ohio", value: 3.4 }, // FIPS 39 for Ohio
  { id: "40", state: "Oklahoma", value: 3.2 }, // FIPS 40 for Oklahoma
  { id: "41", state: "Oregon", value: 3.6 }, // FIPS 41 for Oregon
  { id: "42", state: "Pennsylvania", value: 3.4 }, // FIPS 42 for Pennsylvania
  { id: "44", state: "Rhode Island", value: 2.7 }, // FIPS 44 for Rhode Island
  { id: "45", state: "South Carolina", value: 3.1 }, // FIPS 45 for South Carolina
  { id: "46", state: "South Dakota", value: 2.0 }, // FIPS 46 for South Dakota
  { id: "47", state: "Tennessee", value: 3.2 }, // FIPS 47 for Tennessee
  { id: "48", state: "Texas", value: 4.1 }, // FIPS 48 for Texas
  { id: "49", state: "Utah", value: 2.3 }, // FIPS 49 for Utah
  { id: "50", state: "Vermont", value: 2.0 }, // FIPS 50 for Vermont
  { id: "51", state: "Virginia", value: 2.7 }, // FIPS 51 for Virginia
  { id: "53", state: "Washington", value: 3.7 }, // FIPS 53 for Washington
  { id: "54", state: "West Virginia", value: 4.0 }, // FIPS 54 for West Virginia
  { id: "55", state: "Wisconsin", value: 3.2 }, // FIPS 55 for Wisconsin
  { id: "56", state: "Wyoming", value: 3.3 }, // FIPS 56 for Wyoming
];

const colorScale = scaleQuantile()
  .domain(data.map((d) => d.value))
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
        <CardTitle>US Unemployment Rate (September 2023)</CardTitle>
        <CardDescription>Unemployment rate by state</CardDescription>
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
                      fill={cur ? colorScale(cur.value) : "#F5F5F5"}
                      stroke="#FFF"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none", opacity: 0.8 },
                        pressed: { outline: "none", opacity: 0.8 },
                      }}
                      onMouseEnter={() => {
                        setTooltipContent(`${cur?.state}: ${cur?.value}%`);
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
          <div className="absolute bottom-0 left-0 bg-white bg-opacity-80 p-2 rounded-tr-md ">
            <div className="text-sm font-semibold mb-1">Unemployment Rate</div>
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
              <span>{Math.min(...data.map((d) => d.value)).toFixed(1)}%</span>
              <span>{Math.max(...data.map((d) => d.value)).toFixed(1)}%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
