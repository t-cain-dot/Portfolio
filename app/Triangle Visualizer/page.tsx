"use client";

import { useState } from "react";

export default function TrianglePage() {
  const [angleB, setAngleB] = useState(60);
  const [baseMm, setBaseMm] = useState(200); 

  const angleA = 90;
  const angleC = 180 - angleA - angleB;

  const mmToPx = (mm: number) => mm / 0.264583;
  const pxToMm = (px: number) => px * 0.264583;

  const base = mmToPx(baseMm);

  const height = Math.tan((angleB * Math.PI) / 180) * base;

  const hypotenuse = Math.sqrt(base * base + height * height);

  const offsetX = 50;
  const offsetY = 300;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Triangle Visualizer (mm)</h1>

      <div className="mb-4 w-80 text-center">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Angle B (°)
        </label>
        <input
          type="range"
          min="10"
          max="89"
          value={angleB}
          onChange={(e) => setAngleB(Number(e.target.value))}
          className="w-full accent-blue-500"
        />
        <p className="mt-1 text-gray-700">B = {angleB}°</p>
      </div>

      <div className="mb-6 w-80 text-center">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Base (mm)
        </label>
        <input
          type="range"
          min="50"
          max="300"
          value={baseMm}
          onChange={(e) => setBaseMm(Number(e.target.value))}
          className="w-full accent-green-500"
        />
        <p className="mt-1 text-gray-700">Base = {baseMm} mm</p>
      </div>

      <p className="mb-4 text-gray-700">
        Angles: A = {angleA}°, B = {angleB}°, C = {angleC.toFixed(1)}° <br />
        Height = {pxToMm(height).toFixed(1)} mm, 
        Hypotenuse = {pxToMm(hypotenuse).toFixed(1)} mm
      </p>

      <svg width="400" height="350" className="border bg-white shadow-md rounded">
  <polygon
    points={`${offsetX},${offsetY} ${offsetX + base},${offsetY} ${offsetX},${offsetY - height}`}
    fill="#60a5fa"
    stroke="black"
    strokeWidth="2"
  />

  <text x={offsetX - 10} y={offsetY + 15} fontSize="14">A (90°)</text>
  <text x={offsetX + base - 20} y={offsetY + 15} fontSize="14">B ({angleB}°)</text>
  <text x={offsetX - 25} y={offsetY - height} fontSize="14">C ({angleC.toFixed(1)}°)</text>
  <text
    x={offsetX + base / 2 - 6}
    y={offsetY - height / 2 - 5}
    fontSize="13"
  >
    {pxToMm(hypotenuse).toFixed(1)} mm
  </text>

  <text
    x={offsetX - 50} // slightly left of the vertical line
    y={offsetY - height / 2 + 5} // midpoint of vertical side
    fontSize="13"
  >
    {pxToMm(height).toFixed(1)} mm
  </text>
  </svg>

    </main>
  );
}
