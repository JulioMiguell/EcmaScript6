const nums = [8,4,7,9,2,7,9,7,6,0]

for (x in nums){
    if(x == 5){
        break //Para a execucao na hora
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if(y == 5){
        continue //Interrompe somente esta execucao e vai para proxima
    }
    console.log(`${y} = ${nums[y]}`)
}