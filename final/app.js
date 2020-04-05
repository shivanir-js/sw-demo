console.log("worker");

navigator.serviceWorker.register('/myworker.js')
    .then(function(reg){
        console.log("success!", reg);
    },
    function(){
        console.log("failure..");
    });
    
function reset() {
    navigator.serviceWorker.getRegistration().then(function(reg) {
        return reg && reg.unregister();
    });
}