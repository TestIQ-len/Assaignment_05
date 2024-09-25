document.getElementById('history-btn').addEventListener('click', function() {
    // Redirect to page2.html
    window.location.href = 'history.html';
  });



  
 document.getElementById('donate-now')
 .addEventListener('click',function(event){
    event.preventDefault();
   // console.log('this is money') ;

        // getInputFieldById() ;

        const Money = getInputFieldById('donate-amount') ;
        const addMoney5 = getTextFieldById('history-donate-amount') ;
        let currentTime = getInputFieldByIdtime('time-btn') ;
        //console.log('balance') ;
        //console.log(Money) ;

        if(Money > 0 || Money === "number"){
            //console.log('this is correct') ;
            console.log(addMoney5) ;
            const newBalance5 = Money + addMoney5 ;
            document.getElementById('history-donate-amount').innerText = newBalance5 ;
           currentTime = new Date();
            console.log(currentTime);
            //my_modal_1.showModal() ;
        }
        else{
            alert('incorrect value') ;
        }

 })