navigator.serviceWorker.register('/myworker.js')
    .then((reg)=>{
        console.log("Serisuccess!", reg);
    },
    ()=>{
        console.log("failure..");
    });
    