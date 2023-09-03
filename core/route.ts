import Middleware from "./middleware"
import { HttpMethod, HttpResponseCode } from "../constants"
import { Schema } from "./schema"

export default interface Route {
  method: HttpMethod
  path: string
  responseCode: HttpResponseCode
  middleware?: Middleware[]
  schemas?: {
    body?: Schema,
    params?: Schema,
    query?: Schema,
    response?: Record<HttpResponseCode, Schema>
  }
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  handle: (...params: any[]) => any
}
