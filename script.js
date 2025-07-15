document.getElementById("calculateBtn").addEventListener("click", function() {
    const fx_rate = parseFloat(document.getElementById('fx_rate').value);
    const wallet_amount = parseFloat(document.getElementById('wallet_amount').value);
    const premiums = parseFloat(document.getElementById('premiums').value);
    const grant_price = parseFloat(document.getElementById('grant_price').value);

    // Step 1: Calculate the total amount in USD
    const total_usd = (wallet_amount + premiums) * fx_rate;           

    // Step 2: Calculate wallet amount per quarter based on total USD
    const wallet_per_quarter = total_usd / 4;

    // Step 3: Calculate wallet amount divided by grant price
    const wallet_div_grant = wallet_per_quarter / grant_price; // This will give you the shares based on the wallet amount alone

    // Step 4: Calculate shares quantity based on wallet amount per quarter divided by grant price (rounding up)
    const shares_quantity = Math.ceil(wallet_per_quarter / grant_price);
    


    // Update the results in the HTML
    document.getElementById('total_usd').innerText = 'Total USD: ' + total_usd.toFixed(2);
    document.getElementById('wallet_per_quarter').innerText = 'Wallet Amount per Quarter: ' + wallet_per_quarter.toFixed(4);
    document.getElementById('wallet_div_grant').innerText = 'Wallet Amount / Grant Price: ' + wallet_div_grant.toFixed(4); // Format to 4 decimal places
    document.getElementById('shares_quantity').innerText = 'Shares Quantity: ' + shares_quantity;
    document.getElementById('result').style.display = 'block';
});
