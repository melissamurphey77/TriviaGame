$("#startbtn").on('click', function(){
  $("#startbtn").remove();
 
 
})



$(document).ready(function() {



  
  //var correct= 0;

  //var incorrect= 0;

 // var unanswered= 0;

   //$("#quizstart").hide
 


  
  var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 15,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    countdown: function(){
      game.counter--;
      $('#counter').html(game.counter);
      if (game.counter<=0){
        console.log("TIMES UP!");
        game.timesUp();
      }

    },
    askQuestion: function(){
      timer=setInterval(fame.countdown, 1000);
      $("#question").text(questions[currentQuestion].question);

      $("#choice1").text(questions[currentQuestion].choices[0]);
      $("#choice2").text(questions[currentQuestion].choices[1]);
      $("#choice3").text(questions[currentQuestion].choices[2]);
      $("#choice4").text(questions[currentQuestion].choices[3]);


    },
    timesUp: function(){

    },
    results: function(){

      
      // Pretty Woman good quiz giphy
      // https://media.giphy.com/media/rBS2GkR5XKUpO/giphy.gif

    },
    clicked: function(){

    },
    answerCorrect: function(){

      // // Sally correct answer giphy
      // https://media.giphy.com/media/6K5SCeSjNXJgk/giphy-downsized.gif

    },
    answerIncorrect: function(){


      // Pretty Woman incorrect giphy
      // https://media.giphy.com/media/26ybvVb9iSmht7LdC/giphy-downsized.gif

    },
    reset: function(){
      
      // the end giphy
      // https://media.giphy.com/media/l4FAPaGGeB7D1LfIA/giphy.gif
    },









  }
  
  
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
  
  
      },15000);




  }
  



  var questions = [

    
  {
    question: "What is the main character's name in Pretty Woman?",
    choices: ["Kit", "Roxanne", "Vivian", "Lexi"],
    answer: "Vivian",
    //gif: https://giphy.com/gifs/zCrBibfCxTQOY/html5
  },

  {
    question: "Which movie is not a Tom Hanks/Meg Ryan movie?",
    choices: ["Sleepless in Seattle", "Joe VS the Volcano", "Splash", "You've Got Mail"],
    answer: "Splash",
    //gif: https://giphy.com/gifs/rJwQZMBv979Sg/html5
  },

  {
    question: "What is Cher's favorite phrase in Clueless?",
    choices: ["My bad", "Oops I did it again", "As if", "Totally"],
    answer: "As if",
    //gif: https://giphy.com/gifs/3o7aTIGlhSo1bL8QUg/html5
  },

  {
    question: "'I'll have what she's having' is from which RomCom?",
    choices: ["Pretty Woman", "Sleepless in Seattle", "When Harry Met Sally", "French Kiss"],
    answer: "When Harry Met Sally",
    //gif: https://giphy.com/gifs/l4HnWa5toF8gtBhLO/html5
  },

  {
    question: "Which of these is not a Jennifer Lopez RomCom?",
    choices: ["Monster-in-Law", "The Cell", "The Back-Up Plan", "The Wedding Planner"],
    answer: "The Cell",
    //gif: https://giphy.com/gifs/dGTZhZakoYHWE/html5
  },

  {
    question: "In 'Never Been Kissed', what was Josie's nickname in High School?",
    choices: ["Pussycat", "Nosy Josie", "Josie Grossy", "Jumbo Josie"],
    answer: "Josie Grossy",
    //gif: https://giphy.com/gifs/xsmUJLxjV7ww8/html5
  },

  {
    question: "Which RomCom featured the phrase 'As you wish'?",
    choices: ["Ever After: A Cinderella Story", "Mirror Mirror", "The Princess Bride", "Robin Hood Men in Tights"],
    answer: "The Princess Bride",
    //gif: https://giphy.com/gifs/zZGz30GiclDFu/html5
  },

  {
    question: "What song performed repeatedly in 'The Wedding Singer' isn't well recieved?",
    choices: ["Take on Me", "Pretty Woman", "Do You Really Want to Hurt Me", "Ladies Night"],
    answer: "Do You Really want to Hurt Me",
    //gif: https://giphy.com/gifs/XzKvhlMTolr4A/html5
  },

  {
    question: "In 'Hitch', what is Alex Hitchens profession?",
    choices: ["Lawyer", "Chef", "Date Doctor", "Accountant"],
    answer: "Date Doctor",
    //gif: https://giphy.com/gifs/ieuOedYyNgz6M/html5
  },

  {
    question: "What is the highest grossing RomCom to date?",
    choices: ["There's Something About Mary", "My Big Fat Greek Wedding", "Hitch", "Pretty Woman"],
    answer: "My Big Fat Greek Wedding",
    //gif: https://giphy.com/gifs/3oz8xRnhiL4kfVEvgQ/html5
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