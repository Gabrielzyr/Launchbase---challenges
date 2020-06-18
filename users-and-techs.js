const users = [
    {
        name: "Robert",
        technologies: ["Javascript", "CSS"]
    },
    
    {
        name: "Jasmine",
        technologies: ["PHP", "SQL"]
    },
    
    {
        name: "Kelly",
        technologies: ["Java", "SQL"]
    },

    {
        name: "Erik",
        technologies: ["Html", "CSS"]
    }

]


function printUsersInformation(){
    for (let i = 0; i < users.length; i++) {
        console.log(`${users[i].name} works with ${users[i].technologies}`)
    }
}


function checkIfUserUsesCSS() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].technologies == "CSS") return true
    }
    
} 

function printUserOfCSS(){
    for(let i = 0; i < users.length; i++) {
        const userWorksWithCSS = checkIfUserUsesCSS(users[i])
        if (userWorksWithCSS) {
            console.log(`The user ${users[i].name} works with CSS`)
        }
    }
}

printUsersInformation()
console.log("css users below")
checkIfUserUsesCSS()
printUserOfCSS()
console.log("problem")


