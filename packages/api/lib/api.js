import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

class ApiClass {
  constructor(port) {
    this.app = express();
    this.port = port ?? 5000;

    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
  }

  delete(route, handler) {
    this.app.delete(route, handler);

    return this;
  }

  get(route, handler) {
    this.app.get(route, handler);

    return this;
  }

  patch(route, handler) {
    this.app.patch(route, handler);

    return this;
  }

  post(route, handler) {
    this.app.post(route, handler);

    return this;
  }

  put(route, handler) {
    this.app.put(route, handler);

    return this;
  }

  start(listener = () => console.log(`Listening on port ${this.port}`)) {
    this.app.listen(this.port, listener);
  }

  use(...handlers) {
    this.app.use(...handlers);

    return this;
  }
}

export const Api = (port) => new ApiClass(port);
