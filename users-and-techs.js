
const users = [
    {
        name: 'Robert',
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


for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].name} works with ${users[i].technologies.join(', ')}`)
}

function checkIfUserUsesCSS(user) {
    for (let tech of user.technologies) {
        const userOfCSS = tech === "CSS"
        if (userOfCSS) {
            return true;
        }
    }
    return false;
}



function printUserOfCSS() {
    for (let i = 0; i < users.length; i++) {
        const userWorksWithCSS = checkIfUserUsesCSS(users[i])
        if (userWorksWithCSS) {
            console.log(`The user ${users[i].name} works with CSS`)
        }
    }
}


console.log("css users below")
printUserOfCSS()
