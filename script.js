document.getElementById("calculateBtn").addEventListener("click", function() {
    console.log("Button clicked"); // Debugging line to check if the button is working

    // Get input values (IDs should match what is in your HTML)
    const fx_rate = parseFloat(document.getElementById('fx_rate').value);
    const rsu_wallet_amount = parseFloat(document.getElementById('wallet_amount').value); // RSU Wallet Amount
    const rsu_premium = parseFloat(document.getElementById('premiums').value); // RSU Premium
    const grant_price = parseFloat(document.getElementById('grant_price').value);

    // Check for valid input values
    if (isNaN(fx_rate) || isNaN(rsu_wallet_amount) || isNaN(rsu_premium) || isNaN(grant_price) || grant_price === 0) {
        console.error("Invalid input values."); // Log if there’s an error with inputs
        alert("Please enter valid input values."); // Optional user alert
        return; // Exit the function on invalid inputs
    }

    // Step 1: Calculate the total amount in USD
    const total_usd = (rsu_wallet_amount + rsu_premium) * fx_rate;           

    // Step 2: Calculate wallet amount per quarter based on total USD
    const wallet_per_quarter = total_usd / 4;

    // Step 3: Calculate wallet amount per quarter divided by grant price
    const wallet_div_grant = wallet_per_quarter / grant_price; // This gives the total shares you can buy based on wallet per quarter

    // Step 4: Calculate share quantity based on wallet amount per quarter divided by grant price (rounding up)
    const shares_quantity = Math.ceil(wallet_div_grant); // Round up to get a whole number

    // Update the results in the HTML
    document.getElementById('total_usd').innerText = 'Total USD: ' + total_usd.toFixed(2);
    document.getElementById('wallet_per_quarter').innerText = 'Wallet Amount per Quarter: ' + wallet_per_quarter.toFixed(4);
    document.getElementById('wallet_div_grant').innerText = 'Wallet Amount per Quarter / Grant Price: ' + wallet_div_grant.toFixed(4);
    document.getElementById('shares_quantity').innerText = 'Share Quantity (Round Up): ' + shares_quantity; 
    document.getElementById('result').style.display = 'block'; // Make results visible
});
