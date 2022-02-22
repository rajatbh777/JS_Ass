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
        
        return this.originalArray.sort( (a,b)=>{
         if(isNaN(Number(a[_key]))){
          return a[_key].localeCompare(b[_key]);
          }
          else{
          return Number(a[_key])-Number(b[_key]);
          } 
         
       })
      
   }
   
};
  
sortObjectArray.prototype=Object.create(SortArray.prototype);

  