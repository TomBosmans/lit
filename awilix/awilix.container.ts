import Container, { RegisterData } from "../core/container"
import * as awilix from "awilix"
import { LoadModulesOptions } from "awilix/lib/load-modules"

export type AwilixRegisterParams = RegisterData<
  awilix.Constructor<unknown> & awilix.FunctionReturning<unknown>
>

export default class AwilixContainer implements Container {
  private awilixContainer: awilix.AwilixContainer
  private typeMapping = {
    value: "asValue",
    class: "asClass",
    function: "asFunction",
  } as const

  constructor(config?: awilix.ContainerOptions, awilixContainer = awilix.createContainer(config)) {
    this.awilixContainer = awilixContainer
  }

  public register({ name, registration, type = "class" }: AwilixRegisterParams) {
    const method = this.typeMapping[type]
    this.awilixContainer.register({
      [name]: awilix[method](registration),
    })
  }

  public resolve<T>(name: AwilixRegisterParams["name"]) {
    return this.awilixContainer.resolve<T>(name)
  }

  public build<T>(resolver: awilix.ClassOrFunctionReturning<T>) {
    return this.awilixContainer.build<T>(resolver)
  }

  public createScope() {
    return new AwilixContainer(undefined, this.awilixContainer.createScope())
  }

  public dispose() {
    this.awilixContainer.dispose()
  }

  public loadModules(modules: string[], options: LoadModulesOptions = { formatName: "camelCase" }) {
    this.awilixContainer.loadModules(modules, options)
  }

  public registrations(pattern?: RegExp) {
    const keys = Object.keys(this.awilixContainer.registrations)
    if (!pattern) return keys
    return keys.filter((name) => pattern.test(name))
  }
}
