const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "1234567890"
function randomText(){
    const ALPHABETS_NUMS = ALPHABETS + ALPHABETS.toLowerCase() + NUMBERS
    let RANDOM_TEXT = "KEY"
    for(let i=0; i<50; i++){
        const index = Math.floor(Math.random() * ALPHABETS_NUMS.length)
        RANDOM_TEXT += ALPHABETS_NUMS[index]
    }
    return RANDOM_TEXT
}
export {randomText}