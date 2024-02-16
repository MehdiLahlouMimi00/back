const express = require("express");
const cors = require('cors');
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose")
const Onde = require("./onde");
const Plainte = require("./plainte");
const Enfant = require("./enfant");


const server = express();

server.use(express.json());

server.use(cors({
    origin: '*'
}));

let MONGO_URI = "mongodb+srv://test:FQnLMsckvMJzEWBa@cluster0.rrzxcyj.mongodb.net/?retryWrites=true&w=majority";




server.post("/loginonde", async (req, res) => {
    console.log()
    const {l, p} = req.body;
    const a = await Onde.find({Login : l, Password : p});

    if (a.length > 0) {
        res.json({ access: true});
    } else {
        res.json({ access : false });
    }

})

server.post("/registeronde", async (req, res) => {
    const {l, p} = req.body;
    const d = new Onde({
        Login : l,
        Password : p
    });

    d.save()
        .then(result => res.json({created : true}))
        .catch(result => res.json())
})


server.get("/plaintes", async (req, res) => {
    const pl = await Plainte.find();
    res.json(pl);
})
server.get("/plaintes/:id", async (req, res) => {
    const { id } = req.params; 
    try {
        const pl = await Plainte.findById(id); 
        if (!pl) {
            return res.status(404).json({ error: 'Plainte not found' }); 
        }
        res.json(pl); 
    } catch (error) {
        console.error('Error fetching plainte:', error);
        res.status(500).json({ error: 'Internal server error' }); 
    }
});


server.post("/plaintes", async (req, res) => {
    console.log("plainte");
    const newPlainte = new Plainte(req.body);
    newPlainte.save()
        .then(result => res.json({ created: true }))
        .catch(error => {
            console.error('Error saving plainte:', error);
            res.status(500).json({ error: 'An error occurred while saving plainte' });
        });
});

server.post("/loginenfant", async (req, res) => {
    const {l, p} = req.body;
    const a = await Enfant.find({mail: l, password : p});
    if (a.length > 0) {
        res.json({ access: true});
    } else {
        res.json({ access : false });
    }
})


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB connected')
    server.listen(4000, () => {
        console.log("Le serveur marche")
    });
    
})
  .catch(err => console.log(err));



