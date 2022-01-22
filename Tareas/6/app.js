let ls = '';
for(let i = 1; i<=5; i++){
    //console.log(i);
    for(let j = 1; j<=5; j++){
        //console.log((i*j));
        ls += (`${i*j}  `);
    }
    console.log(ls);
    ls = '';
}