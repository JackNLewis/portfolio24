"use client"

import { useEffect, useRef } from "react";
import {point, points1, points2, points3, points4, points5, points6, points7} from "@/lib/points";

export default function Canvas({ pointIndex = 0, height = 800, width = 800, styles = ""}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    let points : point[]
    switch (pointIndex){
      case 2:
        points = points2;
        break;
      case 3:
        points = points3
        break;
      case 4:
        points = points4;
        break;
      case 5:
        points = points5
        break;
      case 6:
        points = points6
        break;
      case 7:
        points = points7
        break;
      default:
        points = points1;
    }

    function draw(context: CanvasRenderingContext2D) {
  
      if (context) {
        context.fillRect(0, 0, height, width);

        context.clearRect(0, 0, width, height); // clear the canvas
        points.forEach(pt => {
          context.beginPath();
          context.fillStyle = "rgba(73, 143, 126, " + pt.ra + ")"; 
            
          context.arc(pt.cx, pt.cy, (pt.ra)*3,0,Math.PI * 2);

          context.fill();
  
          let threshold = 20
          if(Math.abs(pt.cx - pt.startX) > threshold || (pt.cx<= 5) ){
              pt.dx = -pt.dx;
          }

          if(Math.abs(pt.cy - pt.startY) > threshold || (pt.cy <= 5) ){
              pt.dy = -pt.dy;
          }

          pt.dx += (Math.random()-0.5) * 0.02; // Apply easing effect
          pt.dy += (Math.random()-0.5) * 0.02; // Apply easing effect

          pt.cx += pt.dx * 0.05;
          pt.cy += pt.dy * 0.05;
        })
        frameRef.current = requestAnimationFrame(() => draw(context));
      }
    }
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d");

      if (context) {
        context.canvas.height = height;
        context.canvas.width = width;

        frameRef.current = requestAnimationFrame(() => draw(context));
      }
    }
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return <canvas ref={canvasRef} className={styles + " -z-10"}/>;
}