import { ScreenshotService } from '~/lib/server/screenshot-service'
import { createServerFn } from '@tanstack/react-start'

export const forceGenerateScreenshot = createServerFn({
  method: 'POST',
}).handler(async () => {
  const screenshotService = new ScreenshotService()

  try {
    await screenshotService.init()

    return {
      success: true,
      message: 'test',
    }
  } catch (error) {
  } finally {
  }
})
