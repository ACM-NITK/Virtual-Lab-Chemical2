function ha(){
	if(document.getElementById('w').value==0){
	alert("Fill all the data")
	}
	if(document.getElementById('t').value==0){
	alert("Fill all the data")
	}
    w=document.getElementById('w').value;
    localStorage.setItem('h0',w);
    console.log(localStorage.getItem('h0'));
	
	t=document.getElementById('t').value;
    	 n2=(1/t);
		 n21=n2.toFixed(4);
	 localStorage.setItem('j0',n21);
    console.log(localStorage.getItem('j0'));
	
	w1=document.getElementById('w1').value;
    localStorage.setItem('h1',w1);
    console.log(localStorage.getItem('h1'));
	
	w2=document.getElementById('w2').value;
    localStorage.setItem('h2',w2);
    console.log(localStorage.getItem('h2'));
	
	w3=document.getElementById('w3').value;
    localStorage.setItem('h3',w3);
    console.log(localStorage.getItem('h3'));
	
	w4=document.getElementById('w4').value;
    localStorage.setItem('h4',w4);
    console.log(localStorage.getItem('h4'));
	
	w5=document.getElementById('w5').value;
    localStorage.setItem('h5',w5);
    console.log(localStorage.getItem('h5'));
	
	t1=document.getElementById('t1').value;
    localStorage.setItem('j1',t1);
    console.log(localStorage.getItem('j1'));
	
	t2=document.getElementById('t2').value;
    localStorage.setItem('j2',t2);
    console.log(localStorage.getItem('j2'));
	
	t3=document.getElementById('t3').value;
    localStorage.setItem('j3',t3);
    console.log(localStorage.getItem('t3'));
	
	t4=document.getElementById('t4').value;
    localStorage.setItem('j4',t4);
    console.log(localStorage.getItem('j4'));
	
	t5=document.getElementById('t5').value;
    localStorage.setItem('j5',t5);
    console.log(localStorage.getItem('t5'));
	
	V1=0.1/w1;
	V11=V1.toFixed(4);
    localStorage.setItem('k1',V11);
    console.log(localStorage.getItem('k1'));
	
	V2=0.1/w2;
	V21=V2.toFixed(4);
    localStorage.setItem('k2',V21);
    console.log(localStorage.getItem('k2'));
	
	V3=0.1/w3;
	V31=V3.toFixed(4);
    localStorage.setItem('k3',V31);
    console.log(localStorage.getItem('k3'));
	
	V4=0.1/w4;
	V41=V4.toFixed(4);
    localStorage.setItem('k4',V41);
    console.log(localStorage.getItem('k4'));
	
	V5=0.1/w5;
	V51=V5.toFixed(4);
    localStorage.setItem('k5',V51);
    console.log(localStorage.getItem('k5'));
	
	c1=6.3*n2*t1;
	c11=c1.toFixed(4);
	localStorage.setItem('i1',c11);
    console.log(localStorage.getItem('i1'));
	
	c2=6.3*n2*t2;
	c21=c2.toFixed(4);
	localStorage.setItem('i2',c21);
    console.log(localStorage.getItem('i2'));
	
	c3=6.3*n2*t3;
	c31=c3.toFixed(4);
	localStorage.setItem('i3',c31);
    console.log(localStorage.getItem('i3'));
	
	c4=6.3*n2*t4;
	c41=c4.toFixed(4);
	localStorage.setItem('i4',c41);
    console.log(localStorage.getItem('i4'));
	
	c5=6.3*n2*t5;
	c51=c5.toFixed(4);
	localStorage.setItem('i5',c51);
    console.log(localStorage.getItem('i5'));
	
	Vc1=V1*(w-c1);
	Vc11=Vc1.toFixed(4);
	localStorage.setItem('l1',Vc11);
    console.log(localStorage.getItem('l1'));
	
		Vc2=V2*(w-c2);
		Vc21=Vc2.toFixed(4);
	localStorage.setItem('l2',Vc21);
    console.log(localStorage.getItem('l2'));
	
		Vc3=V3*(w-c3);
		Vc31=Vc3.toFixed(4);
	localStorage.setItem('l3',Vc31);
    console.log(localStorage.getItem('l3'));
	
		Vc4=V4*(w-c4);
		Vc41=Vc4.toFixed(4);
	localStorage.setItem('l4',Vc41);
    console.log(localStorage.getItem('l4'));
	
		Vc5=V5*(w-c5);
		Vc51=Vc5.toFixed(4);
	localStorage.setItem('l5',Vc51);
    console.log(localStorage.getItem('l5'));
	
	 lc1=Math.log(c1);
	lc11=lc1.toFixed(4);
	localStorage.setItem('m1',lc11);
    console.log(localStorage.getItem('m1'));
	
	 lc2=Math.log(c2);
	lc21=lc2.toFixed(4);
	localStorage.setItem('m2',lc21);
    console.log(localStorage.getItem('m2'));
	
	 lc3=Math.log(c3);
	 lc31=lc3.toFixed(4);
	localStorage.setItem('m3',lc31);
    console.log(localStorage.getItem('m3'));
	
	 lc4=Math.log(c4);
	lc41=lc4.toFixed(4);
	localStorage.setItem('m4',lc41);
    console.log(localStorage.getItem('m4'));
	
	 lc5=Math.log(c5);
	lc51=lc5.toFixed(4);
	localStorage.setItem('m5',lc51);
    console.log(localStorage.getItem('m5'));
	
	lvc1=Math.log(Vc1);
lvc11=lvc1.toFixed(4);
	localStorage.setItem('n1',lvc11);
    console.log(localStorage.getItem('n1'));
	
	 lvc2=Math.log(Vc2);
	lvc21=lvc2.toFixed(4);
	localStorage.setItem('n2',lvc21);
    console.log(localStorage.getItem('n2'));
	
	 lvc3=Math.log(Vc3);
	lvc31=lvc3.toFixed(4);
	localStorage.setItem('n3',lvc31);
    console.log(localStorage.getItem('n3'));
	
	 lvc4=Math.log(Vc4);
	lvc41=lvc4.toFixed(4);
	localStorage.setItem('n4',lvc41);
    console.log(localStorage.getItem('n4'));
	
	 lvc5=Math.log(Vc5);
	lvc51=lvc5.toFixed(4);
	localStorage.setItem('n5',lvc51);
    console.log(localStorage.getItem('n5'));
	
    window.location='here.html';
}
function here(){
	
    document.getElementById('ans').innerHTML=localStorage.getItem('j0');
	    document.getElementById('wt1').innerHTML=localStorage.getItem('h1');
		document.getElementById('wt2').innerHTML=localStorage.getItem('h2');
		document.getElementById('wt3').innerHTML=localStorage.getItem('h3');
		document.getElementById('wt4').innerHTML=localStorage.getItem('h4');
		document.getElementById('wt5').innerHTML=localStorage.getItem('h5');
		
		document.getElementById('tr1').innerHTML=localStorage.getItem('j1');
		document.getElementById('tr2').innerHTML=localStorage.getItem('j2');
		document.getElementById('tr3').innerHTML=localStorage.getItem('j3');
		document.getElementById('tr4').innerHTML=localStorage.getItem('j4');
		document.getElementById('tr5').innerHTML=localStorage.getItem('j5');
		
        document.getElementById('V1').innerHTML=localStorage.getItem('k1');
		document.getElementById('V2').innerHTML=localStorage.getItem('k2');
		document.getElementById('V3').innerHTML=localStorage.getItem('k3');
		document.getElementById('V4').innerHTML=localStorage.getItem('k4');
		document.getElementById('V5').innerHTML=localStorage.getItem('k5');
		
		document.getElementById('c1').innerHTML=localStorage.getItem('i1');
		document.getElementById('c2').innerHTML=localStorage.getItem('i2');
		document.getElementById('c3').innerHTML=localStorage.getItem('i3');
		document.getElementById('c4').innerHTML=localStorage.getItem('i4');
		document.getElementById('c5').innerHTML=localStorage.getItem('i5');
		
		document.getElementById('vc1').innerHTML=localStorage.getItem('l1');
		document.getElementById('vc2').innerHTML=localStorage.getItem('l2');
		document.getElementById('vc3').innerHTML=localStorage.getItem('l3');
		document.getElementById('vc4').innerHTML=localStorage.getItem('l4');
		document.getElementById('vc5').innerHTML=localStorage.getItem('l5');
		
		document.getElementById('lc1').innerHTML=localStorage.getItem('m1');
		document.getElementById('lc2').innerHTML=localStorage.getItem('m2');
		document.getElementById('lc3').innerHTML=localStorage.getItem('m3');
		document.getElementById('lc4').innerHTML=localStorage.getItem('m4');
		document.getElementById('lc5').innerHTML=localStorage.getItem('m5');
		
		document.getElementById('lvc1').innerHTML=localStorage.getItem('n1');
		document.getElementById('lvc2').innerHTML=localStorage.getItem('n2');
		document.getElementById('lvc3').innerHTML=localStorage.getItem('n3');
		document.getElementById('lvc4').innerHTML=localStorage.getItem('n4');
		document.getElementById('lvc5').innerHTML=localStorage.getItem('n5');
		
		var lc1=localStorage.getItem('m1');
		var lc2=localStorage.getItem('m2');
		var lc3=localStorage.getItem('m3');
		var lc4=localStorage.getItem('m4');
		var lc5=localStorage.getItem('m5');
		
		var lvc1=localStorage.getItem('n1');
		var lvc2=localStorage.getItem('n2');
		var lvc3=localStorage.getItem('n3');
		var lvc4=localStorage.getItem('n4');
		var lvc5=localStorage.getItem('n5');
		
		 var ctx = document.getElementById("canvas1").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        
        datasets: [{
            label: 'Batch Adsorption',
            data: [{
                x: lc1,
                y: lvc1
            }, {
                x: lc2,
                y: lvc2
            }, {
                x: lc3,
                y: lvc3
            }, {
				x:lc4,
				y:lvc4
			}, {
				x:lc5,
				y:lvc5
			}],
			
            backgroundColor: [
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)'
            ],
            borderColor: [
                'red',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0.5
        }]
    },
	options:{
   scales: {
				xAxes: [{
					gridLines: {
						color: "rgba(0, 0, 0, 5)",
					},
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'log(C*)'
					}
				}],
				yAxes: [{
					gridLines: {
						color: "rgba(0, 0, 0, 10)",
					},
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'log(V*(Co-C*)'
					}
				}]
			}
	}
});

