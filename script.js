// const library = [];

// function Book(title,author,pages,status)
// {
//     this.id = crypto.randomUUID();
//     this.title = title;
//     this.author = author;  
//     this.pages = pages;
//     this.status = status;
//     this.info = ()=>`"${this.title} by ${this.author}, ${this.pages}, ${this.status}"`;
// }

// function addBookToLibrary(title,author,pages,status)
// {    
//     library.push(new Book(title,author,pages,status));
// }


// const A =addBookToLibrary("book1","a",1,"read");
// const B =addBookToLibrary("book2","a",1,"read");
// const C =addBookToLibrary("book3","a",1,"read");
// const D =addBookToLibrary("book4","a",1,"read");
// const E =addBookToLibrary("book5","a",1,"read");
// const F =addBookToLibrary("book6","a",1,"read");
// const G =addBookToLibrary("book7","a",1,"read");

// function displayBook()
// {
//     for(let i=0; i<library.length; i++)
//     {
//         console.log(library[i].id,library[i].title,library[i].author,library[i].pages,library[i].status);
//     }
// }

// displayBook();
// // console.log(library);
// // console.log(library[0].info);


let humanScore=0, computerScore=0;


function getComputerChoice()
{    
    let random = Math.floor(Math.random() * 3);

    if(random==0)
    return "Rock";

    else if(random==1)
    return "Paper";

    else if(random==2)
    return "Scissor";
}

function getHumanChoice()
{
    return (prompt("Choose", "Rock")).toUpperCase();
}

function playRound()
{
    let computer = getComputerChoice();
    let human = getHumanChoice();

    if(human=="ROCK")
    {
        if(computer == "Rock")
        {
            console.log("Computer choosed ROCK, It's a DRAW!!!");
        }
        if(computer == "Paper")
        {
            console.log("Computer choosed Paper, you LOSE!!!");
            computerScore++;
        }
        if(computer == "Scissor")
        {
            console.log("Computer choosed Scissor, you WIN!!!");
            humanScore++;
        }
    }
    else if(human=="PAPER")
    {
        if(computer == "Rock")
        {
            console.log("Computer choosed ROCK, you WIN!!!");
            humanScore++;
        }
        if(computer == "Paper")
        {
            console.log("Computer choosed Paper, It's a DRAW!!!");
        }
        if(computer == "Scissor")
        {
            console.log("Computer choosed Scissor, you LOSE!!!");
            computerScore++;
        }
    }
    else if(human=="SCISSOR")
    {
        if(computer == "Rock")
        {
            console.log("Computer choosed ROCK, you LOSE!!!");
            computerScore++;
        }
        if(computer == "Paper")
        {
            console.log("Computer choosed Paper, you WIN!!!");
            humanScore++;
        }
        if(computer == "Scissor")
        {
            console.log("Computer choosed Scissor, It's a DRAW!!!");
        }
    }
}

function playGame()
{
    for(let i=0; i<5; i++)
    {
        playRound();
    }

    console.log(`Your Score: ${humanScore} Computer Score: ${computerScore}`)

    if(humanScore>computerScore)
    {
        console.log("You Win");
    }
    else
    {
        console.log("You Lose");
    }
                
}
playGame();