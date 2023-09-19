const number = [100,50,20]

for(var i in number){
    console.log(i+"번째 값은 "+number[i])
}

number.map((v, idx)=>{
     console.log(`${idx}번 값은 ${v}`)
})