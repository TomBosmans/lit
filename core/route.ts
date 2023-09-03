import { HttpMethod, HttpResponseCode } from "../constants"
import Middleware from "./middleware"

export default interface Route {
  method: HttpMethod
  path: string
  responseCode: HttpResponseCode
  middleware?: Middleware[]
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  handle: (...params: any[]) => any
}
