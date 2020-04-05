navigator.serviceWorker.register('/myworker.js')
    .then((reg)=>{
        console.log("success!", reg);
    },
    ()=>{
        console.log("failure..");
    });
    