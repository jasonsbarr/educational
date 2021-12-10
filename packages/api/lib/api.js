import express from "express";

class ApiClass {
  constructor(port) {
    this.app = express();
    this.port = port ?? 5000;
  }
}

export const Api = (port) => new ApiClass(port);
