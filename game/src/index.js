function IsVictory(cells) {
  return false;
}

const Settlers = {
  name: "settlers",

  setup: () => ({
    cells: Array(9).fill(null)
  }),

  moves: {
    clickCell(G, ctx, id) {
      if (G.cells[id] === null) {
        G.cells[id] = ctx.currentPlayer;
      }
    }
  },

  turn: { moveLimit: 1 },

  endIf: (G, ctx) => {
    if (IsVictory(G.cells)) {
      return { winner: ctx.currentPlayer };
    }
    if (G.cells.filter(c => c === null).length == 0) {
      return { draw: true };
    }
  }
};

module.exports = Settlers;
