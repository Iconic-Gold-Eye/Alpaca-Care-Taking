document.querySelectorAll("button[data-target]").forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    document.querySelectorAll(".info").forEach(div => div.classList.add("hidden"));
    const targetDiv = document.getElementById(targetId);
    if (targetDiv) {
      targetDiv.classList.remove("hidden");
    }
  });
});
