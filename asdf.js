console.log("1번")
1==1 ? console.log("true"):console.log("false") //true

console.log("2번")
1=="1" ? console.log("true"):console.log("false") //true

console.log("3번")
1===1 ? console.log("true"):console.log("false")  //true

console.log("4번")
1==="1" ? console.log("true"):console.log("false")  //false

const nai = 41

nai<19 ? console.log("애새끼") : nai<40 ? console.log("으르신") : console.log("그럼 뭐지")




if (1===1){
    console.log(true)
}else{
    console.log(false)
}
//==과 === 차이
//==은 느슨한 비교(타입 달라도 인식)
//===은 빡센비교(타입 다르면 다름)