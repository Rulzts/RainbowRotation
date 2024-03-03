// 获取canvas元素
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 设置canvas大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 设置彩虹颜色
const rainbowColors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];

// 绘制彩虹
function drawRainbow() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 2;

    for (let i = 0; i < rainbowColors.length; i++) {
        const startAngle = (i * 2 * Math.PI) / rainbowColors.length;
        const endAngle = ((i + 1) * 2 * Math.PI) / rainbowColors.length;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = rainbowColors[i];
        ctx.fill();
    }
}

// 清除画布
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 旋转并绘制彩虹
function rotateAndDraw() {
    clearCanvas();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(Math.PI / 180);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    drawRainbow();
    requestAnimationFrame(rotateAndDraw);
}

// 开始旋转和绘制
rotateAndDraw();
