console.log('HELLO WOLRD I AM BACK');


let data=[
    {
        id:1,
        question:"Which one is the greatest footballer",
        answers:[
            {answer: "Leonardo Da vinci",isCorrect: false},
            {answer: "Leo Messi",isCorrect: true},
            {answer: "Al pacino",isCorrect: false},
            {answer: "Lebrom James",isCorrect: false},
            
        ]
    },
    {
        id:2,
        question:"Which one is the UFC fighter",
        answers:[
            {answer: "Leonardo Da vinci",isCorrect: false},
            {answer: "Connor MacgREGOR",isCorrect: true},
            {answer: "Al pacino",isCorrect: false},
            {answer: "Lebrom James",isCorrect: false},
            
        ]
    },
    {
        id:3,
        question:"Which football player has won the most Ballon d'Or awards ?",
        answers:[
            {answer: "Cristiano Ronaldo",isCorrect: false},
            {answer: "Michel Platini",isCorrect: false},
            {answer: "Johan Cruyff",isCorrect: false},
            {answer: "Lionel Messi",isCorrect: true},
            
        ]
    },

]

let quesIndex=0;

let answerContainer=document.querySelector(".answers");
let answer=document.querySelector(".answer");

console.log(data[0].question);
console.log(data[0].answers[0].answer);


let btn=document.getElementById("btn");


let correct=document.querySelector(".correct");
let wrong=document.querySelector(".wrong");

let selectedAnswer;

let selectAnswer =() => {

    
    selectedAnswer=null;
    answerContainer.querySelectorAll("input").forEach(lauda=> {
            lauda.addEventListener("click", (e)=> {
            console.log(e.target.value);
                    selectedAnswer=e.target.value;
            })
    } )
  }

  let correctAns=0;
let wrongAns=0;


let submitAnswer =() => {
    btn.addEventListener("click", () => {
        if(selectedAnswer !== null){
        selectedAnswer === "true" ? correctAns++ : wrongAns++
        quesIndex++
        questionFunc(quesIndex)
        }
        else{
            alert("Select an answer")
        }
    })
  }

  submitAnswer()


const questionFunc =(quesNumber) => {
    if(quesIndex >= data.length){ 
       
        
        return displayResult()
    }
let ques=document.querySelector(".question");
ques.textContent=data[quesNumber].question;

// console.log(data[quesNumber].answers);
answerContainer.innerHTML=data[quesNumber].answers.map((item,index) => {
    return `<div class="answer">

    <input type="radio"  name="game" id="${index}" value="${item.isCorrect}">
        <label for="${index}">${item.answer}</label>
    </div>`
}).join('');
// answerContainer.innerHTML=data[quesNumber].answers.map((item,index) => {
//    ` <div class="answer">
//    
//     </div>`
// })
selectAnswer()


}

questionFunc(quesIndex);





let resultScreen=document.querySelector(".result");
let gameScreen=document.querySelector(".game");
let score=document.querySelector(".score");

let playAgain=document.querySelector(".play");


let displayResult = () =>{
    resultScreen.style.display="block";
    gameScreen.style.display="none";

   correct.innerHTML=`Correct ans :${correctAns}`
   wrong.innerHTML=`Wrong ans :${wrongAns}`
   score.innerHTML=`Score :${(correctAns)/(correctAns+wrongAns)*100}`

}

playAgain.addEventListener("click",()=>{

console.log("helo play");

    quesIndex=0;
    questionFunc(quesIndex);
    resultScreen.style.display="none";
    gameScreen.style.display="block";
    correctAns=0;
    wrongAns=0;
})


 
  


  




  

