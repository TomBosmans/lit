import AwilixContainer from "./awilix/awilix.container"
import ExpressApp from "./express/express.app"
import TSLogLogger from "./tslog/tslog.logger"

export type AppParams = {
  loadModules: string[]
}

export default class App extends ExpressApp {
  constructor() {
    super({
      container: new AwilixContainer({
        injectionMode: "CLASSIC",
      }),
      logger: new TSLogLogger(),
    })
  }
}
