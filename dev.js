const dev = {
    name: "Henry",
    age: 28,
    technologies: [
        { name: "Javascript", expertise: "Web/Mobile" },
        { name: "Python", expertise: 'Data Science'}
    ]
}



console.log(`The user ${dev.name} is ${dev.age} years old and he uses the technology ${dev.technologies[1].name} with expertise in ${dev.technologies[1].expertise}`)