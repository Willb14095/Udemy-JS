var John = {
    name: "John",
    bills: [124, 48, 268, 180, 42],
    calculateTips: function() {
        this.tips = [];
        this.paid = [];
        for (var i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 50){this.tips.push(this.bills[i]*.2); this.paid.push(this.bills[i]*.2 + this.bills[i]);}
            else if (this.bills[i] > 50 && this.bills[i] < 200){this.tips.push(this.bills[i]*.15); this.paid.push(this.bills[i]*.15 + this.bills[i]);}
            else if (this.bills[i] > 200){this.tips.push(this.bills[i]*.10); this.paid.push(this.bills[i]*.1 + this.bills[i]);}
        }
    }
}
var Mark = {
    name: "Mark",
    bills: [77, 375, 110, 45],
    calculateTips: function() {
        this.tips = [];
        this.paid = [];
        for (var i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 100){this.tips.push(this.bills[i]*.2); this.paid.push(this.bills[i]*.2 + this.bills[i]);}
            else if (this.bills[i] > 100 && this.bills[i] < 300){this.tips.push(this.bills[i]*.1); this.paid.push(this.bills[i]*.1 + this.bills[i]);}
            else if (this.bills[i] > 300){this.tips.push(this.bills[i]*.25); this.paid.push(this.bills[i]*.25 + this.bills[i]);}
        }
    }
}

function avgTips(name){
    var sum = 0;
    for (var i = 0; i < name.tips.length; i++){
        sum += name.tips[i];
    }
    name.avgTip = sum/name.tips.length;
}


Mark.calculateTips();
John.calculateTips();

avgTips(Mark);
avgTips(John);

//console.log(Mark.avgTip);

var max = (Mark.avgTip > John.avgTip) ? Mark.avgTip : John.avgTip;
var family = (Mark.avgTip > John.avgTip) ? Mark.name : John.name;
console.log("on average " + family + "'s family spent the most on tips with an average of $" + max);
