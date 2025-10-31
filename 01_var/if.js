// 조건문.
if (10 <= 10) {
  // if 블럭에 구현.
}
// 회원(회원번호, 회원명, 회원점수(75)) => 객체.
// 1001, 김민준, 123/ 1002, 박설명, 95/ 1003, 이충희, 100
// members 배열에 저장.
// result 에 회원점수의 합 => 콘솔출력.
// result 에 회원평균의 값 => 콘솔출력.

let members = [
  {memberNo: 1001, memberName: '김민준', point: 123},
  {memberNo: 1002, memberName: '박설명', point: 95},
  {memberNo: 1003, memberName: '이충희', point: 100}
]

let result = {}; //객체로 선언.
result['total'] = members[0]['point'] + members[1]['point'] + members[2]['point'];
result['average'] = result['total'] / members.length;

console.log('회원점수의 합: ' + result['total']);
console.log('회원평균의 값: ' + result['average']);

let idx = 2;
if (members[idx]['point'] > result['average']) {
  console.log(members[idx]['memberName'] + '의 점수는 평균보다 크다.');
} else if (members[idx]['point'] < result['average']) {
  console.log(members[idx]['memberName'] + '의 점수는 평균보다 작다.');
} else {
  console.log(members[idx]['memberName'] + '의 점수는 평균과 같다.');
}