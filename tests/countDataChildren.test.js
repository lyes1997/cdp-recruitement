const countDataChildren = require('../src/utils/countDataChildren.js');

describe('countDataChildren tests', () => {
    const data = [
        {
            name: 'Uzuzozne',
            people: [
                {
                    name: 'Lillie Abbott',
                    animals: [{ name: 'John Dory' }, { name: 'Elephant' }],
                },
                {
                    name: 'John Doe',
                    animals: [{ name: 'Dog' }, { name: 'Oryx' }],
                },
            ],
        },
    ];

    it('should append count of children to names', () => {
        const result = countDataChildren(data);
        const expected = [
            {
                name: 'Uzuzozne [2]',
                people: [
                    {
                        name: 'Lillie Abbott [2]',
                        animals: [{ name: 'John Dory' }, { name: 'Elephant' }],
                    },
                    {
                        name: 'John Doe [2]',
                        animals: [{ name: 'Dog' }, { name: 'Oryx' }],
                    },
                ],
            },
        ];
        expect(result).toEqual(expected);
    });

    it('should handle empty arrays correctly', () => {
        const result = countDataChildren([]);
        expect(result).toEqual([]);
    });

    it('should handle countries with no people', () => {
        const noPeopleData = [{ name: 'EmptyCountry', people: [] }];
        const result = countDataChildren(noPeopleData);
        const expected = [{ name: 'EmptyCountry [0]', people: [] }];
        expect(result).toEqual(expected);
    });

    it('should handle people with no animals', () => {
        const noAnimalsData = [
            {
                name: 'Country',
                people: [{ name: 'Person', animals: [] }],
            },
        ];
        const result = countDataChildren(noAnimalsData);
        const expected = [
            {
                name: 'Country [1]',
                people: [{ name: 'Person [0]', animals: [] }],
            },
        ];
        expect(result).toEqual(expected);
    });
});
