const express= require('express');
const path= require("path");
const app = express ();
app.use(express.json());
const PORT= process.env.PORT || 3000;
app.get('/login',(req,res)=>{
        res.sendFile(path.join(__dirname,'Index.html')); 
        });
app.post('/login',async (req,res)=>{
        const rb= await req.body;
        res.send(rb);
});
                 app.listen(PORT,()=>{
                            console.log('server running at port 3000');
                            });
