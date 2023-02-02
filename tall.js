function maxInArray(numbers) {
    let largest = numbers [0];
    for (let i = 0; i < numbers.length; i++) {
        
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const height = [454, 645, 545, 54, 45, 343,343,754];
const tallest = maxInArray(height);
console.log(tallest);
