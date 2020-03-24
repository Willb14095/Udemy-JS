

function Person(name, height, weight){
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.BMI = weight / (height * height);
}

var Mark = new Person("mark", 57, 130);
var John = new Person("john", 60, 110);

console.log(Mark);
console.log(John.BMI);

var isMarksBMIHigher = (Mark.BMI > John.BMI) ? 'Marks BMI is higher' : 'Johns BMI is higher';
console.log(isMarksBMIHigher);