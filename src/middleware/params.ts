import { Request } from "express"
import { Schema } from "../../core/schema"

export default function params(request: Request, schemas: { params: Schema }) {
  return schemas.params.parse(request.params)
}
