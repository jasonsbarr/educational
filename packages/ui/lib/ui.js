import React from "react";
import ReactDOM from "react-dom";

export const render = (node, mount) => ReactDOM.render(node, mount);

export const element = (el, props, ...children) =>
  React.createElement(el, props, children);

export const fragment = (...children) =>
  element(React.Fragment, null, ...children);

export const useEffect = (callback, deps = undefined) =>
  React.useEffect(callback, deps);

export const useState = (init) => React.useState(init);

export const a = (props = {}, ...children) => element("a", props, ...children);

export const abbr = (props = {}, ...children) =>
  element("abbr", props, ...children);

export const address = (props = {}, ...children) =>
  element("address", props, ...children);

export const area = (props = {}, ...children) =>
  element("area", props, ...children);

export const article = (props = {}, ...children) =>
  element("article", props, ...children);

export const aside = (props = {}, ...children) =>
  element("aside", props, ...children);

export const audio = (props = {}, ...children) =>
  element("audio", props, ...children);

export const b = (props = {}, ...children) => element("b", props, ...children);

export const bdi = (props = {}, ...children) =>
  element("bdi", props, ...children);

export const bdo = (props = {}, ...children) =>
  element("bdo", props, ...children);

export const blockquote = (props = {}, ...children) =>
  element("blockquote", props, ...children);

export const br = (props = {}, ...children) =>
  element("br", props, ...children);

export const button = (props = {}, ...children) =>
  element("button", props, ...children);

export const caption = (props = {}, ...children) =>
  element("caption", props, ...children);

export const canvas = (props = {}, ...children) =>
  element("canvas", props, ...children);

export const cite = (props = {}, ...children) =>
  element("cite", props, ...children);

export const code = (props = {}, ...children) =>
  element("code", props, ...children);

export const col = (props = {}, ...children) =>
  element("col", props, ...children);

export const colgroup = (props = {}, ...children) =>
  element("colgroup", props, ...children);

export const data = (props = {}, ...children) =>
  element("data", props, ...children);

export const datalist = (props = {}, ...children) =>
  element("datalist", props, ...children);

export const dd = (props = {}, ...children) =>
  element("dd", props, ...children);

export const del = (props = {}, ...children) =>
  element("del", props, ...children);

export const details = (props = {}, ...children) =>
  element("details", props, ...children);

export const dfn = (props = {}, ...children) =>
  element("dfn", props, ...children);

export const dialog = (props = {}, ...children) =>
  element("dialog", props, ...children);

export const div = (props = {}, ...children) =>
  element("div", props, ...children);

export const dl = (props = {}, ...children) =>
  element("dl", props, ...children);

export const dt = (props = {}, ...children) =>
  element("dt", props, ...children);

export const em = (props = {}, ...children) =>
  element("em", props, ...children);

export const embed = (props = {}, ...children) =>
  element("embed", props, ...children);

export const fieldset = (props = {}, ...children) =>
  element("fieldset", props, ...children);

export const figcaption = (props = {}, ...children) =>
  element("figcaption", props, ...children);

export const figure = (props = {}, ...children) =>
  element("figure", props, ...children);

export const footer = (props = {}, ...children) =>
  element("footer", props, ...children);

export const form = (props = {}, ...children) =>
  element("form", props, ...children);

export const h1 = (props = {}, ...children) =>
  element("h1", props, ...children);

export const h2 = (props = {}, ...children) =>
  element("h2", props, ...children);

export const h3 = (props = {}, ...children) =>
  element("h3", props, ...children);

export const h4 = (props = {}, ...children) =>
  element("h4", props, ...children);

export const h5 = (props = {}, ...children) =>
  element("h5", props, ...children);

export const h6 = (props = {}, ...children) =>
  element("h6", props, ...children);

export const header = (props = {}, ...children) =>
  element("header", props, ...children);

export const hr = (props = {}, ...children) =>
  element("hr", props, ...children);

export const i = (props = {}, ...children) => element("i", props, ...children);

export const iframe = (props = {}, ...children) =>
  element("iframe", props, ...children);

export const img = (props = {}, ...children) =>
  element("img", props, ...children);

