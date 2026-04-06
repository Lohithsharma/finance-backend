require('dotenv').config();

const app=require('./src/app');
const connectDB=require('./src/db/db');

connectDB();

const port=process.env.port || 5000;

app.listen(port,()=>{
    console.log(`server us running on port ${port}`);
})