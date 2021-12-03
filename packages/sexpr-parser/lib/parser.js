class NoTokensException extends Error {
  constructor() {
    super("Reader must have a token stream to read");
  }
}

class Reader {
  constructor(tokens) {
    if (!tokens) {
      throw new NoTokensException();
    }

    this.tokens = tokens;
    this.pos = 0;
  }

  next() {
    return this.tokens[this.pos++];
  }

  peek() {
    return this.tokens[this.pos];
  }
}

const isHexadecimalChar = (ch) => /^[0-9a-fA-F]$/.test(ch);

const tokenize = (str) => {
  const re =
    /[\s,]*(~@|[\[\]{}()'`~^@]|"(?:\\.|[^\\"])*"?|;.*|[^\s\[\]{}('"`,;)]*)/g;
  let match = null;
  let results = [];
  while ((match = re.exec(str)[1]) != "") {
    if (match[0] === ";") {
      continue;
    }
    results.push(match);
  }
  return results;
};

const _keyword = (obj) => (_keyword_Q(obj) ? obj : "\u029e" + obj);
const _keyword_Q = (obj) => typeof obj === "string" && obj[0] === "\u029e";

const makeVector = (list) => {
  list.unshift(Symbol.for("vector"));
  return list;
};

const makeMap = (list) => {
  list.unshift(Symbol.for("map"));
  return list;
};

const readAtom = (reader) => {
  let token = reader.next();
  let i = 0;

  const readWhile = (predicate) => {
    let str = "";
    while (predicate(token[i])) {
      str += token[i++];
    }
    return str;
  };

  const readEscapeSequence = (ch) => {
    let str = "";
    let seq = "";
    if (ch == "n") {
      str += "\n";
    } else if (ch == "b") {
      str += "\b";
    } else if (ch == "f") {
      str += "\f";
    } else if (ch == "r") {
      str += "\r";
    } else if (ch == "t") {
      str += "\t";
    } else if (ch == "v") {
      str += "\v";
    } else if (ch == "0") {
      str += "\0";
    } else if (ch == "'") {
      str += "'";
    } else if (ch == '"') {
      str += '"';
    } else if (ch == "\\") {
      str += "\\";
    } else if (ch == "x") {
      // is hexadecimal escape sequence
      seq = readWhile((ch) => isHexadecimalChar(ch));
      str += String.fromCharCode(parseInt(seq, 16));
    } else if (ch == "u") {
      // is Unicode escape sequence
      seq = readWhile((ch) => isHexadecimalChar(ch));
      str += String.fromCodePoint(parseInt(seq, 16));
    }
    return str;
  };

  const readEscaped = (token) => {
    let escaped = false;
    let str = "";

    while (token[i]) {
      let ch = token[i++];

      if (escaped) {
        str += readEscapeSequence(ch);
        escaped = false;
      } else if (ch == "\\") {
        escaped = true;
      } else {
        str += ch;
      }
    }

    return str;
  };

  if (token.match(/^-?[0-9]+$/)) {
    return parseInt(token, 10);
  }

  if (token.match(/^[+-]?[1-9][0-9]*\.[0-9]*/)) {
    return parseFloat(token);
  }

  if (token.match(/^"(?:\\.|[^\\"])*"$/)) {
    token = token.slice(1, -1);
    return readEscaped(token);
  }

  if (token[0] === '"') {
    throw new Error("expected '\"', got EOF");
  }

  if (token[0] === ":") {
    return _keyword(token.slice(1));
  }

  if (token === "nil") {
    return null;
  }

  if (token === "true") {
    return true;
  }

  if (token === "false") {
    return false;
  }

  return Symbol.for(token);
};

const readList = (reader, start = "(", end = ")") => {
  let ast = [];
  let token = reader.next();

  if (token !== start) {
    throw new Error("Expected " + start);
  }

  token = reader.peek();

  while (token !== end) {
    if (!token) {
      throw new Error("Expected " + end + ", got EOF");
    }

    ast.push(readForm(reader));
    token = reader.peek();
  }

  // skip end token
  reader.next();

  return ast;
};

const readForm = (reader) => {
  const token = reader.peek();

  switch (token) {
    case ")":
      throw new Error("Unexpected )");

    case "(":
      return readList(reader);

    case "]":
      throw new Error("Unexpected ]");

    case "[":
      return makeVector(readList(reader, "[", "]"));

    case "}":
      throw new Error("Unexpected }");

    case "{":
      return makeMap(readList(reader), "{", "}");

    default:
      return readAtom(reader);
  }
};

const raw = (str) => String.raw`${str}`;

export const parse = (input) => readForm(new Reader(tokenize(raw(input))));