export const input = (props = {}, ...children) =>
  element("input", props, ...children);

export const ins = (props = {}, ...children) =>
  element("ins", props, ...children);

export const kbd = (props = {}, ...children) =>
  element("kbd", props, ...children);

export const label = (props = {}, ...children) =>
  element("label", props, ...children);

export const legend = (props = {}, ...children) =>
  element("legend", props, ...children);

export const li = (props = {}, ...children) =>
  element("li", props, ...children);

export const main = (props = {}, ...children) =>
  element("main", props, ...children);

export const map = (props = {}, ...children) =>
  element("map", props, ...children);

export const mark = (props = {}, ...children) =>
  element("mark", props, ...children);

export const math = (props = {}, ...children) =>
  element("math", props, ...children);

export const menu = (props = {}, ...children) =>
  element("menu", props, ...children);

export const meter = (props = {}, ...children) =>
  element("meter", props, ...children);

export const nav = (props = {}, ...children) =>
  element("nav", props, ...children);

export const object = (props = {}, ...children) =>
  element("object", props, ...children);

export const ol = (props = {}, ...children) =>
  element("ol", props, ...children);

export const optgroup = (props = {}, ...children) =>
  element("optgroup", props, ...children);

export const option = (props = {}, ...children) =>
  element("option", props, ...children);

export const output = (props = {}, ...children) =>
  element("output", props, ...children);

export const p = (props = {}, ...children) => element("p", props, ...children);

export const param = (props = {}, ...children) =>
  element("param", props, ...children);

export const picture = (props = {}, ...children) =>
  element("picture", props, ...children);

export const portal = (props = {}, ...children) =>
  element("portal", props, ...children);

export const pre = (props = {}, ...children) =>
  element("pre", props, ...children);

export const progress = (props = {}, ...children) =>
  element("progress", props, ...children);

export const q = (props = {}, ...children) => element("q", props, ...children);

export const rp = (props = {}, ...children) =>
  element("rp", props, ...children);

export const rt = (props = {}, ...children) =>
  element("rt", props, ...children);

export const ruby = (props = {}, ...children) =>
  element("ruby", props, ...children);

export const s = (props = {}, ...children) => element("s", props, ...children);

export const samp = (props = {}, ...children) =>
  element("samp", props, ...children);

export const section = (props = {}, ...children) =>
  element("section", props, ...children);

export const select = (props = {}, ...children) =>
  element("select", props, ...children);

export const small = (props = {}, ...children) =>
  element("small", props, ...children);

export const source = (props = {}, ...children) =>
  element("source", props, ...children);

export const span = (props = {}, ...children) =>
  element("span", props, ...children);

export const strong = (props = {}, ...children) =>
  element("strong", props, ...children);

export const sub = (props = {}, ...children) =>
  element("sub", props, ...children);

export const summary = (props = {}, ...children) =>
  element("summary", props, ...children);

export const sup = (props = {}, ...children) =>
  element("sup", props, ...children);

export const svg = (props = {}, ...children) =>
  element("svg", props, ...children);

export const table = (props = {}, ...children) =>
  element("table", props, ...children);

export const tbody = (props = {}, ...children) =>
  element("tbody", props, ...children);

export const td = (props = {}, ...children) =>
  element("td", props, ...children);

export const textarea = (props = {}, ...children) =>
  element("textarea", props, ...children);

export const tfoot = (props = {}, ...children) =>
  element("tfoot", props, ...children);

export const th = (props = {}, ...children) =>
  element("th", props, ...children);

export const thead = (props = {}, ...children) =>
  element("thead", props, ...children);

export const time = (props = {}, ...children) =>
  element("time", props, ...children);

export const tr = (props = {}, ...children) =>
  element("tr", props, ...children);

export const track = (props = {}, ...children) =>
  element("track", props, ...children);

export const u = (props = {}, ...children) => element("u", props, ...children);

export const ul = (props = {}, ...children) =>
  element("ul", props, ...children);

export const video = (props = {}, ...children) =>
  element("video", props, ...children);

export const wbr = (props = {}, ...children) =>
  element("wbr", props, ...children);
