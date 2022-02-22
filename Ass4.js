const sortArray = function(...input){
    
    this.originalArray=input;
    
    this.getSortedArray = function(){
      return this.originalArray.sort();
    }
    
};

const sortObjectArray = function(json,key){
    sortArray.call(this,json);
    
  this._key=key;
  this.getSortedArray = function(){
        
        return this.originalArray[0].sort( (a,b)=>{
         if(isNaN(Number(a[key]))){
          return a[key].localeCompare(b[key]);
          }
          else{
          return Number(a[key])-Number(b[key]);
          } 
         
       })
      
   }
   
};
  
sortObjectArray.prototype=Object.create(SortArray.prototype);

  
