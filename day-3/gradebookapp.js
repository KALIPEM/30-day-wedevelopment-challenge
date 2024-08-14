function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) { // here the const score makes each element inside the scores array into a const variable of score.
      sum += score;
    }
  
    return sum / scores.length;
  }
  function getGrade(score) {
    let grade;
  
    if (score < 60){
      return "F";
    }else if(score < 70){
      return "D";
    }else if(score < 80){
      return "C";
    }else if(score < 90){
      return "B";
    }else if(score < 100){
      return "A";
    }else if(score === 100){
      return "A++";
    }
  }
    
  /*The teacher is really happy with the program you have created so far. 
  But now they want to have an easy way to check if a student has a passing grade. 
  A passing grade is anything that is not an "F".
  
  Complete the function hasPassingGrade that takes a student score as a parameter. 
  Your function should return true if the student has a passing grade and false if they do not.*/
  function hasPassingGrade(score) {
    if (score > 59){
      return true;
    }else return false;
  }
  
  function studentMsg(totalScores, studentScore) {
    let avg = getAverage(totalScores);
    let grade= getGrade(studentScore);
    if(studentScore > 59){
      return "Class average: " + avg + "."  + " Your grade: " + grade +". You passed the course.";
      } else return "Class average: " + avg + "."  + " Your grade: " + grade +". You failed the course.";
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));