
async function translate() {
  const input = document.getElementById("codeInput").value;
  const outputArea = document.getElementById("outputArea");

  const dictRes = await fetch("dictionary.json");
  const dict = await dictRes.json();

  const words = input.match(/\b\w+\b/g) || [];
  let translation = words.map(word => dict[word] || word).join(" ");
  outputArea.textContent = translation;
}
