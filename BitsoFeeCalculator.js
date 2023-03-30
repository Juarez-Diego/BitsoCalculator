
function calculateFees(wallet, buyPrice, sellPrice){
  
    // Bitso calculates maker fee at 0.50% & taker fee at 0.65%
  	let toCrypto = wallet / buyPrice;
		let makerFee = toCrypto - (toCrypto * 0.0065);
  
		let sell = makerFee * sellPrice;
		let takerFee = sell - (sell * 0.0065);
  
    let profit = Number((takerFee - wallet).toFixed(2))
    let gainsPercent = Number(((sellPrice / buyPrice - 1) * 100).toFixed(2))
		
    return {
      profit: profit,
      percent: gainsPercent
    }
}

// Add into the function the percent that the crypto can move
// Make a slider with the amount and have it render the gains

calculateFees(30000, 10, 5)