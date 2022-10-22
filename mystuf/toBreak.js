let sum = 0;
while(true){
    let value = +prompt('enter a number','');
    if(!value) break;
    sum +=value;
}
alert('total: ' +sum);