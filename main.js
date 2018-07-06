function getfile(file,callback){
  var xhr=new XMLHttprequest();
  xhr.overrideMimeType("application/json");
  xhr.open
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
getfile("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
}
