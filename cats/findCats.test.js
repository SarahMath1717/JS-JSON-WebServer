// const cat = await fetchCatAtInxed(1);
// console.log(cat);
// ---> "Tabby"

// const cat = fetchCatAtIndex("string");
// console.log(cat);
// ---> "Index must be a number"

// const cat = await fetchCatAtIndex(10);
// console.log(cat);
// ---> "No cat was found at that index"


const fetchCatAtIndex = require('./findCats')


describe('fetchCatAtIndex', () => {
    it('returns the correct cat data when a valid index is entered', async () => {
        const catData = await fetchCatAtIndex(1);
        expect(catData).toEqual("Tabby")
    });

    it('rejects and returns error "Index must be a number" when index is string', async () => {
        await expect(fetchCatAtIndex("string")).rejects.toThrow("Index must be a number");
    });

    it('rejects and returns error "No cat was found at that index" when there is no match', async () => {
        await expect(fetchCatAtIndex(7)).rejects.toThrow("No cat was found at that index");
    });
});

