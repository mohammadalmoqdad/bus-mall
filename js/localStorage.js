// add function to send the total clicks to local storage
function sendClicks() {
    var tClicks = JSON.stringify(totalClicks2);
    var productARR = JSON.stringify(Product.all); //change the array content from objects to json 
    console.log(productARR)
    localStorage.setItem('productArray', productARR);
    localStorage.setItem('TotalClicks', tClicks);

}

var cl = [];

//to sum the cummulative total of all clicks
function getClicks() {

    var returnedProArr = localStorage.getItem('productArray'); //return product objects from browser
    var returnedTotalClicks = localStorage.getItem('TotalClicks'); // return cummualative total clicks
    returnedTotalClicks = JSON.parse(returnedTotalClicks);
    
    // to avoid the error when there is no objects (for the first set&get)
    if (returnedProArr) { //if it has value then it's true
        Product.all = JSON.parse(returnedProArr);
        for (var i = 0; i < Product.all.length; i++) {
            if (Product.all[i].clicks !== 0) {
                cl[i] += Product.all[i].clicks;

            }
            else {
                Product.all[i].clicks = 0
            }
           
        }
        if (returnedTotalClicks) {
            totalClicks2+=returnedTotalClicks;    
            
        }

    }

}
console.log(Product.all);
getClicks();
console.log(Product.all);