function injectLeetCodeArrowFix() {
  if (document.getElementById("leetcode-arrow-fix-style")) return;

  const style = document.createElement("style");
  style.id = "leetcode-arrow-fix-style";

  style.textContent = `
    #result_tabbar_outer button.fold svg.fa-chevron-up,
    #result_tabbar_outer button.fold svg.fa-chevron-down,
    #testcase_tabbar_outer button.fold svg.fa-chevron-up,
    #testcase_tabbar_outer button.fold svg.fa-chevron-down,
    #ai-agent_tabbar_outer button.fold svg.fa-chevron-left,
    #ai-agent_tabbar_outer button.fold svg.fa-chevron-right {
      transform: translate(-50%, -50%) rotate(180deg) !important;
      transform-origin: center !important;
    }
  `;

  document.head.appendChild(style);
}

injectLeetCodeArrowFix();