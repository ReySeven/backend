import express from "express";
import bookRoute from "./routes/bookRoute.js";    
import studentRoutes from "./routes/studentRoutes.js";

const app = express();
app.use(express.json());

app.use('/book', bookRoute);
app.use('/student', studentRoutes);

try{
    const port = 3000;
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    }); 
} catch(e) {
    console.log(e);
}