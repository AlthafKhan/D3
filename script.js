var width = 500,
    height = 300;

var arr= [
    {x:10, y:20},
    {x:20, y:25},
    {x:30, y:75},
    {x:40, y:56},
    {x:50, y:15},
    {x:60, y:20},
    {x:70, y:18},
    {x:80, y:66},
    {x:90, y:45},
    {x:100, y:82}
];
    
var lineFunc = d3.line()
        .x(function(d){
            return d.x *3
        })
        .y(function(d){
            return d.y *2
        });

var svg = d3.select('body')
        .append('svg')
        .attr('width',width)
        .attr('height', height);

svg.append('path')
        .attr('d', lineFunc(arr))
        .attr('stroke','red')
        .attr('stroke-width',2)
        .attr('fill', 'none');

svg.selectAll('text')
        .data(arr)
        .enter().append('text')
        .text(function(d,i){
            return d.x+' '+d.y ;
        })
        .attr('x', function(d,i){
            return d.x*3;
        })
        .attr('y', function(d,i){
            return d.y*2;
        });

//--------------------------------------
var width = 200,
    height =100,
    dataset = [5,7,15,3,6,12];
var svg = d3.select('body')
        .append('svg')
        .attr('width',width)
        .attr('height', height);

svg.selectAll('rect')
        .data(dataset)
        .enter().append('rect')
        .attr('x', function(d,i){
            return i * (width/dataset.length);
        })
        .attr('y', function(d,i){
            return height -d * 5;
        })
        .attr('width', width/dataset.length - 5)
        .attr('height',100)
        .attr('fill',function(d,i){
           return 'red';
        });
svg.selectAll('text')        
        .data(dataset)
        .enter().append('text')
        .attr('text-anchor', 'middle')
        .attr('x', function(d,i){
            return i * (width/dataset.length) + (width/dataset.length)/2;
        })
        .attr('y', function(d,i){
            return height -d * 5;
        })
        .text(function(d,i){
            return d;
        });
//---------------------------------
//d3.select('body')
//    .append('svg')
//    .attr('width',200)
//    .attr('height', 200)
//        .append('rect')
//        .attr('width',300)
//        .attr('height', 200)
//        .style('fill','red');
//
//d3.select('body')
//    .append('svg')
//    .attr('width',600)
//    .attr('height', 600)
//        .append('circle')
//        .attr('cx',300)
//        .attr('cy', 200)
//        .attr('r',100)
//        .style('fill','red');
//--------------------------------------------
//d3.select('body')
//        .selectAll('p')
//        .data([12,14,16,18,25,7,3])
//        .enter().append('p')
//        .style('background-color', function(d,i){
//            return 'black';
//        })
//        .style('color', 'white')
//        .text(function(d,i){
//            return 'paragraph = '+d;
//        })
//        .on('click', function(d,i){
//           d3.event.target.innerHTML = 'Element Updated!!!!!!!!!!'; 
//        });

