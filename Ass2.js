class metadataParser{
    
    constructor(version,channel,keyfield){
        this._version = version;
        this._channel=channel;
        this._keyfield=keyfield;
      }
      getVersion(){
        return this._version;
      }

      getChannel(){
        return this.channel;
      }

      getKeyfield(){
        return this.keyfield;
      }

      setVersion(version){
        this._version=version;
      }
      
      setChannel(channel){
        this.channel=channel;
      }
      
      setKeyfield(keyfield){
        this.keyfield=keyfield;
      }

};

function getKeyfields(json){
    return json.map(json=>{
        return json._keyfield;
    });
}

const metadata1 = new metadataParser(
    1.2,2,12
);

const metadata2 = new metadataParser(
    1.3,4,14
);

console.log(metadata1.getVersion());
console.log(metadata2.getVersion());

console.log(getKeyfields([metadata1,metadata2]));
