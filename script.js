function checkGrade(evt) {
  var grade =parseFloat(evt.currentTarget.value);

  if (grade > 100 || grade < 0) {
    console.log("Wrong value")
    evt.currentTarget.style.color = "red"
  } else {
    console.log("Correct Value")
    evt.currentTarget.style.color = "black"

  }

}

function GradeCalculator()
        {
            var Participation =parseInt(document.getElementById('Participation').innerHTML);
            var HW=parseInt(document.getElementById('HW').innerHTML);
            var Quiz=parseInt(document.getElementById('Quiz').innerHTML);
            var PM1=parseInt(document.getElementById("PM1").innerHTML);
            var PM2=parseInt(document.getElementById('PM2').innerHTML);


            var ParticipationGrade =parseFloat(document.getElementById('ParticipationGrade').value);
            var HWGrade =parseFloat(document.getElementById('HWGrade').value);
            var QuizGrade =parseFloat(document.getElementById('QuizGrade').value);
            var PM1Grade =parseFloat(document.getElementById('PM1Grade').value);
            var PM2Grade =parseFloat(document.getElementById('PM2Grade').value);

            if (ParticipationGrade > 100) {alert("Your partcipation should be a grade from 0 to 100")
            }
            if (HWGrade > 100) {alert("Your homework should be a grade from 0 to 100")
            }
            if (QuizGrade > 100) {alert("Your quiz should be a grade from 0 to 100")
            }
            if(PM1Grade > 100) {alert("Your Project Milestone 1 should be a grade from 0 to 100")
            }
            if (PM2Grade > 100) {alert("Your Project Milestone 1 should be a grade from 0 to 100")
            }
            


            var Current_Grade = Participation*ParticipationGrade/100 + HW*HWGrade/100 + Quiz*QuizGrade/100 + PM1*PM1Grade/100 + PM2*PM2Grade/100

            var display=document.getElementById('outputGrade');
            display.innerHTML=' Current Grade: ' + Current_Grade;
            
        }

function LetterGrade() {
      var Participation =parseInt(document.getElementById('Participation').innerHTML);
            var HW=parseInt(document.getElementById('HW').innerHTML);
            var Quiz=parseInt(document.getElementById('Quiz').innerHTML);
            var PM1=parseInt(document.getElementById("PM1").innerHTML);
            var PM2=parseInt(document.getElementById('PM2').innerHTML);


            var ParticipationGrade =parseFloat(document.getElementById('ParticipationGrade').value);
            var HWGrade =parseFloat(document.getElementById('HWGrade').value);
            var QuizGrade =parseFloat(document.getElementById('QuizGrade').value);
            var PM1Grade =parseFloat(document.getElementById('PM1Grade').value);
            var PM2Grade =parseFloat(document.getElementById('PM2Grade').value);


            var Current_Grade = Participation*ParticipationGrade/100 + HW*HWGrade/100 + Quiz*QuizGrade/100 + PM1*PM1Grade/100 + PM2*PM2Grade/100
      
      
      if (Current_Grade <= 100 && Current_Grade >=90) {letter_grade = "A"}

      if (Current_Grade < 90 && Current_Grade >=80) {letter_grade = "B"}

      if (Current_Grade < 80 && Current_Grade >=70) {letter_grade = "C"}

      if (Current_Grade < 70  && Current_Grade>=60 ){letter_grade = "D"}
      
      if (Current_Grade < 60) {letter_grade = "F"}

      var display=document.getElementById('LetterGrade');
            display.innerHTML=' Current Letter Grade: ' + letter_grade;
      
      }
