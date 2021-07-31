const log = function(a,b,...rest){ //... Rest Operator собирает необязательные аргументы в массив 
    console.log(a,b,rest);
};

log(1,2,3,4,5,6,7)

function calcOrDouble(a,b=2){
    console.log(a*b);
}

calcOrDouble(8);