function escondeSenha(event){
    event.preventDefault()

    const input = document.getElementById("password")
    input.setAttribute("type", "password")

    const form = document.querySelector(".light")
    form.classList.remove("light")
    form.classList.add("dark")
}

