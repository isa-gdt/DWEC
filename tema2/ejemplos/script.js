
    // Array definido 1 a 1
    
    let miVector = []; // let miVector=new Array(); es equivalente
    
    miVector[0] = 22;
    
    miVector[1] = 12;
    
    miVector[2] = 33;

    function tresCinco() {

        let arr = ["1", "10", "100", "1000"];
        
      /*  for (let i = 0; i < arr.length && arr[i] < 500; i++)
        {   
        console.log(i);
        } // Mostrará 0,1,2*/

        for (let i = 0; i < arr.length; i++){
            if (arr[i] < 500){
                console.log(i); //imprime indice. Con arr[i] imprime el array
            }
        }


    }