const clickSubmit=document.querySelector('#loan-form')


clickSubmit.addEventListener('submit',calculateResult);
function calculateResult(e)
{
    const loanAmount=document.querySelector('#amount')
    const loanInterest=document.querySelector('#interest')
    const loanYear=document.querySelector('#years')
    const monthlyPayment=document.querySelector('#monthly-payment')
    const totalInterest=document.querySelector('#total-interest')
    const totalPayment=document.querySelector('#total-payment')
    let amount=parseFloat(loanAmount.value)
    let interest=parseFloat(loanInterest.value)
    let year=parseFloat(loanYear.value)
    let x=(amount)*(interest/100)*year;
    monthlyPayment.value=(x+amount)/(year*12);
    totalInterest.value=x;
    totalPayment.value=(x+amount)
    console.log(monthlyPayment.value + "  "+ totalPayment.value)

    e.preventDefault();
}