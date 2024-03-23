const prices = [22.99, 21.99, 19.99];

const calculatePrice = () => {
    let sum = 0
    for(let i in prices){
       sum += prices[i]
     }
     if(sum === 64.97){
        console.log('Total calculates correctly')
        return sum
    } else {
        console.log('Test is unsuccessful')
    }
    }

calculatePrice();