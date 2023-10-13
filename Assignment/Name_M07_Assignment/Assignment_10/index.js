let numbers = [
    [171, 166, 703, 197, 139],
    [360, 314, 437, 367],
    [310, 280, 970],
    [0, 14, 1400, 424],
    [109, 311, 9, 13, 314, 210, 30]
  ];
  let maxMean = -Infinity;
  let setWithMaxMean;
  for (let i = 0; i < numbers.length; i++) {
    let set = numbers[i];
    let sum = 0;
    for (let j = 0; j < set.length; j++) {
      sum += set[j];
    }
    let mean = sum / set.length;
    if (mean > maxMean) {
      maxMean = mean;
      setWithMaxMean = set;
    }
  }
  console.log("Sets:", numbers);
  console.log("Set with the largest arithmetic mean:", setWithMaxMean);
  console.log("Largest arithmetic mean:", maxMean);