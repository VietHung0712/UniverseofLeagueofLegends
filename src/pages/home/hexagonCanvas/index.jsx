import { useEffect, useRef, memo } from 'react';

function HexagonCanvas({ width = 200, height = 230 }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const el = canvasRef.current;
        const ctx = el.getContext('2d');

        const points = [
            { x: 0, y: height * 0.9 },
            { x: width / 2, y: height },
            { x: width, y: height * 0.9 },
            { x: width, y: height * 0.1 },
            { x: width / 2, y: 0 },
            { x: 0, y: height * 0.1 }
        ];

        const pointsBorder = [
            { x: 10, y: height * 0.9 - 10 },
            { x: width / 2, y: height - 10 },
            { x: width - 10, y: height * 0.9 - 10 },
            { x: width - 10, y: height * 0.1 + 10 },
            { x: width / 2, y: 10 },
            { x: 10, y: height * 0.1 + 10 }
        ];

        ctx.clearRect(0, 0, width, height);

        createCanvas(ctx, points, '#0f0f0f', 1, '#00000000');
        createCanvas(ctx, pointsBorder, '#0f0f0f', 0.1, '#ff0');
        createCanvasBorderTop(ctx, points);
    }, [width, height]);

    return <canvas ref={canvasRef} width={width} height={height}></canvas>;
}

function createCanvas(ctx, points, color, widthBorder = 1, colorBorder = '#00000000') {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();

    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = colorBorder;
    ctx.lineWidth = widthBorder;
    ctx.stroke();
}

function createCanvasBorderTop(ctx, points) {
    ctx.beginPath();
    ctx.moveTo(points[5].x, points[5].y);
    ctx.lineTo(points[4].x, points[4].y);
    ctx.lineTo(points[3].x, points[3].y);

    ctx.strokeStyle = '#937341';
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.stroke();
}

export default memo(HexagonCanvas);