
document.getElementById("calculateBtn").addEventListener("click", function() {
    const fx_rate = parseFloat(document.getElementById('fx_rate').value);
    const wallet_amount = parseFloat(document.getElementById('wallet_amount').value);
    const premiums = parseFloat(document.getElementById('premiums').value);
    const grant_price = parseFloat(document.getElementById('grant_price').value);

    // Step 1: Calculate the total amount in USD
    const total_usd = (wallet_amount + premiums) * fx_rate;           

    // Step 2: Calculate wallet amount per quarter based on total USD
    const wallet_per_quarter = total_usd / 4;

    // Step 3: Calculate total amount based on wallet_per_quarter divided by grant_price
    const wallet_div_grant = wallet_per_quarter / grant_price; // Total shares you can acquire based on wallet amount per quarter

    // Step 4: Calculate shares quantity by rounding up the total from wallet_per_quarter / grant_price
    const shares_quantity = Math.ceil(wallet_div_grant); // Round up to get a whole number

    // Update the results in the HTML
    document.getElementById('total_usd').innerText = 'Total USD: ' + total_usd.toFixed(2);
    document.getElementById('wallet_per_quarter').innerText = 'Wallet Amount per Quarter: ' + wallet_per_quarter.toFixed(4);
    document.getElementById('wallet_div_grant').innerText = 'Wallet Amount per Quarter / Grant Price: ' + wallet_div_grant.toFixed(4); // Display the result of this calculation
    document.getElementById('shares_quantity').innerText = 'Shares Quantity: ' + shares_quantity; // Display the rounded shares quantity
    document.getElementById('result').style.display = 'block';
});
