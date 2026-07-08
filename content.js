function injectLeetCodeArrowFix() {
  if (document.getElementById("leetcode-arrow-fix-style")) return;

  const style = document.createElement("style");
  style.id = "leetcode-arrow-fix-style";

  style.textContent = `
    button.fold svg.fa-chevron-up,
    button.fold svg.fa-chevron-down {
      transform: translate(-50%, -50%) rotate(180deg) !important;
      transform-origin: center !important;
    }
  `;

  document.head.appendChild(style);
}

injectLeetCodeArrowFix();