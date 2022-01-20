var hardSkills = ["Java", "JavaScript","C#","C","PHP","HTML","CSS"]

hardSkills.forEach((value)=>{
    let skill = document.createElement("div")
    skill.style.height = "max-content"
    skill.style.marginBottom = 5
    skill.innerHTML = value
    document.querySelector(".hard-skills").appendChild(skill)
})

var softSkills = ["Esprit d'équipe","Rigueur", "Ponctualité", "Capacité d'analyse et de synthèse"]

softSkills.forEach((value)=>{
    let skill = document.createElement("div")
    skill.style.height = "max-content"
    skill.style.marginBottom = 5
    skill.innerHTML = value
    document.querySelector(".soft-skills").appendChild(skill)
})