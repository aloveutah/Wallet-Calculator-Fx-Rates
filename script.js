document.getElementById("calculateBtn").addEventListener("click", function() {
    console.log("Button clicked"); // Debugging line

    const fx_rate = parseFloat(document.getElementById('fx_rate').value);
    const wallet_amount = parseFloat(document.getElementById('wallet_amount').value);
    const premiums = parseFloat(document.getElementById('premiums').value);
    const grant_price = parseFloat(document.getElementById('grant_price').value);

    // Calculate Total USD
    const total_usd = (wallet_amount + premiums) * fx_rate;           

    // Calculate Wallet Amount per Quarter
    const wallet_per_quarter = total_usd / 4;

    // Calculate Wallet Amount per Quarter divided by Grant Price
    const wallet_div_grant = wallet_per_quarter / grant_price; 

    // Calculate Share Quantity (rounding up)
    const shares_quantity = Math.ceil(wallet_per_quarter / grant_price);

    // Update the results on the HTML
    document.getElementById('total_usd').innerText = 'Total USD: ' + total_usd.toFixed(2);
    document.getElementById('wallet_per_quarter').innerText = 'Wallet Amount per Quarter: ' + wallet_per_quarter.toFixed(4);
    document.getElementById('wallet_div_grant').innerText = 'Wallet Amount per Quarter / Grant Price: ' + wallet_div_grant.toFixed(4);
    document.getElementById('shares_quantity').innerText = 'Share Quantity (Round Up): ' + shares_quantity;
    
    document.getElementById('result').style.display = 'block';
});
