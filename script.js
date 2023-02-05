const flipBtn = document.getElementById("flipBtn");
const resultDiv = document.getElementById("result");
const connectBtn = document.getElementById("connectBtn");

flipBtn.addEventListener("click", () => {
  const flipResult = Math.floor(Math.random() * 2) + 1;
  resultDiv.innerHTML = flipResult === 1 ? "Heads" : "Tails";
});

connectBtn.addEventListener("click", async () => {
  try {
    const connection = await Solana.connect();
    console.log("Connected to Solana wallet:", connection);
  } catch (error) {
    console.error("Error connecting to Solana wallet:", error);
  }
});
