import Route from "../../../core/route"
import { Send } from "../../middleware/send"

export default function notFound(): Route {
  return {
    method: "get",
    path: "*",
    responseCode: 404,
    handle: async (send: Send) => {
      return send("not found")
    },
  }
}
