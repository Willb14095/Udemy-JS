var jTeam = [89, 120, 103, 160];
var mTeam = [116, 94, 123];
var maryTeam = [97, 134, 105];

function getAverage(array){
    var sum =0;
    
    for (var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum/array.length;
}

var jAv = getAverage(jTeam);
var mAv = getAverage(mTeam);
var maryAv = getAverage(maryTeam);

console.log(jAv > mAv && jAv > maryAv ? 'John wins' : null);
console.log(mAv > jAv && mAv > maryAv ? 'Mark wins' : null );
console.log(maryAv > jAv && maryAv > mAv ? 'Mary wins' : null );
