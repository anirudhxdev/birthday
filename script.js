const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

surpriseBtn.addEventListener("click", () => {

    surprise.classList.remove("hidden");

    surpriseBtn.style.display = "none";

    createConfetti();
});


function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}