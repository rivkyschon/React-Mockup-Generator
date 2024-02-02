// screenshotService.ts

import html2canvas from 'html2canvas';

const takeScreenshot = async (): Promise<string | null> => {
  try {
    const canvas = await html2canvas(document.body);
    return canvas.toDataURL("image/png");
  } catch (error) {
    console.error('Error taking screenshot:', error);
    return null;
  }
};

const downloadImage = (base64image: string, filename: string = 'screenshot.png') => {
  const link = document.createElement('a');
  link.href = base64image;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export { takeScreenshot, downloadImage };
