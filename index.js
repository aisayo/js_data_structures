// Arrays

let friends = [];
let friends = new Array();
let friends = ["Ross", "Monica", "Joey"];

// Accessing Elements

let ross = friends[0];
let joey = friends[friends.length - 1];

// Manipulate arrays

// adding to an array
friends.push("Rachel"); // will add rachel to the end of the array
friends.unshift("Phoebe"); // will add Pheobe to beginning of the array

// removing elements from an array

friends.pop(); // removes last element and returns that element
friends.shift(); // removes first element and returns that element
friends.slice(2); // returns the element at the index provided in a new array
friends.slice(0, 2); // returns the elements starting at 0 and stops at 2
friends.splice(1, 2); // starting at index 1 return 2 elements
friends.splice(2, 1, "Rachel", "Phoebe"); // we can also add elements where the one is removed

// looping over arrays

// for loop
function characterNames(friends) {
  for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
  }
}

//do while loop
function characterNames(arr) {
  let i = 0;
  do {
    console.log(arr[i]);
    i++;
  } while (i < arr.length);
}

// while loop
function episodeCountDown(i) {
  while (i < 10) {
    console.log(`you have ${10 - i} episodes left`);
    i++;
  }
  console.log("You are done with this season!");
}

// for...of loop
function characterNames(friends) {
  for (const friend of friends) {
    console.log(friend);
  }
}

// array methods

//.forEach()
function characterNames(friends) {
    friends.forEach((friend) => {
        console.log(friend);
    });
}

// .map()
function modifyCharNames(friends) {
    return friends.map((friend) => {
        return console.log(friend)
    });
}

// .filter()
let friends = ["Rachel", "Ross", "Monica", "Joey"]

function filterCharacters(friends, letter){
    return friends.filter((friend) => {
        return friend.toLowerCase().startsWith(letter)
    })
}

filterCharacters(friends, "r")


// .find()
function findCharacter(character){
    return friends.find((friend) => {
        return friend === character
    })
}

// .findIndex()
function findCharacterIndex(character){
    return friends.findIndex((friend) => {
        return friend === character
    })
}

// .reduce()



// .some()