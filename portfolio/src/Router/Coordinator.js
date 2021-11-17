export const goToIntroduction = (history) => {
    history.push("/")
}

export const goToGalery = (history) => {
    history.push("/galeria")
}

export const goToPersonal = (history) => {
    history.push("/pessoal")
}

export const goToContact = (history) => {
    history.push("/contato")
}

export const goToProject = (history, projectId) => {
    history.push(`/projeto/${projectId}`)
}