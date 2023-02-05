let inputs = document.getElementsByTagName("input");
let button = document.getElementById("button");
let h6 = document.getElementById("xd");


for(let i = 0; i < inputs.length; i++)
{
    inputs[i].addEventListener("input", entrada);
}

function entrada(e)
{
    //regex
    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    let contador = 0; 
    for(let i = 0; i<inputs.length; i++)
    {
        if(inputs[i].value.length > 1)
        {
            contador++;
        }
    }
    /*Validamos que los 4 campos estén rellenados y que cumpla la psw*/
    if(contador == 4 && !(inputs[3].value.match(passw)))
    {
        button.disabled = true;
        h6.style.display = "block";
        h6.innerText = "Your password must contain 8 characters, an uppercase and a number"
    }
    /*Listop*/
    else if(contador == 4 && inputs[3].value.match(passw))
    {
         h6.style.display = "none";
         button.disabled = false;
    }
    /*Los campos no fueron rellenados completamente*/
    else
    {
        button.disabled = true;
        h6.style.display = "block";
        h6.innerText = "Please fill the entire form"
    }
}

function isNumber(char) 
{
    return /^\d$/.test(char);
}