var humanScore = 0
var computerScore =0
function getComputerChoice()
{
   let number = Math.floor(Math.random()*3)+1
   if(number== 1)
    return "r"
   else if(number == 2)
    return "p"
else
    return "s"

}

function getHumanChoice() 
{
   let choice = prompt("r for rock, p for paper or s for scissors");
   return choice;
}


 function playGame()
 {
    
    playRound(getHumanChoice(), getComputerChoice())

    
    
    function playRound(humanChoice, computerChoice)
    {
     if(humanChoice == computerChoice)
     {
        console.log("tie")

     }
        else if(humanChoice =='r'&& computerChoice=='s')
            {
               humanScore++
               console.log("you won! " + humanChoice+ "  beats " + computerChoice ) 
            }
            else if(humanChoice == 's' && computerChoice=='p')
                 {
               humanScore++
               console.log("you won! " + humanChoice+ " beats " + computerChoice ) 
            }
              else if(humanChoice == 'p' && computerChoice=='r')
                 {
               humanScore++
               console.log("you won! " + humanChoice+ "  beats " + computerChoice ) 
            }
                else
                     {
               computerScore++
               console.log("you lose! " + computerChoice+ " beats " + humanChoice) 
            }

    }

 }
 
 playGame()
 playGame()
 playGame()
 playGame()
 playGame()

 if(humanScore > computerScore)
    console.log("final result you won")
else if(humanScore < computerScore)
    console.log("final result you lose")
else
    console.log("final result tie")
