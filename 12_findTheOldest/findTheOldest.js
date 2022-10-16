const findTheOldest = function(array) {
    function getAge (birth, death) {
        if (!death) {
            death = 2022;
        }
        return death - birth;
    }

    return array.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldestAge < currentAge ? current : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
