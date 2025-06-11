document.getElementById("btnHistória").addEventListener("click", function() {
    const storySection = document.querySelector(".intro p");
    storySection.textContent = "Ao longo dos séculos, nossos alimentos sempre foram essenciais para manter a nossa cultura viva. O milho, a mandioca, o feijão e o peixe são mais que alimentos, são histórias contadas a cada refeição. Cada grão de arroz e cada pedaço de peixe trazem com ele um pedacinho da nossa terra.";
    this.textContent = "História revelada! Voltar ao início";
    this.addEventListener("click", function() {
        window.location.reload();  // Volta ao estado inicial do site
    });
});
