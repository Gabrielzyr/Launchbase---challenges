const user = {
    name: "Diego",
    company: {
        name: "Rocketseat",
        color: "purple",
        focus: "programming",
        address: {
            street: "Rua Guilherme Gembala",
            number: 260
        }
    }
    
}

const compAddress = user.company.address.street +", "+user.company.address.number

console.log(`The company ${user.company.name} is located at ${compAddress}.`)


