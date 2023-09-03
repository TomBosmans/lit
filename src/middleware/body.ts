import { Request } from "express"
import { Schema } from "../../core/schema"

export default function body(request: Request, schemas: { body: Schema }) {
  return schemas.body.parse(request.body)
}
