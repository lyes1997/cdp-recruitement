function filterDataByPattern(data, pattern) {
    return data
        .map((country) => ({
            ...country,
            people: country.people
                .map((person) => ({
                    ...person,
                    animals: person.animals.filter((animal) =>
                        animal.name.includes(pattern)
                    ),
                }))
                .filter((person) => person.animals.length),
        }))
        .filter((country) => country.people.length);
}

module.exports = filterDataByPattern;
