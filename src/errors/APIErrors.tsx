import { ErrorBody, ResultTypeError } from "../types/type";

class APIError extends Error {
  response: ResultTypeError;
  body?: ErrorBody;

  constructor(result: ResultTypeError, body?: ErrorBody) {
    super("APIError");

    this.response = result;
    this.body = body;
    this.message = body?.error || `${result.status} - ${result.statusText}`;
  }
}
export default APIError;
