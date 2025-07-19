const express= require('express');
const path= require("path");
const app = express ();
const PORT= process.env.PORT || 3000;
app.get('/login',(req,res)=>{
        res.sendFile(path.join(__dirname,'Index.html')); 
        });
app.post('/login',(req,res)={
        res.send(req.body);
}
                 app.listen(PORT,()=>{
                            console.log('server running at port 3000');
                            });
