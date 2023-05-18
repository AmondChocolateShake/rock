function gamBamBo(na:string,you:string){
  const rule=['ga','ba','bo'];
  let obj={
    na:'',
    you:'',
    win:''
  }
  //가위는 바위한테 짐
  //바위는 보한테 짐
  //보는 바위한테 짐


  

  let safe=0;//안전 확인 스위치


  //다른놈 검사
  for(let i=0;i<3;i++){
    if(na===rule[i]) safe=1;
  }


  //안전하면 실행
  if(safe===1){
    obj.na=na;
    obj.you=you;


    if(na==='ga'){
      if(you==='ba') obj.win='패배'
      else if(you==='bo') obj.win='승리'
      else obj.win='비김'
  
    }else if(na==='ba'){
      if(you==='ga') obj.win='승리'
      else if(you==='bo') obj.win='패배'
      else obj.win='비김'
      
  
    }else if(na==='bo'){
      if(you==='ga') obj.win='패배'
      else if(you==='ba') obj.win='승리'
      else obj.win='비김'
      
  }


  }else{//안전하지 않음

    return '똑바로 써라ㅋ'
  }

  return obj;
}


console.log(gamBamBo('ga','ga'));

