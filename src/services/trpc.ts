import { AppRouter } from '@/server/routers/_app'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'

function getBaseUrl (): string {
  return `http://localhost:${process.env.PORT ?? 3000}`
}

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`
    })
  ]
})
