const friends = {
    genre: 'sitcom',
    created_by: ['David Crane', 'Marta Kauffman'],
    opening_theme: '"Ill Be There for You" by The Rembrandts',
    seasons: 10,
    release_date: 'September 22, 1994',
    characters: [
        {
            char_name: 'Rachel Greene',
            actor: 'Jennifer Aniston',
            profession: 'Fashion Assistant Buyer'
        },
        {
            char_name: 'Monica Geller',
            actor: 'Courtney Cox',
            profession: 'Chef'
        },
        {
            char_name: 'Phoebe Buffay',
            actor: 'Lisa Kudrow',
            profession: 'Masseuse'
        },
        {
            char_name: 'Ross Geller',
            actor: 'David Schwimmer',
            profession: 'Paleontologist'
        },
        {
            char_name: 'Joey Tribbiani',
            actor: 'Mat LeBlanc',
            profession: 'Aspiring Actor'
        },
        {
            char_name: 'Chandler Bing',
            actor: 'Matthew Perry',
            profession: 'Statistical Analysis'
        },
    ]
}



// exercise

// 1. Return the shows release date using dot notation
    // friends.release_date
// 2. How many episodes are there in the show? [bracket notation]
    // friends['seasons']
// 3. Return an array of all the object keys
        // Object.keys(friends)
// 4. What was Ross Gellers profession?
        // friends.characters[3].profession
// 5. Which actor played Phoebe Buffay?
    // friends.characters[2].actor
    // friends.characters.find(char => char.char_name === "Phoebe Buffay")
// 6. return an array of all the characters names*** 
    // friends.characters.map(char => char.char_name)



    

