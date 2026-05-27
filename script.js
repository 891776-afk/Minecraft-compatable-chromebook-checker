let chromebooks = [];

fetch("chromebooks.json")
  .then(response => response.json())
  .then(data => {
    chromebooks = data;
  });

function checkModel() {
  const input = document.getElementById("search").value.toLowerCase();

  const found = chromebooks.find(c =>
    c.model.toLowerCase().includes(input)
  );

  const result = document.getElementById("result");

  if (found) {
    result.innerHTML = `
      <h2>${found.model}</h2>

      <p>Room: ${found.room}</p>

      <p>RAM: ${found.ram}</p>

      <p>Storage: ${found.storage}</p>

      <p>Performance: ${found.performance}</p>

      <p>Compatibility Score: ${found.score}%</p>

      <p>
        Play Store:
        ${found.playStore ? "Supported" : "Not Supported"}
      </p>

      <p>
        Minecraft Education:
        ${found.minecraftEducation ? "✅ Works" : "❌ Doesn't Work"}
      </p>
    `;
  } else {
    result.innerHTML = "❌ Chromebook not found";
  }
}
