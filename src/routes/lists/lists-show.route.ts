import Route from "../../../core/route"
import { object, output, string } from "../../../core/schema"
import { Send } from "../../middleware/send"

const paramsSchema = object({ id: string() })
type Params = output<typeof paramsSchema>

export default function listsShow(): Route {
  return {
    method: "get",
    path: "/lists/:id",
    responseCode: 200,
    schemas: {
      params: paramsSchema,
    },
    handle: (send: Send, params: Params) => {
      return send(`User with id ${params.id}`)
    },
  }
}
