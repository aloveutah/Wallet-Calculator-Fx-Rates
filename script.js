
document.getElementById("calculateBtn").addEventListener("click", function() {
    console.log("Button clicked"); // Debugging: Check if the button click is detected

    const fx_rate = parseFloat(document.getElementById('fx_rate').value);
    const wallet_amount = parseFloat(document.getElementById('wallet_amount').value);
    const premiums = parseFloat(document.getElementById('premiums').value);
    const grant_price = parseFloat(document.getElementById('grant_price').value);

    // Validate inputs
    if (isNaN(fx_rate) || isNaN(wallet_amount) || isNaN(premiums) || isNaN(grant_price) || grant_price === 0) {
        console.error("Invalid input values."); // Log if there’s an error with inputs
        return; // Exit the function on invalid inputs
    }

    // Step 1: Calculate the total amount in USD
    const total_usd = (wallet_amount + premiums) * fx_rate;           

    // Step 2: Calculate wallet amount per quarter based on total USD
    const wallet_per_quarter = total_usd / 4;

    // Step 3: Calculate wallet amount per quarter divided by grant price
    const wallet_div_grant = wallet_per_quarter / grant_price;

    // Step 4: Calculate share quantity (rounding up)
    const shares_quantity = Math.ceil(wallet_div_grant);

    // Update the results in the HTML
    document.getElementById('total_usd').innerText = 'Total USD: ' + total_usd.toFixed(2);
    document.getElementById('wallet_per_quarter').innerText = 'Wallet Amount per Quarter: ' + wallet_per_quarter.toFixed(4);
    document.getElementById('wallet_div_grant').innerText = 'Wallet Amount per Quarter / Grant Price: ' + wallet_div_grant.toFixed(4);
    document.getElementById('shares_quantity').innerText = 'Share Quantity (Round Up): ' + shares_quantity; 
    document.getElementById('result').style.display = 'block';
});
