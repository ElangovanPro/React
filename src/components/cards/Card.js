const Card=()=>{
    
    //normal function call

    //  function double(num){
    //     return num*2;
    //  }

    // function addFive(num){
    //     return num+5;
    //  }
    
    //  function square(num){
    //     return num*num;
    //  }

    //  const result1=double(2);
    //  const result2=addFive(result1);
    //  const result3=square(result2);

    //  console.log(result3);

      //callback hell
    //  function double(num, callback){
    //    setTimeout(()=>{
    //    console.log("doubling : "+num);
    //    callback(num*2);
    //     },2000)
    //  }

    // function addFive(num ,callback){
    //     setTimeout(()=>{
    //            console.log("adding 5 to : "+num);
    //            callback(num+5);
    //     }, 2000)
        
    //  }
    
    //  function square(num, callback){
    //       setTimeout(()=>{
    //            console.log("squaring to : "+num);
    //              callback(num*num);
    //     }, 2000)
    //  }


    // //callback hell
    //  double(2, (result1)=>{
    //     addFive(result1, (result2)=>{
    //         square(result2, (result3)=>{
    //             console.log("final result = "+ result3);
    //         })
    //     })
    //  });


    //promise

//     function double(num){
//        return new Promise(
//         (resolve)=>{
//          setTimeout(()=>{
//             console.log("doubling :" + num)
//             resolve(num*2);
//          }, 2000)
//        })
//      }
//        function addFive(num){
//        return new Promise(
//         (resolve)=>{
//          setTimeout(()=>{
//             console.log("add five :" + num)
//             resolve(num+5);
//          }, 2000)
//        })
//      }
//        function square(num){
//        return new Promise(
//         (resolve)=>{
//          setTimeout(()=>{
//             console.log("squaring :" + num)
//             resolve(num*num);
//          }, 2000)
//        })
//      }

//    double(2)
//    .then(addFive)
//    .then(square)
//    .then((finalResult)=>{
//     console.log("final Result : "+finalResult)
//    }).catch((err)=>{
//        console.log("Erro"+ err);
//    });

   //async/await

    function double(num){
       return new Promise(
        (resolve)=>{
         setTimeout(()=>{
            console.log("doubling :" + num)
            resolve(num*2);
         }, 2000)
       })
     }
       function addFive(num){
       return new Promise(
        (resolve, reject)=>{
         setTimeout(()=>{
            if(num>5){
             reject("Number can't be greater than 5");
            }
            else{
          console.log("add five :" + num)
            resolve(num+5);
            }
         }, 2000)
       })
     }
       function square(num){
       return new Promise(
        (resolve)=>{
         setTimeout(()=>{
            console.log("squaring :" + num)
            resolve(num*num);
         }, 2000)
       })
     }
   
    async function calculation(){
        try{
const result1= await double(2);
const result2= await addFive(result1);
const result3= await square(result2);
console.log(result3);
        }
        catch(err){
            console.error("i'm catching the error = "+err)
        }
     }
calculation();
    return (
    <>
    
    
    </>
    );
}


export default Card;
