import App from "../app"
import Route from "../core/route"

const app = new App()

app.registerStaticFolder("public")

app.container.loadModules([
  "src/routes/**/*.route.ts",
  "src/routes/**/*.route.tsx",
  "src/services/**/*.ts",
  "src/middleware/**/*.ts",
])

app.container.registrations(/Route/).forEach((routeName) => {
  app.logger.info(`Created route ${routeName}`)
  const route = app.container.resolve<Route>(routeName)
  app.registerRoute(route)
})

app.start()
