
function calSum(){
    let sum = 0;
  let enter = 0;
  for(let i = 0; i < 10; i++){
    enter = prompt("Enter Number");
    if(enter < 0){
      break;
    }
    sum = sum + enter;
  }
    console.log(sum);
  }
  calSum();