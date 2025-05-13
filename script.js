async function translate() {
  const input = document.getElementById("codeInput").value;
  const outputArea = document.getElementById("outputArea");

  const dictRes = await fetch("dictionary.json");
  const dict = await dictRes.json();

  let output = input;
  for (const [code, meaning] of Object.entries(dict)) {
    const regex = new RegExp(`\\b${code}\\b`, "g");
    output = output.replace(regex, meaning);
  }

  outputArea.textContent = output;
}
