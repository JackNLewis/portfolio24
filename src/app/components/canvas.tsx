import { useEffect, useRef } from "react";
import points from "@/lib/points";

export default function Canvas({ height = 500, width = 500, styles = ""}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    function draw(context: CanvasRenderingContext2D) {
      if (context) {
        context.fillStyle = "red";
        context.fillRect(0, 0, height, width);



        context.clearRect(0, 0, width, height); // clear the canvas
        points.forEach(pt => {
          context.beginPath();
          context.fillStyle = "rgba(73, 143, 126, " + pt.ra + ")"; 
            
          context.arc(pt.cx, pt.cy, (pt.ra)*3,0,Math.PI * 2);

          context.fill();
            
           
          
          let threshold = 20


    
          if(Math.abs(pt.cx - pt.startX) > threshold) {
              pt.dx = -pt.dx;
          }

          if(Math.abs(pt.cy - pt.startY) > threshold) {
              pt.dy = -pt.dy;
          }

          pt.dx += (Math.random()-0.5) * 0.02; // Apply easing effect
          pt.dy += (Math.random()-0.5) * 0.02; // Apply easing effect

          pt.cx += pt.dx * 0.1;
          pt.cy += pt.dy * 0.1;
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
  }, [height, width]);

  return <canvas ref={canvasRef} className={styles}/>;
}