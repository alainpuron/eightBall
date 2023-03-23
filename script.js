const answers = [" It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it",
                 "As I see it, yes", "Most likely","Outlook good","Yes","Signs point to yes","Reply hazy, try again","Ask again later",
                "Better not tell you now"," Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no",
                "My sources say no","Outlook not so good.","Very doubtful"];

var textArea = document.getElementById('question');
var whiteBall = document.getElementById('white');
var innerBall = document.getElementById('innerBall');

function submit(){

    if( document.getElementById('question').value === '' ){
        alert("What is your question?")
    }

    else{
    const random = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById("answer").innerHTML =  random;

    document.getElementById("white").style.display = "none";
    document.getElementById("innerBall").style.display = "block";


    }

}



