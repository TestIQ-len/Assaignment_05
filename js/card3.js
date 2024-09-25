document.getElementById('donate-now3')
.addEventListener('click',function(event){
   event.preventDefault();
  // console.log('this is money') ;

       // getInputFieldById() ;

       const Money3 = getInputFieldById3('donate-amount3') ;
       const addMoney3 = getTextFieldById3('balance3') ;
       //console.log('balance') ;
       //console.log(Money) ;

       if(Money3 > 0 || Money3 === "number"){
           //console.log('this is correct') ;
           console.log(addMoney3) ;
           const newBalance3 = Money3 + addMoney3 ;
           document.getElementById('balance3').innerText = newBalance3 ;
           my_modal_3.showModal() ;
       }
       else{
           alert('incorrect value') ;
       }

})