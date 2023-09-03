import { Response } from "express"
import Route from "../../../core/route"

export default function listsIndex(): Route {
  return {
    method: "get",
    path: "/lists",
    responseCode: 200,
    handle: (response: Response) => {
      return response.send("damn world")
    },
  }
}
