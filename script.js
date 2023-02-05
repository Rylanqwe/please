const connectButton = document.getElementById("connect");
const flipButton = document.getElementById("flip");
const resultDiv = document.getElementById("result");

connectButton.addEventListener("click", async () => {
  try {
    // Connect to Phantom wallet
    const connection = await solana.connect();

    // Check if connection was successful
    if (connection) {
      resultDiv.innerHTML = "Successfully connected to Phantom wallet";
    } else {
      resultDiv.innerHTML = "Failed to connect to Phantom wallet";
    }
  } catch (error) {
    resultDiv.innerHTML = "An error occurred while connecting to Phantom wallet";
    console.error(error);
  }
});

flipButton.addEventListener("click", () => {
  const result = Math.floor(Math.random() * 2) + 1;
  resultDiv.innerHTML = result === 1 ? "Heads" : "Tails";
});
