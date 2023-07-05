function countDataChildren(data) {
    return data.map((country) => ({
        name: `${country.name} [${country.people.length}]`,
        people: country.people.map((person) => ({
            name: `${person.name} [${person.animals.length}]`,
            animals: person.animals,
        })),
    }));
}

module.exports = countDataChildren;
