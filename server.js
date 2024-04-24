const express = require('express');
const db = require('./db')
const app = express();
const person = require('./models/person');
const port = 8000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.use(express.json());

app.get('/', (req, res) => {
 res.send("Hey from the server");
});
 
app.get('/person/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        console.log("Person ID:", personId);

        // Assuming person.find() is an asynchronous function that returns a promise
        const data = await person.find({ _id: personId });

        // Check if data exists
        if (!data) {
            return res.status(404).json({ error: 'Person not found' });
        }

        // If data is found, send it as JSON response
        res.json(data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
});

 

app.post('/person',async  (req, res) => {
try{
  
    const data = req.body;
    const newPerson = new person(data)
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
}catch(err){
    console.log(err);
    res.status(500).json({error :'Internal Server Error'});
}
})
app.get('/person',async  (req, res) => {
  try{
      const data  = await person.find()
      res.status(200).json(data);
  }catch(err){

  }
})

app.post('/', (req, res) => {
    const receivedData = req.body;
    console.log("Received Data:", receivedData);
    res.json({ message: "Data received successfully" });
  });
  
    
console.log("Hello from Server");

app.listen(port, () => {
  console.log("Server started at: localhost:" + port);
});
