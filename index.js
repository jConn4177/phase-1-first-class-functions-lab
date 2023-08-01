const returnFirstTwoDrivers = function (names) {
  let firstTwoDivers = names.slice(0, 2);
  return firstTwoDivers;
};

const returnLastTwoDrivers = function (names) {
  let lastTwoDivers = names.slice(names.length - 2, names.length);
  return lastTwoDivers;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  let multiplier = int;
  return function (fare) {
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, driverSelect) {
  return driverSelect(arrayOfDrivers);
}
