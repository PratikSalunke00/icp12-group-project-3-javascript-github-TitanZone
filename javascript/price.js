const features = {
      "Silver": [
        "✔ Daily Coins(100 coins/day)",
        "✔ Limited Game Library Access",
        "✔ 24/7 Full Support",
        "✔ Ads Supported",
        "❌ No Diamonds",
        "❌ No Premium Games ",
        "❌ No Multiplayer Tournament ",

        
      ],
      "Gold": [
        "✔ Daily Coins(300 coins/day)",
        "✔ Daily Diamonds(10/day)",
        "✔ Access Premium Games",
        "✔ Multiplayer Tournament Access",
        "✔ NO Ads",
        "❌ No Early  Access"
      ],
      "Diamond": [
        "✔ Special Discount On Future Purchase",
        "✔ Daily Coins(500 coins/day)",
        "✔ Daily Diamond(50/day)",
        "✔ All Premium Games + Early Access to New Games",
        "✔ Monthly Free GIfT packs",
      ]
    };

   
    


function openModal(plan) {
  // Show checkout modal
  document.getElementById("checkoutModal").style.display = "flex";

  // Fill plan details
  document.getElementById("planName").innerText = `${plan} Plan`;
  document.getElementById("planFeatures").innerHTML =
    `<ul>${features[plan].map(f => `<li>${f}</li>`).join("")}</ul>`;
}

function proceedPayment() {
  // Close checkout modal
  closeModal("checkoutModal");

  // Open payment modal
  document.getElementById("paymentModal").style.display = "flex";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function payNow(method) {
  alert("You selected: " + method + ". Redirecting to payment gateway...");
}


