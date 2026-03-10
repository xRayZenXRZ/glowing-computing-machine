import { Hono } from 'hono'

export const app = new Hono()

// Enter Point of API
app.get('/', (c) => {
  return c.json({
    "success": true,
    "message": "World Cup Ticketing API"
  })
})

// End point for health of API
app.get('/health', (c) => {
  return c.json({
    "success": true,
    "message": "World Cup Ticketing API",
    "uptime": null,
    "environment": null,
  })
})

