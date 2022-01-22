let mayor = max(5,2,6);

function max(a, b, c){
    if(a>b && a>c) return console.log(a);
    
    if(b>a && b>c) return console.log(b);

    return console.log(c);
}