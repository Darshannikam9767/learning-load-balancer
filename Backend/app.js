import express from "express"
import cors from "cors"
const app = express();
const port = 3000;
app.listen(port);

app.use(cors({
    origin:"http://localhost:5173"
}))

app.use(express.json())
app.get("/health",async (req,res) => {
    console.log(`BACKEND IS RUNNING ON PORT = ${port}`);
    
    res.send(`BACKEND IS RUNNING ON PORT = ${port}`);
});

app.post("/api/calculate", async (req, res) => {
    const {num1,num2} = req.body;
    
    const sum = (Number(num1) + Number(num2));

    return res.status(200).json({
        sum:sum
    })
});