var y =[lvc1, lvc2, lvc3, lvc4, lvc5]; 
   var  x =[lc1, lc2, lc3, lc4, lc5]; 
    n = 5;
	
	    bestApproximate(x, y, n); 
function bestApproximate(x, y, n) 
{ 
    var sum_x = 0;  
    var sum_y = 0;  
    var sum_xy = 0;  
    var sum_x2 = 0; 
    for (i = 0; i < n; i++) 
    { 
        sum_x += + x[i]; 
        sum_y += + y[i]; 
        sum_xy += (x[i] * y[i]); 
        sum_x2 += (x[i] * x[i]); 
    } 
  
    m = ((n* sum_xy)-(sum_x * sum_y))/((n* sum_x2)-(sum_x * sum_x)); 
   c = (sum_y - (m * sum_x))/n;
n=m.toFixed(4);
k=Math.exp(c);
k1=k.toFixed(4);
document.getElementById('n').innerHTML=n;
document.getElementById('k').innerHTML=k1;
//document.getElementById('slope').innerHTML=m;
}
}
function here1(){
	
    document.getElementById('ans').innerHTML=localStorage.getItem('j0');
	    document.getElementById('wt1').innerHTML=localStorage.getItem('h1');
		document.getElementById('wt2').innerHTML=localStorage.getItem('h2');
		document.getElementById('wt3').innerHTML=localStorage.getItem('h3');
		document.getElementById('wt4').innerHTML=localStorage.getItem('h4');
		document.getElementById('wt5').innerHTML=localStorage.getItem('h5');
		
		document.getElementById('tr1').innerHTML=localStorage.getItem('j1');
		document.getElementById('tr2').innerHTML=localStorage.getItem('j2');
		document.getElementById('tr3').innerHTML=localStorage.getItem('j3');
		document.getElementById('tr4').innerHTML=localStorage.getItem('j4');
		document.getElementById('tr5').innerHTML=localStorage.getItem('j5');
		
        document.getElementById('V1').innerHTML=localStorage.getItem('k1');
		document.getElementById('V2').innerHTML=localStorage.getItem('k2');
		document.getElementById('V3').innerHTML=localStorage.getItem('k3');
		document.getElementById('V4').innerHTML=localStorage.getItem('k4');
		document.getElementById('V5').innerHTML=localStorage.getItem('k5');
		
		document.getElementById('c1').innerHTML=localStorage.getItem('i1');
		document.getElementById('c2').innerHTML=localStorage.getItem('i2');
		document.getElementById('c3').innerHTML=localStorage.getItem('i3');
		document.getElementById('c4').innerHTML=localStorage.getItem('i4');
		document.getElementById('c5').innerHTML=localStorage.getItem('i5');
		
		document.getElementById('vc1').innerHTML=localStorage.getItem('l1');
		document.getElementById('vc2').innerHTML=localStorage.getItem('l2');
		document.getElementById('vc3').innerHTML=localStorage.getItem('l3');
		document.getElementById('vc4').innerHTML=localStorage.getItem('l4');
		document.getElementById('vc5').innerHTML=localStorage.getItem('l5');
		
		document.getElementById('lc1').innerHTML=localStorage.getItem('m1');
		document.getElementById('lc2').innerHTML=localStorage.getItem('m2');
		document.getElementById('lc3').innerHTML=localStorage.getItem('m3');
		document.getElementById('lc4').innerHTML=localStorage.getItem('m4');
		document.getElementById('lc5').innerHTML=localStorage.getItem('m5');
		
		document.getElementById('lvc1').innerHTML=localStorage.getItem('n1');
		document.getElementById('lvc2').innerHTML=localStorage.getItem('n2');
		document.getElementById('lvc3').innerHTML=localStorage.getItem('n3');
		document.getElementById('lvc4').innerHTML=localStorage.getItem('n4');
		document.getElementById('lvc5').innerHTML=localStorage.getItem('n5');
		
		var lc1=localStorage.getItem('m1');
		var lc2=localStorage.getItem('m2');
		var lc3=localStorage.getItem('m3');
		var lc4=localStorage.getItem('m4');
		var lc5=localStorage.getItem('m5');
		
		var lvc1=localStorage.getItem('n1');
		var lvc2=localStorage.getItem('n2');
		var lvc3=localStorage.getItem('n3');
		var lvc4=localStorage.getItem('n4');
		var lvc5=localStorage.getItem('n5');
		
		 var ctx = document.getElementById("canvas1").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        
        datasets: [{
            label: 'Batch Adsorption',
            data: [{
                x: lc1,
                y: lvc1
            }, {
                x: lc2,
                y: lvc2
            }, {
                x: lc3,
                y: lvc3
            }, {
				x:lc4,
				y:lvc4
			}, {
				x:lc5,
				y:lvc5
			}],
			
            backgroundColor: [
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0)'
            ],
            borderColor: [
                'red',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0.5
        }]
    },
	options:{
   scales: {
				xAxes: [{
					gridLines: {
						color: "rgba(0, 0, 0, 5)",
					},
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'log(C*)'
					}
				}],
				yAxes: [{
					gridLines: {
						color: "rgba(0, 0, 0, 10)",
					},
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'log(V*(Co-C*)'
					}
				}]
			}
	}
});

var y =[lvc1, lvc2, lvc3, lvc4, lvc5]; 
   var  x =[lc1, lc2, lc3, lc4, lc5]; 
    n = 5;
	
	    bestApproximate(x, y, n); 
function bestApproximate(x, y, n) 
{ 
    var sum_x = 0;  
    var sum_y = 0;  
    var sum_xy = 0;  
    var sum_x2 = 0; 
    for (i = 0; i < n; i++) 
    { 
        sum_x += + x[i]; 
        sum_y += + y[i]; 
        sum_xy += (x[i] * y[i]); 
        sum_x2 += (x[i] * x[i]); 
    } 
  
    m = ((n* sum_xy)-(sum_x * sum_y))/((n* sum_x2)-(sum_x * sum_x)); 
   c = (sum_y - (m * sum_x))/n;
n=m.toFixed(4);
k=Math.exp(c);
k1=k.toFixed(4);
document.getElementById('n').innerHTML=n;
document.getElementById('k').innerHTML=k1;
//document.getElementById('slope').innerHTML=m;
}
}