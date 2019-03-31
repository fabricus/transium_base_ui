function isInstalled() {
   if (typeof web3 !== 'undefined'){
      return true;
   }
   else{
      return false;
   }
}

function isLocked() {
   web3.eth.getAccounts(function(err, accounts){
      if (err != null) {
         console.log(err);
         return true;
      }
      else if (accounts.length === 0) {
         return true;
      }
      else {
         return false;
      }
   });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
