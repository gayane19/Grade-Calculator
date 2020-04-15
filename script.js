function CalculateCurrentGrade(){

  var Participation=0
  var HW=0
  var Quiz=0
  var PM1=0
  var PM2=0
  var currentgrade= 0

  var Participation=parseInt(document.getElementById("Participation").innerHTML)

  var ParticipationGrade=parseFloat(document.getElementById("ParticipationGrade").value)

  var currentgrade= Participation*ParticipationGrade/100
  console.log(currentgrade)

 

  var HW=parseInt(document.getElementById("HW").innerHTML)

  var HWGrade=parseFloat(document.getElementById("HWGrade").value)

  var currentgrade= HW*HWGrade/100
  console.log(currentgrade)

 

  var Quiz=parseInt(document.getElementById("Quiz").innerHTML)

  var QuizGrade=parseFloat(document.getElementById("QuizGrade").value)

  var currentgrade= Quiz*QuizGrade/100
  console.log(currentgrade)

  
  var PM1=parseInt(document.getElementById("PM1").innerHTML)

  var PM1Grade=parseFloat(document.getElementById("PM1Grade").value)

  var currentgrade= PM1*PM1Grade/100
  console.log(currentgrade)

  

  var PM2=parseInt(document.getElementById("PM2").innerHTML)

  var PM2Grade=parseFloat(document.getElementById("PM2Grade").value)

  var currentgrade= PM2*PM2Grade/100
  console.log(currentgrade)

  document.getElementById("currentgrade").innerHTML=currentgrade

  var currentgrade= PM2Grade +  PM1Grade+   QuizGrade+  HWGrade+  ParticipationGrade

  document.getElementById (currentgrade)
  console.log (currentgrade)


}
