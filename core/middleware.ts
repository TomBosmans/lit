export default interface Middleware {
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  (...params: any[]): any
}
