const channels = [ 
    {
      "channel": "A",
      "name": "shoe"
    },
    {
      "channel": "A",
      "name": "electronics"
    },
    {
      "channel": "B",
      "name": "apparel"
    },
    {
      "channel": "C",
      "name": "electronics"
    }
  ];

//console.log(channels);

const groupObjectsBy = (json,key)=>{
    return json.reduce((result, value) => {
 
        (result[value[key]] = result[value[key]] || []).push(
          value
        );
        
        return result;
      }, {});
};

let ans = groupObjectsBy(channels,'channel');

console.log(ans);
