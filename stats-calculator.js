const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);
  if (sorted.length % 2 === 0) {
    const firstMiddleNumber = sorted[sorted.length / 2];
    const secondMiddleNumber = sorted[sorted.length / 2 - 1];
    return getMean([firstMiddleNumber, secondMiddleNumber]);
  }
  if (sorted.length % 2 === 1) {
    const middleNumber = sorted[Math.floor(sorted.length / 2)];
    return middleNumber;
  }
};

const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    if (counts[el]) {
      counts[el] += 1;
    } else {
      counts[el] = 1;
    }
  });
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  const highest = Object.keys(counts).sort((a, b) => {
    return counts[b] - counts[a];
  })[0];
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );
  return mode.join(", ");
};

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));

  const mean = getMean(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
};
