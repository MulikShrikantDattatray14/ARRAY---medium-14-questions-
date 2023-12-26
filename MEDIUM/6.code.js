function maxProfit(arr) {
  let maxi_profit = 0;
  let minPrice_BUY = Number.MAX_VALUE;
  let maxPrice_SELL=Number.MIN_SAFE_INTEGER
  for (let i = 0; i < arr.length; i++) {
    minPrice_BUY = Math.min(minPrice_BUY, arr[i]);
    maxPrice_SELL=arr[i]
    maxi_profit = Math.max(maxi_profit, maxPrice_SELL- minPrice_BUY);
  }
 let required_arr=arr.slice(minPrice_BUY)//right of the  minimum value
 maxPrice_SELL=Math.max(...required_arr)

 console.log("BUYING PRICE : "+ minPrice_BUY)
 console.log("SELLING PRICE : "+ maxPrice_SELL)

  return maxi_profit;
}

const arr = [7, 1, 5, 3, 6, 4];
const maxPro = maxProfit(arr);

console.log("Max profit is: " + maxPro);
