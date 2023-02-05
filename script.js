const solanaWeb3 = require("solana-web3");

const connectButton = document.getElementById("connect-button");
connectButton.addEventListener("click", function() {
  solanaWeb3.connect("testnet")
    .then(() => {
      console.log("Connected to Phantom wallet!");
    })
    .catch(error => {
      console.error("Error connecting to Phantom wallet: ", error);
    });
});

const flipButton = document.getElementById("flip-button");
const resultDiv = document.getElementById("result");
flipButton.addEventListener("click", function() {
  const result = Math.floor(Math.random() * 2) + 1;
  resultDiv.innerHTML = result === 1 ? "Heads" : "Tails";
});
