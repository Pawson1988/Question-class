class question {

    static score = 0
    static questionCount = 0

    constructor(question, answer1, answer2, answer3, answer4, correctAnswer){
        this.question = question
        this.answer1 = answer1
        this.answer2 = answer2
        this.answer3 = answer3
        this.answer4 = answer4
        this.correctAnswer = correctAnswer

        console.log("class object intitiated")
    }

    printQuestion(){
        console.log("Question: ", this.question)
        console.log("Option 1:", this.answer1)
        console.log("Option 2:", this.answer2)
        console.log("Option 3:", this.answer3)
        console.log("Option 4:", this.answer4, "\n")
    }

    checkQuestion(userAnswer){

        if(userAnswer === this.correctAnswer){
            console.log("correct! \n".toUpperCase())
            question.score++
        } else {
            console.log("incorrect \n".toUpperCase())
        }
    }

    static initiateQuiz(array, userAnswers){

        for(let i = 0; i < array.length; i++){

            console.log("Question: ", this.questionCount + 1)
            array[i].printQuestion()
            array[i].checkQuestion(userAnswers[i])
            this.questionCount++
        }

        console.log("Score:", this.score, "out of:", this.questionCount)
    }


}

let questions = []

questions[0] = new question("what is the definite article?", 
"the", 
"a", 
"an", 
"this", 
"the")

questions[1] = new question("He ----- swimming most days of the week", 
"like", 
"liked", 
"will like", 
"likes", 
"likes")

let userAnswers = []

userAnswers[0] = "the"
userAnswers[1] = "likes"

question.initiateQuiz(questions, userAnswers)




