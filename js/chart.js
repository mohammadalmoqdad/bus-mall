console.log(Product.all[0].clicks)
console.log(2222222222222222222222);



function chartPaint(){
    var clickArr=[];
    var veiwArr=[];
for(var i =0; i<Product.all.length;i++){
clickArr.push(Product.all[i].clicks);
veiwArr.push(Product.all[i].veiws);
}
// push product.all.clicks
console.log(clickArr);
var chartContainer=document.getElementById('myChart');
var myChart=new Chart(chartContainer,{
    type: 'bar', //pie, line
    data: {
        labels:imgNames,
        datasets: [{
            label: '# of clicks',
            data:clickArr, 
                 backgroundColor: [
                'rgba(52, 73, 94, 0.7)',
                'rgba(211, 84, 0, 0.7)',
                'rgba(145, 61, 136, 0.7)',
                'rgba(253, 227, 167, 0.7)',
               'rgba(77, 175, 124, 0.7)',
               'rgba(135, 211, 124, 0.7)',
               'rgba(162, 222, 208, 0.7)',
               'rgba(246, 71, 71, 0.7)',
               'rgba(200, 247, 197, 0.7)',
               'rgba(247, 202, 24, 0.7)',
               'rgba(242, 217, 132, 0.7)',
               'rgba(255, 255, 126, 0.7)',
               'rgba(155, 89, 182, 0.7)',
               'rgba(197, 239, 247, 0.7)',
               'rgba(103, 65, 114, 0.7)',
               'rgba(103, 128, 159, 0.7)',
               'rgba(242, 120, 75, 0.7)',
               'rgba(171, 183, 183, 0.7)',
               'rgba(150, 40, 27, 0.7)'
            ],
            borderColor: [
                'rgba(52, 73, 94, 1)',
                'rgba(211, 84, 0, 1)',
                'rgba(145, 61, 136, 1)',
                'rgba(253, 227, 167, 1)',
               'rgba(77, 175, 124, 1)',
               'rgba(135, 211, 124, 1)',
               'rgba(162, 222, 208, 1)',
               'rgba(246, 71, 71, 1)',
               'rgba(200, 247, 197, 1)',
               'rgba(247, 202, 24, 1)',
               'rgba(242, 217, 132, 1)',
               'rgba(255, 255, 126, 1)',
               'rgba(155, 89, 182, 1)',
               'rgba(197, 239, 247, 1)',
               'rgba(103, 65, 114, 1)',
               'rgba(103, 128, 159, 1)',
               'rgba(242, 120, 75, 1)',
               'rgba(171, 183, 183, 1)',
               'rgba(150, 40, 27, 1)'
            ],
            borderWidth: 2
        },
        {
            label: '# of Views',
            data: veiwArr,
            backgroundColor: [
                'rgba(52, 73, 94, 0.4)',
                'rgba(211, 84, 0, 0.4)',
                'rgba(145, 61, 136, 0.4)',
                'rgba(253, 227, 167, 0.4)',
               'rgba(77, 175, 124, 0.4)',
               'rgba(135, 211, 124, 0.4)',
               'rgba(162, 222, 208, 0.4)',
               'rgba(246, 71, 71, 0.4)',
               'rgba(200, 247, 197, 0.4)',
               'rgba(247, 202, 24, 0.4)',
               'rgba(242, 217, 132, 0.4)',
               'rgba(255, 255, 126, 0.4)',
               'rgba(155, 89, 182, 0.4)',
               'rgba(197, 239, 247, 0.4)',
               'rgba(103, 65, 114, 0.4)',
               'rgba(103, 128, 159, 0.4)',
               'rgba(242, 120, 75, 0.4)',
               'rgba(171, 183, 183, 0.4)',
               'rgba(150, 40, 27, 0.4)'
            ],
            borderColor: [
                'rgba(52, 73, 94, 1)',
                'rgba(211, 84, 0, 1)',
                'rgba(145, 61, 136, 1)',
                'rgba(253, 227, 167, 1)',
               'rgba(77, 175, 124, 1)',
               'rgba(135, 211, 124, 1)',
               'rgba(162, 222, 208, 1)',
               'rgba(246, 71, 71, 1)',
               'rgba(200, 247, 197, 1)',
               'rgba(247, 202, 24, 1)',
               'rgba(242, 217, 132, 1)',
               'rgba(255, 255, 126, 1)',
               'rgba(155, 89, 182, 1)',
               'rgba(197, 239, 247, 1)',
               'rgba(103, 65, 114, 1)',
               'rgba(103, 128, 159, 1)',
               'rgba(242, 120, 75, 1)',
               'rgba(171, 183, 183, 1)',
               'rgba(150, 40, 27, 1)'
            ],
            borderWidth: 2
        }]
    },







    })



}