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

const makeVector = (list) => {
  list.unshift(Symbol.for("vector"));
  return list;
};

const makeMap = (list) => {
  list.unshift(Symbol.for("map"));
  return list;
};

const readAtom = (reader) => {};

const readList = (reader, start = "(", end = ")") => {};

const readForm = (reader) => {};

const raw = (str) => String.raw`${str}`;

export const parse = (input) => readForm(new Reader(tokenize(raw(input))));
