//contribution in years
const people = [
    {
        name: "James",
        gender: "M",
        age: 60,
        contribution: 36
    },

    {
        name: "Alice",
        gender: "F",
        age: 55,
        contribution: 30
    },

    {
        name: "Henry",
        gender: "M",
        age: 65,
        contribution: 18
    },
    
    {
        name: "Monica",
        gender: "F",
        age: 58,
        contribution: 19
    }
    
]


function retirementEvaluate(name, gender) {
    let contributionCalc = 0

    for (let person of people) {
        if( name == person.name && gender == person.gender) {
            contributionCalc = person.age + person.contribution
            if(gender == "M" && person.contribution >= 35 && contributionCalc >= 95) {
                console.log(`${name}, you can retire. ${contributionCalc}`)
            } else if ( gender == "F" && person.contribution >= 30 && contributionCalc >= 85) {
                console.log(`${name}, you can retire. ${contributionCalc}`)
            } else {
                console.log(`${name}, you can't retire yet. ${contributionCalc}`)
            }
        }
    }
}


retirementEvaluate("Alice", "F")
retirementEvaluate("James", "M")
retirementEvaluate("Henry", "M")
retirementEvaluate("Monica", "F")
