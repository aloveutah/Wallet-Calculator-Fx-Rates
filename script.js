document.getElementById("calculateBtn").addEventListener("click", function() {
    console.log("Button clicked"); // Log to check if the button is working

    // Get input values with updated IDs
    const fx_rate = parseFloat(document.getElementById('fx_rate').value);
    const rsu_wallet_amount = parseFloat(document.getElementById('rsu_wallet_amount').value); // Updated ID
    const rsu_premium = parseFloat(document.getElementById('rsu_premium').value); // Updated ID
    const grant_price = parseFloat(document.getElementById('grant_price').value);

    // Check for valid input values
    if (isNaN(fx_rate) || isNaN(rsu_wallet_amount) || isNaN(rsu_premium) || isNaN(grant_price) || grant_price === 0) {
        console.error("Invalid input values.");
        alert("Please enter valid numeric input values!"); // Optional user alert
        return; // Exit the function on invalid inputs
    }

    // Step 1: Calculate the total amount in USD
    const total_usd = (rsu_wallet_amount + rsu_premium) * fx_rate;           

    // Step 2: Calculate wallet amount per quarter based on total USD
    const wallet_per_quarter = total_usd / 4;

    // Step 3: Calculate wallet amount per quarter divided by grant price
    const wallet_div_grant = wallet_per_quarter / grant_price; // This will give you the value based on wallet amount per quarter

    // Step 4: Calculate share quantity based on wallet amount per quarter (rounding up)
    const shares_quantity = Math.ceil(wallet_div_grant); // Round up to get a whole number

    // Update the results in the HTML
    document.getElementById('total_usd').innerText = 'Total USD: ' + total_usd.toFixed(2);
    document.getElementById('wallet_per_quarter').innerText = 'Wallet Amount per Quarter: ' + wallet_per_quarter.toFixed(4);
    document.getElementById('wallet_div_grant').innerText = 'Wallet Amount per Quarter / Grant Price: ' + wallet_div_grant.toFixed(4);
    document.getElementById('shares_quantity').innerText = 'Share Quantity (Round Up): ' + shares_quantity; 
    document.getElementById('result').style.display = 'block'; // Display the result section
});

