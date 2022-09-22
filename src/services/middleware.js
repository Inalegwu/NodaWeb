const fetchNote=fetch("http:localhost:8080/api/notes/").then((res)=>res.json()).then((data)=>return data.data).catch((err)=>console.log(err))

module.exports=fetchNote;