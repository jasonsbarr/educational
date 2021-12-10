import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

class ApiClass {
  constructor(port = 5000) {
    this._app = express();
    this._port = port;

    this._app.use(cors());
    this._app.use(bodyParser.urlencoded({ extended: true }));
    this._app.use(bodyParser.json());
  }

  get app() {
    return this._app;
  }

  get port() {
    return this._port;
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

  // router is instance of RouterClass from ./router.js
  useRoutes(base, router) {
    this.app.use(base, router.routes);

    return this;
  }
}

export const Api = (port) => new ApiClass(port);
