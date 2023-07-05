const filterDataByPattern = require('../src/utils/filterDataByPattern.js');

describe('filterDataByPattern tests', () => {
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

    it('should return only countries, people, and animals that include the pattern', () => {
        const result = filterDataByPattern(data, 'ry');
        const expected = [
            {
                name: 'Uzuzozne',
                people: [
                    {
                        name: 'Lillie Abbott',
                        animals: [{ name: 'John Dory' }],
                    },
                    {
                        name: 'John Doe',
                        animals: [{ name: 'Oryx' }],
                    },
                ],
            },
        ];
        expect(result).toEqual(expected);
    });

    it('should return an empty array when no animal names include the pattern', () => {
        const result = filterDataByPattern(data, 'zzz');
        expect(result).toEqual([]);
    });

    it('should handle pattern being an empty string, returning original data', () => {
        const result = filterDataByPattern(data, '');
        expect(result).toEqual(data);
    });
});
