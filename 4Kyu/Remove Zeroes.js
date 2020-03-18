function removeZeros(array) {
    return [
      ...array[`filter`](x => x !== 0 && x !== "0"),
      ...array[`filter`](x => x === 0 || x === "0")
    ];
  }