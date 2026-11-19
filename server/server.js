const express = require('express');
const cors = require("cors");
const PORT = 3000;

const app = express();

app.use(cors());

app.use(express.json());

const quizzes = [
    {
        id: 1,
        title: "Java Quiz",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        questions: [
            {
                id: 1,
                title: "What is Java?",
                options: [
                    { id: 1, title: "Programming Language", isCorrect: true },
                    { id: 2, title: "Operating System", isCorrect: false },
                    { id: 3, title: "Database", isCorrect: false },
                    { id: 4, title: "Web Browser", isCorrect: false }
                ]
            },
            {
                id: 2,
                title: "Who developed Java?",
                options: [
                    { id: 1, title: "Microsoft", isCorrect: false },
                    { id: 2, title: "James Gosling", isCorrect: true },
                    { id: 3, title: "Dennis Ritchie", isCorrect: false },
                    { id: 4, title: "Guido van Rossum", isCorrect: false }
                ]
            },
            {
                id: 3,
                title: "Which keyword is used to create a class in Java?",
                options: [
                    { id: 1, title: "function", isCorrect: false },
                    { id: 2, title: "struct", isCorrect: false },
                    { id: 3, title: "class", isCorrect: true },
                    { id: 4, title: "define", isCorrect: false }
                ]
            },
            {
                id: 4,
                title: "Which method is the entry point of a Java application?",
                options: [
                    { id: 1, title: "start()", isCorrect: false },
                    { id: 2, title: "main()", isCorrect: true },
                    { id: 3, title: "run()", isCorrect: false },
                    { id: 4, title: "execute()", isCorrect: false }
                ]
            },
            {
                id: 5,
                title: "Which data type stores true or false?",
                options: [
                    { id: 1, title: "int", isCorrect: false },
                    { id: 2, title: "String", isCorrect: false },
                    { id: 3, title: "boolean", isCorrect: true },
                    { id: 4, title: "char", isCorrect: false }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "JavaScript Quiz",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        questions: [
            {
                id: 1,
                title: "What is JavaScript mainly used for?",
                options: [
                    { id: 1, title: "Making web pages interactive", isCorrect: true },
                    { id: 2, title: "Managing databases only", isCorrect: false },
                    { id: 3, title: "Creating operating systems only", isCorrect: false },
                    { id: 4, title: "Designing hardware", isCorrect: false }
                ]
            },
            {
                id: 2,
                title: "Which keyword declares a block-scoped variable?",
                options: [
                    { id: 1, title: "var", isCorrect: false },
                    { id: 2, title: "let", isCorrect: true },
                    { id: 3, title: "define", isCorrect: false },
                    { id: 4, title: "int", isCorrect: false }
                ]
            },
            {
                id: 3,
                title: "Which symbol is used for strict equality?",
                options: [
                    { id: 1, title: "==", isCorrect: false },
                    { id: 2, title: "=", isCorrect: false },
                    { id: 3, title: "===", isCorrect: true },
                    { id: 4, title: "!=", isCorrect: false }
                ]
            },
            {
                id: 4,
                title: "Which method converts JSON text into a JavaScript object?",
                options: [
                    { id: 1, title: "JSON.stringify()", isCorrect: false },
                    { id: 2, title: "JSON.parse()", isCorrect: true },
                    { id: 3, title: "JSON.convert()", isCorrect: false },
                    { id: 4, title: "JSON.object()", isCorrect: false }
                ]
            },
            {
                id: 5,
                title: "Which keyword is used to define a function?",
                options: [
                    { id: 1, title: "method", isCorrect: false },
                    { id: 2, title: "function", isCorrect: true },
                    { id: 3, title: "func", isCorrect: false },
                    { id: 4, title: "define", isCorrect: false }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Python Quiz",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        questions: [
            {
                id: 1,
                title: "Who created Python?",
                options: [
                    { id: 1, title: "James Gosling", isCorrect: false },
                    { id: 2, title: "Dennis Ritchie", isCorrect: false },
                    { id: 3, title: "Guido van Rossum", isCorrect: true },
                    { id: 4, title: "Brendan Eich", isCorrect: false }
                ]
            },
            {
                id: 2,
                title: "Which symbol is used for comments in Python?",
                options: [
                    { id: 1, title: "//", isCorrect: false },
                    { id: 2, title: "#", isCorrect: true },
                    { id: 3, title: "/*", isCorrect: false },
                    { id: 4, title: "--", isCorrect: false }
                ]
            },
            {
                id: 3,
                title: "Which data type stores multiple key-value pairs?",
                options: [
                    { id: 1, title: "List", isCorrect: false },
                    { id: 2, title: "Tuple", isCorrect: false },
                    { id: 3, title: "Dictionary", isCorrect: true },
                    { id: 4, title: "Set", isCorrect: false }
                ]
            },
            {
                id: 4,
                title: "Which function displays output in Python?",
                options: [
                    { id: 1, title: "echo()", isCorrect: false },
                    { id: 2, title: "print()", isCorrect: true },
                    { id: 3, title: "displayText()", isCorrect: false },
                    { id: 4, title: "write()", isCorrect: false }
                ]
            },
            {
                id: 5,
                title: "Which keyword is used to define a function in Python?",
                options: [
                    { id: 1, title: "function", isCorrect: false },
                    { id: 2, title: "fun", isCorrect: false },
                    { id: 3, title: "def", isCorrect: true },
                    { id: 4, title: "define", isCorrect: false }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "HTML & CSS Quiz",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        questions: [
            {
                id: 1,
                title: "What does HTML stand for?",
                options: [
                    { id: 1, title: "Hyper Text Markup Language", isCorrect: true },
                    { id: 2, title: "High Text Machine Language", isCorrect: false },
                    { id: 3, title: "Hyper Tool Multi Language", isCorrect: false },
                    { id: 4, title: "Home Text Markup Language", isCorrect: false }
                ]
            },
            {
                id: 2,
                title: "Which HTML tag is used to create a hyperlink?",
                options: [
                    { id: 1, title: "<link>", isCorrect: false },
                    { id: 2, title: "<a>", isCorrect: true },
                    { id: 3, title: "<href>", isCorrect: false },
                    { id: 4, title: "<url>", isCorrect: false }
                ]
            },
            {
                id: 3,
                title: "Which CSS property changes text color?",
                options: [
                    { id: 1, title: "background", isCorrect: false },
                    { id: 2, title: "font-style", isCorrect: false },
                    { id: 3, title: "color", isCorrect: true },
                    { id: 4, title: "text-align", isCorrect: false }
                ]
            },
            {
                id: 4,
                title: "Which HTML tag is used to display an image?",
                options: [
                    { id: 1, title: "<image>", isCorrect: false },
                    { id: 2, title: "<img>", isCorrect: true },
                    { id: 3, title: "<picture-src>", isCorrect: false },
                    { id: 4, title: "<src>", isCorrect: false }
                ]
            },
            {
                id: 5,
                title: "Which CSS property makes text bold?",
                options: [
                    { id: 1, title: "font-weight", isCorrect: true },
                    { id: 2, title: "font-size", isCorrect: false },
                    { id: 3, title: "text-decoration", isCorrect: false },
                    { id: 4, title: "font-family", isCorrect: false }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Computer Fundamentals Quiz",
        img: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
        questions: [
            {
                id: 1,
                title: "What is the brain of a computer?",
                options: [
                    { id: 1, title: "RAM", isCorrect: false },
                    { id: 2, title: "CPU", isCorrect: true },
                    { id: 3, title: "Hard Disk", isCorrect: false },
                    { id: 4, title: "Monitor", isCorrect: false }
                ]
            },
            {
                id: 2,
                title: "What does RAM stand for?",
                options: [
                    { id: 1, title: "Read Access Memory", isCorrect: false },
                    { id: 2, title: "Random Access Memory", isCorrect: true },
                    { id: 3, title: "Run Active Memory", isCorrect: false },
                    { id: 4, title: "Rapid Action Module", isCorrect: false }
                ]
            },
            {
                id: 3,
                title: "Which of these is an input device?",
                options: [
                    { id: 1, title: "Monitor", isCorrect: false },
                    { id: 2, title: "Printer", isCorrect: false },
                    { id: 3, title: "Keyboard", isCorrect: true },
                    { id: 4, title: "Speaker", isCorrect: false }
                ]
            },
            {
                id: 4,
                title: "Which number system does a computer use internally?",
                options: [
                    { id: 1, title: "Decimal", isCorrect: false },
                    { id: 2, title: "Binary", isCorrect: true },
                    { id: 3, title: "Octal", isCorrect: false },
                    { id: 4, title: "Roman", isCorrect: false }
                ]
            },
            {
                id: 5,
                title: "Which of these is an operating system?",
                options: [
                    { id: 1, title: "Google Chrome", isCorrect: false },
                    { id: 2, title: "Microsoft Word", isCorrect: false },
                    { id: 3, title: "Linux", isCorrect: true },
                    { id: 4, title: "MySQL", isCorrect: false }
                ]
            }
        ]
    }
];



app.get("/quiz/all", (req, res) => {
    try {
        const filterQuiz = quizzes.map((quiz) => {
            return {
                title: quiz.title,
                id: quiz.id,
                img: quiz.img
            }
        })

        res.status(200).json({ success: true, data: filterQuiz });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "fail load quiz"
        })
    }
})

app.get('/question/:id', (req, res) => {
    try {
        const id = req.params.id;
        const quiz = quizzes.find((quiz) => quiz.id == id);

        // tansformation 
        const questions = quiz?.questions?.map((question) => {
            return {
                id: question.id,
                title: question.title,
                options: question?.options.map((option) => {
                    return {
                        id: option.id,
                        title: option.title
                    }
                })
            }
        })

        res.status(200).json({ success: true, data: questions });


    }
    catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "fail to load question" });
    }


})


app.post('/submit/quiz/:quizId', (req, res) => {
    try {
        const id = req.params.quizId;

        const selected = req.body;
        console.log(req.body);
        //   search for quiz 
        const quiz = quizzes.find((quiz) => id == quiz.id)
        // 

        const result = quiz?.questions?.map((ques) => {
            const selectedOptionId = selected[ques.id];
            let temp;
            ques?.options.forEach((option) => {
                if (option.isCorrect) {
                    isCorrect = selectedOptionId == option.id ? true : false;
                    temp = {
                        questionId: ques.id,
                        isCorrect: isCorrect,
                        selectedOptionId: selectedOptionId,
                        correctOptionId: option.id
                    }
                }
            }
            )
            return temp;
        })
        res.status(200).json({ data: result });
    } catch (error) {
        console.log(error);
    }
})


app.listen(PORT, () => {
    console.log(`Sever is listening on ${PORT}`)
})