<script src="https://cdn.solana.com/solana-web3.js"></script>

const flipBtn = document.getElementById("flipBtn");
const connectBtn = document.getElementById("connectBtn");

flipBtn.addEventListener("click", function() {
  const result = Math.floor(Math.random() * 2) + 1;
  const resultText = result === 1 ? "Heads" : "Tails";
  const resultDisplay = document.createElement("div");
  resultDisplay.innerHTML = resultText;
  resultDisplay.style.color = "white";
  resultDisplay.style.textAlign = "center";
  resultDisplay.style.marginTop = "20px";
  document.body.appendChild(resultDisplay);
});

connectBtn.addEventListener("click", function() {
  Solana.connect().then(() => {
    console.log("Connected to Solana wallet!");
  });
});
