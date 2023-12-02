const picture = document.getElementById("pics");
let input_letter = document.querySelector("#input1");
let sub_button = document.querySelector("#btn");
let new_button = document.querySelector("#btn2");
let choosen = document.querySelector("#picked");
let letter_found=false;
let letter_got = 0;
let letter = [];
var words = ["homework", "umbrella", "champion", "dinosaur"];
let fname = words[Math.floor(Math.random() * words.length)];
let fail = 0;
let audio_correct = new Audio("ding.mp3");
let audio_wrong = new Audio("wrong.mp3");
letter[0] = document.querySelector("#letter1");
letter[1] = document.querySelector("#letter2");
letter[2] = document.querySelector("#letter3");
letter[3] = document.querySelector("#letter4");
letter[4] = document.querySelector("#letter5");
letter[5] = document.querySelector("#letter6");
letter[6] = document.querySelector("#letter7");
letter[7] = document.querySelector("#letter8");
sub_button.addEventListener("click", buttonclicked);
sub_button.addEventListener("click", checker);
sub_button.addEventListener("click", failchecker);
new_button.addEventListener("click", New_game);

function correct_noise()
{
    audio_correct.volume = 0.5;
    audio_correct.play();
}

function wrong_noise()
{
    audio_wrong.volume = 0.5;
    audio_wrong.play();
}

function random_Word()
{
    fname = words[Math.floor(Math.random() * words.length)];
}

function failchecker()
{
    if (fail == 6)
    {
        for(let i = 0; i < 8; i++)
        {
            letter[i].textContent = fname[i];

        }
        alert("Game Over");
    }
    if (letter_got == 8)
    {
        alert("You Won!");
    }
}
function New_game ()
{
    for(let n = 0; n<8;n++)
    {
        letter[n].textContent = "?";
    }
    letter_got=0;
    fail=0;
    picture.src = "hang.png";
    choosen.textContent = " ";
    random_Word();

}
function buttonclicked()
{
    choosen.textContent = input_letter.value + " " + picks.textContent;
}
function checker()
{
    letter_found=false;
    for(let i = 0; i <8; i++)
    {
        if(fname[i] == input_letter.value)
        {
            correct_noise()
            letter_found = true;
            letter[i].textContent = input_letter.value;
            letter_got +=1;
        }
    }
    input_letter.value="";
    if(letter_found == false)
    {
        fail += 1;
        wrong_noise()
        if (fail == 1)
        {
            picture.src = "hangman1.png";
        }
        if (fail == 2)
        {
            picture.src = "hangman2.png";
        }
        if (fail == 3)
        {
            picture.src = "hangman3.png";
        }
        if (fail == 4)
        {
            picture.src = "hangman4.png";
        }
        if (fail == 5)
        {
            picture.src = "hangman5.png";
        }
        if (fail == 6)
        {
            picture.src = "hangman6.png";
        }
        alert("incorrect letter " + fail);
    }
}