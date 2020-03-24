var bills = [124, 48, 268];
var tip = [];
var paid = [];

for (var i=0; i < bills.length; i++){
            if( bills[i] < 50){
                tip.push(bills[i]*.2);
                paid.push(bills[i]*.2 + bills[i]);
            }
            else if(50 < bills[i] && bills[i] < 200){
                tip.push(bills[i]*.15);
                paid.push(bills[i]*.15 + bills[i]);
            }
            else if(bills[i] > 200){
                tip.push(bills[i]*.1);
                paid.push(bills[i]*.1 + bills[i]);
            }            
        }



console.log(tip);
console.log(paid);