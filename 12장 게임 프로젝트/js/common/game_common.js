var GAME = GAME || {};

GAME.createNameSpace = function (nsValue) {
  let parts = nsValue.split("."),
    parent = GAME,
    i;

  if (parts[0] === "GAME") {
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
