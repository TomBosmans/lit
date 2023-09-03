import Route from "../../../core/route"
import { Send } from "../../middleware/send"

export default function listsTableFunction(): Route {
  return {
    method: "get",
    path: "/lists_table",
    responseCode: 200,
    handle: (send: Send) => {
      return send("users table")
    }
  }
}
