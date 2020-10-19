var imgNames=[
    "bag.jpg",
    "shark.jpg",
    "sweep.png",
    "banana.jpg",
    "pet-sweep.jpg",
    "pen.jpg",
    "dragon.jpg",
    "dog-duck.jpg",
    "cthulhu.jpg",
    "chair.jpg",
    "c.jpg",
    "bubblegum.jpg",
    "boots.jpg",
    "tauntaun.jpg",
    "unicorn.jpg",
    "unicorn.jpg",
    "usb.gif",
    "water-can.jpg",
    "breakfast.jpg"
];

var leftImg=document.querySelector('#img1');
var middleImg=document.querySelector('#img2');
var rightImg=document.querySelector('#img3');

console.log(leftImg);
console.log(middleImg);
console.log(rightImg);

Product.all=[] // array of objects by calling the method all
function Product(pName){ 
    this.pName=pName;
    this.imgPath=`assets/${pName}`;
    this.clicks=0;
    this.veiws=0;
    Product.all.push(this); // add the name of img into as an object name
}



// make objects from the name of each image
for(var i=0;i<imgNames.length;i++){
    new Product(imgNames[i]);

}

console.log(Product.all);

var leftProduct;
var middleProduct;
var rightProduct;

function render() {
leftProduct=Product.all[randomNumber(0, Product.all.length - 1)];
middleProduct=Product.all[randomNumber(0,Product.all.length-1)]
rightProduct=Product.all[randomNumber(0,Product.all.length-1)]

console.log(leftProduct);
console.log(middleProduct);
console.log(rightProduct);

leftImg.setAttribute('src', leftProduct.imgPath);
// leftImg.setAttribute('alt',);
// leftImg.setAttribute('title',);


middleImg.setAttribute('src', middleProduct.imgPath);
// middleImg.setAttribute('alt',`${middleImg}`);
// middleImg.setAttribute('tilte',`${middleImg}`);

rightImg.setAttribute('src', rightProduct.imgPath);
// rightProduct.setAttribute('alt',`${rightProduct}`);
// rightProduct.setAttribute('title',`${rightProduct}`);

}
render();


var totalClicks = 0;

var imgSection=document.querySelector('.section2');
console.log(imgSection);
imgSection.addEventListener('click',handleProductClick);


function handleProductClick(event){
    

    if (totalClicks < 5) {
    if(event.target.id!=imgSection){
        totalClicks++;
        console.log(totalClicks);
        rightProduct.views++;
        leftProduct.views++;
        middleProduct.views++;

        if (event.target.id === 'img1') {
            leftProduct.clicks++;
    
          }
          if (event.target.id === 'img2') {
            middleProduct.clicks++;
    
          }
          if (event.target.id === 'img3') {
            rightProduct.clicks++;
    
          }
          render();




        } 
        }else if (totalClicks ==5) {
            console.log(22222222222222222);
            var ulE1 = document.getElementById('finalResults');
            
            for (var i = 0; i < Product.all.length; i++) {
                var liE = document.createElement('li');
                ulE1.appendChild(liE);
                liE.textContent =`${Product.all[i].pName} has ${Product.all[i].clicks} clicks and ${Product.all[i].views} views`;
              }
              console.log(ulE1);
            imagesSection.removeEventListener('click', handleProductClick);
            totalClicks==6;
            
           


    }

}

function renderResults(){
    

}
















function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
