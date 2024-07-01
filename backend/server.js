const express = require('express');
const port = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
// main routes which point to modal router  
app.use('/api/users', require('./api/users'))

app.listen(port,()=>{       // assign port and connect server to the port
    console.log(`server running on port ${port}`)
})