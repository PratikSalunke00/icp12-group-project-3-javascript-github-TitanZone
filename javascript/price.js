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
      document.getElementById("checkoutModal").style.display = "flex";
      document.getElementById("planName").innerText = plan + " Plan Features";
      document.getElementById("planFeatures").innerHTML = features[plan].map(f => "• " + f).join("<br>");
    }

    function closeModal() {
      document.getElementById("checkoutModal").style.display = "none";
    }

    function proceedPayment() {
      alert("Redirecting to payment gateway...");
      // Here you can integrate Stripe, PayPal, Razorpay, etc.
    }
    