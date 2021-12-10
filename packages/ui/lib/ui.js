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

export const article = (props = {}, ...children) =>
  element("article", props, ...children);

export const aside = (props = {}, ...children) =>
  element("aside", props, ...children);

export const b = (props = {}, ...children) => element("b", props, ...children);

export const bdi = (props = {}, ...children) =>
  element("bdi", props, ...children);

export const bdo = (props = {}, ...children) =>
  element("bdo", props, ...children);

export const blockquote = (props = {}, ...children) =>
  element("blockquote", props, ...children);

export const br = (props = {}, ...children) =>
  element("br", props, ...children);

export const cite = (props = {}, ...children) =>
  element("cite", props, ...children);

export const code = (props = {}, ...children) =>
  element("code", props, ...children);

export const data = (props = {}, ...children) =>
  element("data", props, ...children);

export const dd = (props = {}, ...children) =>
  element("dd", props, ...children);

export const dfn = (props = {}, ...children) =>
  element("dfn", props, ...children);

export const div = (props = {}, ...children) =>
  element("div", props, ...children);

export const dl = (props = {}, ...children) =>
  element("dl", props, ...children);

export const dt = (props = {}, ...children) =>
  element("dt", props, ...children);

export const em = (props = {}, ...children) =>
  element("em", props, ...children);

export const figcaption = (props = {}, ...children) =>
  element("figcaption", props, ...children);

export const figure = (props = {}, ...children) =>
  element("figure", props, ...children);

export const footer = (props = {}, ...children) =>
  element("footer", props, ...children);

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

export const kbd = (props = {}, ...children) =>
  element("kbd", props, ...children);

export const li = (props = {}, ...children) =>
  element("li", props, ...children);

export const main = (props = {}, ...children) =>
  element("main", props, ...children);

export const mark = (props = {}, ...children) =>
  element("mark", props, ...children);

export const nav = (props = {}, ...children) =>
  element("nav", props, ...children);

export const ol = (props = {}, ...children) =>
  element("ol", props, ...children);

export const p = (props = {}, ...children) => element("p", props, ...children);

export const pre = (props = {}, ...children) =>
  element("pre", props, ...children);

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

export const small = (props = {}, ...children) =>
  element("small", props, ...children);

export const span = (props = {}, ...children) =>
  element("span", props, ...children);

export const strong = (props = {}, ...children) =>
  element("strong", props, ...children);

export const sub = (props = {}, ...children) =>
  element("sub", props, ...children);

export const sup = (props = {}, ...children) =>
  element("sup", props, ...children);

export const time = (props = {}, ...children) =>
  element("time", props, ...children);

export const u = (props = {}, ...children) => element("u", props, ...children);

export const ul = (props = {}, ...children) =>
  element("ul", props, ...children);

export const wbr = (props = {}, ...children) =>
  element("wbr", props, ...children);
