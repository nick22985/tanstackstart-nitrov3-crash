import { createFileRoute } from '@tanstack/react-router'
import { forceGenerateScreenshot } from '@/lib/server/serverFn/test'

export const Route = createFileRoute('/')({ component: App })

function App() {
  forceGenerateScreenshot()

  return <div>demo app</div>
}
