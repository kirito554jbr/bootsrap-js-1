// /*document.getElementById("btn").onclick = function(){
//     document.getElementById("h1").textContent = 'halo'

// }

// const questions = document.querySelectorAll('#container');


// document.getElementById("NEXT").onclick = function(){
//     Array.from(questions).forEach(function(question)){
    
//     }

// }*/

// //const questions ={

// //}


// const quizz = [
// quiz={
//     question : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     choice : ["test","test","test","test"],
// (choice) : "test",
//     id : 1
// },
// {question : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     choice : [test,test,test,test],
// },
// {
//     question : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     choice : [test,test,test,test],
// },
// {question : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     choice : [test,test,test,test],
//  },
//  {
//     question : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     choice : [test,test,test,test],
//  },
//  {
//     question : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     choice : [test,test,test,test],
//  },
//  {
//     question : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     choice : [test,test,test,test],
// },
// {
//     question : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     choice : [test,test,test,test],
//  },
//  {
//     question : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     choice : [test,test,test,test],
//  },
//  {
//     question : "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     choice : [test,test,test,test],
//  }
// ];
// console.log(quizz[0].question);



// const questionElement = document.getElementById("question");
// const answers = document.getElementById("answers");
// const nextButtons = document.getElementById("NEXT");


// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz (){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButtons.innerHTML = "Next";
//     showQuestion();
// }

// function showQuestion(){
//     // resetState();
//     let currentQuestion = quizz[0].question;
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.textContent=`${currentQuestion}`;

//     quizz[0].choice.forEach(choice) => {
//         const button = document.createElement("button");
//         button.textContent = quizz[0].choice[0];
//         button.classList.add("btne");
//         answerButtons.appendChild(button);
//         if (choice).correct){
//             button.dataset.correct (choice).correct;
//         }
//         button.addEventListener("click", selectAnswer);
//     })
// }

// // function resetState(){
// //     nextbutton.style.display = "none";
// //     while(answerButtons.firstChild){
// //         answerButtons.removeChild(answerButtons.firstChild);
// //     }
// // }

// function selectAnswer(){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if (isCorrect){  
//         selectedBtn.classList.add("correct");
//         score++;
//     }
//     else{
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answerButtons.children).forEach(button => {
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     nextButtons.style.display = "block";
// }

// function showScore(){
//     resetState();
//     questionElement.innerHtml = `Your score is ${score}`;
//     nextButtons.textContent = "Play Again";
//     nextButtons.style.display = "block";
// }

// function handelNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < question.length){
//         showQuestion();
//     }
//     else {
//         showScore(); 
//     }
// }

// nextButtons.addEventListener("click", () => {
//     if(currentQuestionIndex < question.length){
//         handelNextButton();
//     }
//     else{
//         startQuiz();
//     }
// });
// startQuiz();











// /*let i = 0;

   
//     document.getElementById("NEXT").onclick = function(){
        
//         const container = document.getElementById('container');
//       //  arr.forEach(i => {
    
// //});
//         container.innerHTML = arr[i].one
//         i++;
//     }*/

    