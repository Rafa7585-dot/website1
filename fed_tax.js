let income = document.querySelector("#input1");
let button = document.querySelector("#btn");
let total_t = document.querySelector("#TT");
let tax_r = document.querySelector("#TR");
let net_i = document.querySelector("#NI");
let monthly_i = document.querySelector("#MI");
let tax = 0;
let storage = 0;
button.addEventListener("click", calculate);


function calculate()
{
    tax=0;
    storage = income.value;

    if(income.value >= 11000)
    {
        tax+=1100;
        income.value-=11000;
    }

    else if(income.value < 11000)
    {
        tax = income.value*0.1;
        income.value=0;
    }

    sec_tax();
    third_tax();
    fourth_tax();
    five_tax();
    six_tax();
    sev_tax();

    TR.textContent = tax/storage;
    MI.textContent = (storage-tax)/12;
    NI.textContent = storage-tax;
    TT.textContent = tax;  
}

function sec_tax()
{
    if(income.value<33725)
    {
        tax+=income.value*0.12;
        income.value=0;
    }
    else if(income.value>= 33725)
    {
        tax+=4047;
        income.value-=33725;
    }

}

function third_tax()
{
    if(income.value<50650)
    {
        tax+=income.value*0.22;
        income.value=0;
    }
    else if(income.value>=50650)
    {
        tax+=11143;
        income.value-=50650;
    }
}

function fourth_tax()
{
    if(income.value<86725)
    {
        tax+=income.value*0.24;
        income.value=0;
    }

    else if(income.value>=86,725)
    {
        tax+=20814;
        income.value-=86,725;
    }
    
}

function five_tax()
{
    if(income.value<49,150)
    {
        tax+=income.value*0.32;
        income.value=0;
    }

    else if(income.value>=49150)
    {
        tax+=15728;
        income.value-=49150;
    }
}

function six_tax()
{
    if(income.value<346875)
    {
        tax+=income.value*0.35;
        income.value=0;
    }
    else if(income.value>=346875)
    {
        tax+=121406.25;
        income.value-=346875;
    }
}

function sev_tax()
{
    if(income.value!=0)
    {
        tax+=income.value*0.37;
        income.value=0;
    }
}
