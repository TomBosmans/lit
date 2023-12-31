import Route from "../../../core/route"
import { Send } from "../../middleware/send"

export default function listsIndex(): Route {
  return {
    method: "get",
    path: "/lists",
    responseCode: 200,
    handle: (send: Send) => {
      return send("hello world")
    },
  }
}
