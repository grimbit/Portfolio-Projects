function checkCashRegister(price, cash, cid) {
    const payment = cash*100;
    let change = payment-(price*100); 
    let cidreverse = cid.map(x=> Math.round(x[1]*100)).reverse();
    let status= {
      status: "",
      change:[]
    };
    const available = Math.round(cid.flat().filter(x=> !isNaN(x)).reduce((c,v) => c+v,0)*100);
    //currency units
    let curunit = [
      {x: "ONE HUNDRED", v: 10000},
      {x: "TWENTY", v: 2000},
      {x: "TEN", v: 1000},
      {x: "FIVE", v: 500},
      {x: "ONE", v: 100},
      {x: "QUARTER", v: 25},
      {x: "DIME", v: 10},
      {x: "NICKEL", v: 5},
      {x: "PENNY", v: 1},
    ];
   //Change library of the returned money
    let changestack = {
    };
    //check if enough change is available in cid
    if (available < change){
      status.status ="INSUFFICIENT_FUNDS";
      return status;
    } else if (change > 0 && change - available == 0){
      //if it is equal to the change due
       status.status = "CLOSED";
       status.change = cid;
       return status;
    }else{
    //if enough then subtract from change and fill in the changestack with returned change
      status.status = "OPEN";
      for(let i = 0; i<curunit.length; i++){
          while (change > 0 && change - curunit[i].v >= 0 && cidreverse[i] > 0){
              //fills in any existing values
             if (curunit[i].x in changestack){
                  change = change - curunit[i].v;
                  cidreverse[i] = cidreverse[i] - curunit[i].v;
                  changestack.[curunit[i].x] += curunit[i].v;
                  } else {
                    //adds new values if necessary
                    change = change - curunit[i].v;
                    cidreverse[i] = cidreverse[i] - curunit[i].v;
                    changestack.[curunit[i].x] = curunit[i].v;  
          }
         }  
        }
     };
       //
        if (change >  status.change.map(x=> Math.round(x[1]*100)).reduce((c,v) => c+v,0)){
          status.status ="INSUFFICIENT_FUNDS";
          return status;
    };
      //fills the status with values from changestack if any while also dividing them back in to proper values
      for (const prop in changestack){
        status.change.push([prop,changestack[prop]/100]); 
      };
    return status;
  };
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])