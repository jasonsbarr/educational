import express from "express";

class RouterClass {
  constructor() {
    this._routes = express.Router();
  }

  get routes() {
    return this._routes;
  }

  get(route, handler) {
    this.routes.get(route, handler);

    return this;
  }
}

export const Router = () => new RouterClass();
