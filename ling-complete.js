
async function loadRules() {
  const res = await fetch("rules.json");
  return await res.json();
}

async function completeLingSentence(code) {
  const rules = await loadRules();
  let result = code;

  for (const rule of rules) {
    const regex = new RegExp(rule.pattern, "g");
    result = result.replace(regex, rule.replacement);
  }

  return result;
}

document.getElementById("runBtn").addEventListener("click", async () => {
  const input = document.getElementById("codeInput").value;
  const output = await completeLingSentence(input);
  document.getElementById("outputArea").textContent = output;
});
