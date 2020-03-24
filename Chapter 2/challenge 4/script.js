var Mark = {
    name: 'Mark',
    mass: 170,
    height: 60,
    calculateBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
    }
}

var John = {
    name: 'John',
    mass: 190,
    height: 60,
    calculateBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
    }
}


Mark.calculateBMI();
John.calculateBMI();
console.log(Mark);
console.log(John);

if (Mark.BMI > John.BMI){
    console.log('Mark has a hgiher BMI at ' + Mark.BMI);
}
else if (John.BMI > Mark.BMI){
    console.log('John has a hgiher BMI at ' + John.BMI);
}else{
    console.log('BMI has matched')
}