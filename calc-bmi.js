const people = [
    {
       name: "Joe",
       gender: "male",
       weight: 63,
       height: 1.77
    },

    {
        name: "Liza",
        gender: "female",
        weight: 55,
        height: 1.68
    },

    {
        name: "Jullie",
        gender: "female",
        weight: 70,
        height: 1.57
    },

    {
        name: "Louis",
        gender: "male",
        weight: 90,
        height: 1.80
     }

]


function getIMC(name, gender) {
    let bmi
    for(let person of people ) {
        if(name == person.name && person.gender === "male") {
            bmi = person.weight / (person.height * person.height)
            if ( bmi >= 26 ) {
                console.log(`${name} your BMI is ${bmi} and you are overweight.`)
            } else {
                console.log(`${name} your BMI is ${bmi} and you are at normal weight `)
            }
        } else if (name == person.name && person.gender === "female") {
            bmi = person.weight / (person.height * person.height)
            if ( bmi >= 28 ) {
                console.log(`${name} your BMI is ${bmi} and you are overweight.`)
            } else {
                console.log(`${name} your BMI is ${bmi} and you are at normal weight `)
            }
        }
    }

}

getIMC("Joe", "male")
getIMC("Louis", "male")
getIMC("Liza", "female")
getIMC("Jullie", "female")