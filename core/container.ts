export type RegisterData<Registration> = {
  name: string
  registration: Registration
  type?: "value" | "function" | "class"
}

export default interface Container {
  register({ name, registration, type }: RegisterData<unknown>): void
  resolve<T>(name: RegisterData<unknown>["name"]): T
  build<T>(registration: unknown): T
  createScope(): Container
  dispose(): void
  loadModules(modules: string[]): void
  registrations(pattern: RegExp): string[]
}
