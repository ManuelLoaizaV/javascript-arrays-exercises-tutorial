let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
];

function getParkingLotState(grid) {
  const n = grid.length;
  const m = grid[0].length;

  const state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        state.occupiedSlots++;
      } else if (grid[i][j] === 2) {
        state.availableSlots++;
      }
    }
  }

  state.totalSlots = state.availableSlots + state.occupiedSlots;

  return state;
}


console.log(getParkingLotState(parkingState));
