import puppeteer from 'puppeteer'

export class ScreenshotService {
  async init() {
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: undefined,
      args: [
        '--no-sandbox',
        '--no-first-run',
        '--no-default-browser-check',
        '--disable-default-apps',
        '--hide-scrollbars',
        '--mute-audio',
        '--disable-dev-shm-usage',
        // GPU acceleration flags
        '--enable-gpu',
        '--use-gl=egl',
        '--enable-accelerated-2d-canvas',
        '--enable-accelerated-mjpeg-decode',
        '--enable-accelerated-video-decode',
        '--enable-gpu-rasterization',
        '--enable-zero-copy',
        // WebGL support
        '--enable-webgl',
        '--enable-webgl2',
        // Fallback to software rendering if GPU fails
        '--enable-unsafe-swiftshader',
      ],
    })
  }
}
