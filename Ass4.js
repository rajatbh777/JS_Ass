function sortArray(...input){
    
    this.originalArray=input;
    
    this.getSortedArray = function(){
      return this.originalArray.sort();
    }
    
};

function sortObjectArray(json,key){
    sortArray.call(this,json,key);

    this.getSortedArray = function(){
        
        return this.originalArray[0].sort( (a,b)=>{
         if(isNaN(Number(a[this.originalArray[1]]))){
          return a[this.originalArray[1]].localeCompare(b[this.originalArray[1]]);
          }
          else{
          return Number(a[this.originalArray[1]])-Number(b[this.originalArray[1]]);
          } 
         
       })
      
   }
   
};
  
sortObjectArray.prototype=Object.create(SortArray.prototype);

  
