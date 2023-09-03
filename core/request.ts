export default interface Request {
  body: Record<string, unknown>
  query: Record<string, unknown>
  params: Record<string, unknown>
  cookies: Record<string, unknown>
}
