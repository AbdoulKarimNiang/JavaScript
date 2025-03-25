// # Object Challenge

// ### Step 1

// Create an array of objects called `library`. Add 3 objects with a property of `title`, `author`, `status`. Title and author should be strings (whatever value you want) and status should be another object with the properties of `own`, `reading` and `read`. Which should all be boolean values. For all status, set `own` to `true` and `reading` and `read` to false.

let libary = []



Free = {
    title: 'Nothing' ,
    author: 'Nobody',
    status: {
        own: true,
        reading: false,
        read: false
    }

}

Palestine = {
    title: 'Samsung',
    author: 'Abdoul Karim',
    status: {
        own: false,
        reading: false,
        read: true
    }

}


River = {
    title: 'Nokia',
    author: 'Abdour' ,
    status: {
        own: false,
        reading:true ,
        read: false
    }

}

libary.push(Free, Palestine, River)

console.log(libary)


// ### Step 2

// You finished reading all of the books. Set the `read` value for all of them to `true`. Do not edit the initial object. Set the values using dot notation.

library[0].Free.status.read = true
library[0].Palestine.status.read = true
library[0].River.status.read = true

console.log(Free)

console.log(Free)

console.log(Free)

// ### Step 3

// Destructure the title from the first book and rename the variable to `firstBook`

const {title: firstBook} = Free  

console.log(title)


// ### Step 4

// Turn the library object into a JSON string. There is a specific function that we looked at in the last section that we can use to do this.

const libraryString =  JSON.stringify(libary)

console.log(libraryString)