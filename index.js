function returnFirstTwoDrivers(array) {
    return array.slice(0, 2)
}

function returnLastTwoDrivers(array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return fare => integer * fare
}

function fareDoubler(fare) {
    const x2 = createFareMultiplier(2)
    return x2(fare)
}

function fareTripler(fare) {
    const x3 = createFareMultiplier(3)
    return x3(fare)
}

function selectDifferentDrivers(drivers, funk) {
    return funk(drivers)
}