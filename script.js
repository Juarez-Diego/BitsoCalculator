

function calculateProfit(){
  event.preventDefault()
  var wallet = document.getElementById("wallet").value
  var buyPrice = document.getElementById("buyPrice").value
  var sellPrice = document.getElementById("sellPrice").value

  let profitValue = document.getElementById("profit")
  let percentValue = document.getElementById("percent")
  
  // Bitso calculates maker fee at 0.50% & taker fee at 0.65%
  let toCrypto = wallet / buyPrice;
  let makerFee = toCrypto - (toCrypto * 0.0065);

  let sell = makerFee * sellPrice;
  let takerFee = sell - (sell * 0.0065);

  // toLocaleString() is fucking up my rendering of colors
  let profit = Number((takerFee - wallet).toFixed(2))
  let gainsPercent = Number(((sellPrice / buyPrice - 1) * 100).toFixed(2))
      
  document.getElementById("profit").innerHTML=profit.toLocaleString()
  document.getElementById("percent").innerHTML=gainsPercent.toLocaleString()

  
  if(profit < 0){ 
    document.getElementById("profit-main").style.color = "#ff0000"
  } else {
    document.getElementById("profit-main").style.color = "#007200"
  }

  if(gainsPercent < 0){
    document.getElementById("percent-main").style.color = "#ff0000"
  } else {
    document.getElementById("percent-main").style.color = "#007200"
  }
}

function calculateFees(){
  
    event.preventDefault()
    var wallet = document.getElementById("wallet").value
    var buyPrice = document.getElementById("buyPrice").value
    var sellPrice = document.getElementById("sellPrice").value

    let profitValue = document.getElementById("profit")
    let percentValue = document.getElementById("percent")
    
    // Bitso calculates maker fee at 0.50% & taker fee at 0.65%
    let toCrypto = wallet / buyPrice;
    let makerFee = toCrypto - (toCrypto * 0.0065);

    let sell = makerFee * sellPrice;
    let takerFee = sell - (sell * 0.0065);
  
    // toLocaleString() is fucking up my rendering of colors
    let profit = Number((takerFee - wallet).toFixed(2))
    let gainsPercent = Number(((sellPrice / buyPrice - 1) * 100).toFixed(2))
        
    document.getElementById("profit").innerHTML=profit.toLocaleString()
    document.getElementById("percent").innerHTML=gainsPercent.toLocaleString()
    

    if(profit < 0){ 
      document.getElementById("profit-main").style.color = "#ff0000"
    } else {
      document.getElementById("profit-main").style.color = "#007200"
    }

    if(gainsPercent < 0){
      document.getElementById("percent-main").style.color = "#ff0000"
    } else {
      document.getElementById("percent-main").style.color = "#007200"
    }


    let feeOfMaker = Number((toCrypto * 0.0050).toFixed(4))
    let feeOfTaker = Number((toCrypto * 0.0065).toFixed(4))
    document.getElementById("maker-fee").innerHTML = `$ ${feeOfMaker}`
    document.getElementById("taker-fee").innerHTML = `$ ${feeOfTaker}`


    let positiveRange = document.getElementById("positive_range")
    positiveRange.addEventListener("input", function () {
      document.getElementById("sellPrice").value = ((this.value / 100 + 1) * buyPrice).toFixed(2)
      console.log(profit)
      calculateProfit()
    })  


    let negativeRange = document.getElementById("negative_range")
    negativeRange.addEventListener("input", function () {
      document.getElementById("sellPrice").value = ((this.value / 100 + 1) * buyPrice).toFixed(2)
      calculateProfit()
    })  

}


function clearInput() {
  document.getElementById("form").reset();
}

function rangeValuePositive() {
  let currentValue = document.getElementById("percent").innerHTML
  let positiveRange = document.getElementById("positive_range")
  let positiveValue = document.getElementById("positive_range").value

  positiveRange.addEventListener("input", function () {
    document.getElementById("percent").innerHTML = this.value
  })  

  if(Number(currentValue) < 0){
    document.getElementById("percent-main").style.color = "#ff0000"
  } else {
    document.getElementById("percent-main").style.color = "#007200"
  }



}

function rangeValueNegative() {

  let currentValue = document.getElementById("percent").innerHTML
  let negativeRange = document.getElementById("negative_range")
  let negativeValue = document.getElementById("negative_range").value
  
  negativeRange.addEventListener("input", function () {
    document.getElementById("percent").innerHTML = this.value
  }, false)

  if(Number(currentValue) < 0){
    document.getElementById("percent-main").style.color = "#ff0000"
  } else {
    document.getElementById("percent-main").style.color = "#007200"
  }


}
