var PAINTER = PAINTER || {};

PAINTER.createNameSpace = function (nsValue) {
  let parts = nsValue.split("."),
    parent = PAINTER,
    i;

  if (parts[0] === "PAINTER") {
    parts = parts.slice(1);
  }

  for (let index = 0; index < parts.length; index++) {
    if (parent[parts[index]] === undefined) {
      parent[parts[index]] = {};
    }

    parent = parent[parts[index]];
  }

  return parent;
};
