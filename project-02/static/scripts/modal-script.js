const modal = document.getElementById("credential-modal");
const closeBtn = document.getElementById("close-modal");
const iframe = document.getElementById("credential-iframe");
const modalTitle = document.getElementById("modal-title");

document.querySelectorAll(".cert-link").forEach((link) => {
  if (link.getAttribute("data-credential-url")) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const url = link.getAttribute("data-credential-url");
      const certName = link.closest(".cert-card").querySelector("h3").innerText;

      modalTitle.innerText = certName;
      iframe.src = url;
      modal.style.display = "flex";
    });
  }
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  iframe.src = "";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    iframe.src = "";
  }
});
