let collectAnagrams = (words) => {
    let anagrams = {}
    let collectedAnagrams = []

    // iterate through words 
    for (let word of words) {
        // use the anagrams hash to find & store arrays of anagrams

        // alphabetize letters
        let letters = word.split('').sort().join('')

        // create hash key-value pair for alphabetized letters of word if it does not exist
        anagrams[letters] = anagrams[letters] || []

        // add word to value of the key which matches its letters
        anagrams[letters].push(word)
    }

    //push those arrays into the collectedAnagrams array

    // iterate through anagrams hash keys
    for (let key in anagrams) {
        // add their values as subarrays of the collectedAnagrams array
        collectedAnagrams.push(anagrams[key])
    }

    // return the array of arrays
    return collectedAnagrams
}
let words = ['bag', 'gab', 'foo', 'abg', 'oof', 'bum', 'cat', 'dog', 'tac', 'god', 'act', 'cars', 'repaid', 'dues', 'nose', 'signed', 'lane', 'paired', 'arcs', 'grab', 'used', 'ones', 'brag', 'sued', 'lean', 'scar', 'design']
console.log(collectAnagrams(words))