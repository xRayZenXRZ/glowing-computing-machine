import { Hono } from 'hono'
import { Matchs } from 'mock/matchs'

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

app.get('/matchs', (c) => {
  return c.json({ "success": true, "message": "All matchs", "uptime": null, "environment": null, "data": Matchs })
})

app.get('/matchs/:id', (c) => {
  const id = Number(c.req.param('id'))
  const match = Matchs.find(m => m.id === id)

  if (!match) {
    return c.json({ "success": false, "error": 'Match ${id} does not exist' }, 404)
  }

  return c.json({ "success": true, "message": 'Match ' + id, "data": match })
})
