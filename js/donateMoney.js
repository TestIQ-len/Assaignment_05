
 document.getElementById('donate-now')
     .addEventListener('click',function(event){
        event.preventDefault();
       // console.log('this is money') ;

            // getInputFieldById() ;

            const Money = getInputFieldById('donate-amount') ;
            const addMoney = getTextFieldById('balance') ;
            //console.log('balance') ;
            //console.log(Money) ;

            if(Money > 0 || Money === "number"){
                //console.log('this is correct') ;
                console.log(addMoney) ;
                const newBalance = Money + addMoney ;
                document.getElementById('balance').innerText = newBalance ;
                my_modal_1.showModal() ;
            }
            else{
                alert('incorrect value') ;
            }

     })