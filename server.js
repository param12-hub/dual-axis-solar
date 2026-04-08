const express = require("express");
const app = express();

app.use(express.static("public"));

let data = {
sunX:0,
sunY:0,
panelX:0,
panelY:0,
errorX:0,
errorY:0
};

/* ESP32 SEND DATA HERE */

app.get("/update", (req,res)=>{

data.sunX=req.query.sunX;
data.sunY=req.query.sunY;
data.panelX=req.query.panelX;
data.panelY=req.query.panelY;
data.errorX=req.query.errorX;
data.errorY=req.query.errorY;

res.send("OK");

});

/* DASHBOARD READS DATA */

app.get("/data",(req,res)=>{
res.json(data);
});

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
console.log("Server running");
});
