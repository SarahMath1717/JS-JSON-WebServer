// build a function based on cats.test.js

const fetchCatAtIndex = async (index) => {
    try {
        if (typeof(index) !== "number") {
            throw new Error("Index must be a number")
        }
        
        const response = await fetch("http://localhost:3000/cats");
        const data = await response.json();
        const cat = data.catsArray[index];

        if (cat === undefined) {
            throw new Error("No cat was found at that index")
        }

        return cat;
        } catch (error) {
            throw error;
    }
}

module.exports = fetchCatAtIndex;