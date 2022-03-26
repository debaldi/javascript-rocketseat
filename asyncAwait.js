/* Async / Await

    - Maneira de escrever promises
    - Syntactic Sugar
*/

const promessa = new Promise((resolve, reject) => {
    return resolve("ok");
  });
  
  async function start() {
    try {
      const result = await promessa;
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Executar Sempre!");
    }
  }
  start();
  
  /*
   promessa
   .then(function(response){
     console.log(response)
   })
   .catch(function(erro){
     console.log(erro)
   })
   .finally(function(){
     console.log('Executar Sempre')
   })
  */
  