import App from "../core/app"
import Container from "../core/container"
import Logger from "../core/logger"
import Route from "../core/route"
import express, { Express, Request, Response } from "express"

export type ExpressAppParams = {
  container: Container
  logger: Logger
  port?: number
}

export default class ExpressApp implements App {
  public express: Express
  public container: ExpressAppParams["container"]
  public logger: ExpressAppParams["logger"]
  public port: ExpressAppParams["port"]

  constructor({ container, logger, port = 3000 }: ExpressAppParams) {
    this.express = express()
    this.container = container
    this.logger = logger
    this.port = port

    this.container.register({ name: "logger", registration: logger, type: "value" })
    this.express.on("close", () => this.container.dispose())
  }

  public start() {
    this.express.listen(this.port)
  }

  public registerRoute(route: Route) {
    const scope = this.container.createScope()
    this.express[route.method](route.path, this.createRoute(route, scope))
    return this
  }

  public registerStaticFolder(path: string) {
    this.express.use(express.static(path))
    return this
  }

  private createRoute(route: Route, scope: Container) {
    return (request: Request, response: Response) => {
      scope.register({ name: "request", registration: request, type: "value" })
      scope.register({
        name: "response",
        registration: response.status(route.responseCode),
        type: "value",
      })

      return scope.build(route.handle)
    }
  }
}
