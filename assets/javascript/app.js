$(document).ready(function() {
  
  var currentQuestion= 0;

  function askQuestion () {
  
      $("#question").text(questions[currentQuestion].question);

      $("#choice1").text(questions[currentQuestion].choices[0]);
      $("#choice2").text(questions[currentQuestion].choices[1]);
      $("#choice3").text(questions[currentQuestion].choices[2]);
      $("#choice4").text(questions[currentQuestion].choices[3]);

      setTimeout(function(){

        console.log("check question");
  
        currentQuestion++;
        

        if (currentQuestion < 10){
          askQuestion();
        }
        else {
          console.log("display result");
        }
  
  
      },3000);




  }
  



  var questions = [

    
  {
    question: "What is the main character's name in Pretty Woman?",
    choices: ["Kit", "Roxanne", "Vivian", "Lexi"],
    answer: "Vivian",
  },

  {
    question: "Which movie is not a Tom Hanks/Meg Ryan movie?",
    choices: ["Splash", "Joe VS the Volcano", "Sleepless in Seattle", "You've Got Mail"],
    answer: "Splash",
  },

  {
    question: "What is Cher's favorite phrase in Clueless?",
    choices: ["My bad", "Oops I did it again", "As if", "Totally"],
    answer: "As if",
  },

  {
    question: "'I'll have what she's having' is from which RomCom?",
    choices: ["Pretty Woman", "Sleepless in Seattle", "French Kiss", "When Harry Met Sally"],
    answer: "When Harry Met Sally",
  },

  {
    question: "Which of these is not a Jennifer Lopez RomCom?",
    choices: ["Monster-in-Law", "The Cell", "The Back-Up Plan", "The Wedding Planner"],
    answer: "The Cell",
  },

  {
    question: "In 'Never Been Kissed', what was Josie's nickname in High School?",
    choices: ["Pussycat", "Nosy Josie", "Josie Grossy", "Jumbo Josie"],
    answer: "Josie Grossy",
  },

  {
    question: "Which RomCom featured the phrase 'As you wish'?",
    choices: ["Ever After:A Cinderella Story", "Mirror Mirror", "The Princess Bride", "Robin Hood Men in Tights"],
    answer: "The Princess Bride",
  },

  {
    question: "What song performed repeatedly in 'The Wedding Singer' isn't well recieved?",
    choices: ["Take on Me", "Pretty Woman", "Do You Really Want to Hurt Me", "Ladies Night"],
    answer: "Do You Really want to Hurt Me",
  },

  {
    question: "In 'Hitch', what is Alex Hitchens profession?",
    choices: ["Lawyer", "Chef", "Date Doctor", "Engineer"],
    answer: "Date Doctor",
  },

  {
    question: "What is the highest grossing RomCom to date?",
    choices: ["There's Something About Mary", "Pretty Woman", "Hitch", "My Big Fat Greek Wedding"],
    answer: "My Big Fat Greek Wedding",
  },
]
  
    
    askQuestion();

    

    






})

//answersArray.forEach(function(element) {
//  console.log(element);
//});





  //var correct= 0;

  //var incorrect= 0;

 // var unanswered= 0;