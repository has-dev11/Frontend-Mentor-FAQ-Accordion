const questions = document.querySelectorAll(".question");

questions.forEach((question) => question.addEventListener("click", (e) => {
    const answer = e.currentTarget.parentElement.querySelector(".answer");
    const icon = e.currentTarget.querySelector("img");
    
    if(answer.style.display === "block") {
        answer.style.display = "none";
        icon.src = "/assets/images/icon-plus.svg"
    } else {
        answer.style.display = "block"
        icon.src = "/assets/images/icon-minus.svg"
    }
}))