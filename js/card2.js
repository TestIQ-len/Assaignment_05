
document.getElementById('donate-now2')
.addEventListener('click',function(event){
   event.preventDefault();
  // console.log('this is money') ;

       // getInputFieldById() ;

       const Money2 = getInputFieldById2('donate-amount2') ;
       const addMoney2 = getTextFieldById2('balance2') ;
       //console.log('balance') ;
       //console.log(Money) ;

       if(Money2 > 0 || Money2 === "number"){
           //console.log('this is correct') ;
           console.log(addMoney2) ;
           const newBalance2 = Money2 + addMoney2 ;
           document.getElementById('balance2').innerText = newBalance2 ;
           my_modal_2.showModal() ;
       }
       else{
           alert('incorrect value') ;
       }

})