
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const textInput = document.getElementById('textInput');
const fontSizeInput = document.getElementById('fontSizeInput');
const fontFamilyInput = document.getElementById('fontFamilyInput');
const textColorInput = document.getElementById('textColorInput');
const bgColorInput = document.getElementById('bgColorInput');
const downloadBtn = document.getElementById('downloadBtn');

function generateImage() {
    const text = textInput.value;
    const fontSize = parseInt(fontSizeInput.value);
    const fontFamily = fontFamilyInput.value;
    const textColor = textColorInput.value;
    const bgColor = bgColorInput.value;

    ctx.font = `${fontSize}px ${fontFamily}`;
    const metrics = ctx.measureText(text);
    const padding = 40;
    canvas.width = metrics.width + padding * 2;
    canvas.height = fontSize * 1.5 + padding * 2;

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = textColor;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}

function handleDownload() {
    const link = document.createElement('a');
    link.download = 'text-image.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

textInput.addEventListener('input', generateImage);
fontSizeInput.addEventListener('input', generateImage);
fontFamilyInput.addEventListener('change', generateImage);
textColorInput.addEventListener('input', generateImage);
bgColorInput.addEventListener('input', generateImage);
downloadBtn.addEventListener('click', handleDownload);

generateImage();