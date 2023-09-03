import { Response } from "express"

export type Send = ReturnType<typeof send>

export default function send(response: Response) {
  return (body: unknown) => response.send(body)
}
