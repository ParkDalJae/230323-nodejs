const studentList = [
    "강지민",
    "곽윤호",
    "권예준",
    "김동주",
    "김은아",
    "김종윤",
    "김지섭",
    "김형진",
    "노수민",
    "류은이",
    "박달재",
    "박수연",
    "박준형",
    "성해경",
    "이경택",
    "이세민",
    "이재권",
    "임지성",
    "장루빈",
    "정성철",
    "정지은",
    "정희은",
    "최대건",
    "한유진",
    "허진",
]
const studentListEng = [
    "ParkDalJae",
    "LeeSeMin",
    "HerJin",
    "LeeKyoungTeak",
    "JeongSeongCherl",
    
]
// * .filter() 메서드 예제
const kimStudents = studentList.filter(function(student){
    return student.startsWith("김")  
})
console.log(kimStudents)
// * .filter() 메서드 + 나머지 값을 가져오는 %연산
const oddStudents = studentList.filter(function(student,index){
    return index %2 ===0;
})
console.log(oddStudents)
// * .filter() 메서드 + 문자열 길이 비교
const threeletterStudents = studentList.filter(function(student){
    return student.length === 3;
})
console.log(threeletterStudents)
// * .map() 메서드 예제 : 매핑한다고 하여 상당히 자주 사용하는 메서드
const studentWithSuffix = studentList.map(function(student){
    return student + "님"
})
console.log(studentWithSuffix)
// * .map() 메서드 예제 : 대문자로 변환 
const upperCaseStudents = studentListEng.map(function(student){
    return student.toUpperCase();
})
console.log(upperCaseStudents)

























