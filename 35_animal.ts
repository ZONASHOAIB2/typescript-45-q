/*
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

*/

const animals:string[]=["cat" , "dog" , "goat"];

console.log("list of animals:");
for (const animal of animals){
    console.log(animal);
}
console.log(`\nstatement of each animal.`);
for (const animal of animals){
    if(animal==="dog"){
        console.log(`A ${animal} would make a great pet.`)
    }else if (animal==="cat"){
        console.log(`A ${animal} is a great pet.`)
    }else if(animal==="goat"){
        console.log(`A ${animal} is an adorable pet that give us milk.`)
    }
}
console.log("\nwhat these animal have in common?")
    console.log("these animals would make a great pet.");