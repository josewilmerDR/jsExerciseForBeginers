let stay;
for(let i = 99; i >= 1; i--){
    stay = i-1;
    if(i == 1){
        console.log(`1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.`)
    }else if(i == 2){
        console.log(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${stay} bottle of milk on the wall.`)
    }
    else{
        console.log(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${stay} bottles of milk on the wall.`)
    }
}
console.log(`No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.`)