const messages = [
    "What is love?", "How do I know if I'm truly in love?", "Can love last forever?",
    "Is love a choice or a feeling?", "How do I stop fearing rejection in love?",
    "Why do we fall for people who don’t love us back?", "How do I know if I’m settling in a relationship?",
    "Can you love more than one person at the same time?",
    "How do I maintain love in a long-term relationship?",
    "What role does self-love play in romantic relationships?"
  ];
  
  const typingText = document.getElementById("typing-text");
  const typingContainer = document.getElementById("typing-container");
  let index = 0;
  const text = "Questions about love...";
  
  function typeEffect() {
    if (index < text.length) {
      typingText.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }
  
  typeEffect();
  
  typingContainer.addEventListener("click", () => {
    typingContainer.style.opacity = 0; // Fade out the text
    setTimeout(() => {
      typingContainer.style.display = "none";
      startFloatingMessages();
    }, 300); // Delay to allow fade-out effect
  });
  
  function createMessage(text) {
    const msg = document.createElement("div");
    msg.classList.add("message");
    msg.textContent = text;
    document.body.appendChild(msg);
  
    msg.style.top = Math.random() * 80 + "vh";
    msg.style.left = Math.random() * 80 + "vw";
    msg.style.animationDuration = (Math.random() * 20 + 20) + "s";
    msg.style.animationDirection = Math.random() > 0.5 ? "alternate" : "alternate-reverse";
    msg.style.display = "block";
  
    msg.addEventListener("click", () => {
      window.location.href = `chat.html?question=${encodeURIComponent(text)}`;
    });
  }
  
  function startFloatingMessages() {
    for (let i = 0; i < 100; i++) {
      setTimeout(() => createMessage(messages[i % messages.length]), i * 200);
    }
  }
  
  // Open and close info modal
const infoBtn = document.getElementById("info-btn");
const modal = document.getElementById("info-modal");
const closeBtn = document.querySelector(".close-btn");

infoBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if user clicks outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
