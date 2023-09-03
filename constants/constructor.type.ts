// rome-ignore lint/suspicious/noExplicitAny: <explanation>
type Constructor<T> = new (...args: any[]) => T
export default Constructor
