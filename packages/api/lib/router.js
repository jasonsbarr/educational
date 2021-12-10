import express from "express";

class RouterClass {
  constructor() {
    this._routes = express.Router();
  }

  get routes() {
    return this._routes;
  }

  all(route, handler) {
    this.routes.all(route, handler);

    return this;
  }

  delete(route, handler) {
    this.routes.delete(route, handler);

    return this;
  }

  get(route, handler) {
    this.routes.get(route, handler);

    return this;
  }

  patch(route, handler) {
    this.routes.patch(route, handler);

    return this;
  }

  post(route, handler) {
    this.routes.post(route, handler);

    return this;
  }

  put(route, handler) {
    this.routes.put(route, handler);

    return this;
  }

  use(...handlers) {
    this.routes.use(...handlers);

    return this;
  }
}

export const Router = () => new RouterClass();
