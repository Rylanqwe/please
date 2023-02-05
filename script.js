const connectBtn = document.getElementById("connectBtn");

connectBtn.addEventListener("click", function() {
  Solana.connect().then(() => {
    console.log("Connected to Solana wallet!");
  });
});
