const app = require("express")();
const port = 8080;

const gun = {
    name: "glock",
    type: "19mm"
}

const rifle = {
    name: "Kalashnikov",
    type: "7mm"
}

const sniper = {
    name: "308",
    type: "11mm",
}

const weapons = []

weapons.push(gun)
weapons.push(rifle)
weapons.push(sniper)

app.get( "/weapons", (req, res) => {
    res.send({weapons});
})

app.get( "/weapons/:id", ( req,res )=> {
    
    let weapon = weapons.find(element => element.name === req.params.id);

    if (weapon !== undefined) {
        res.send({weapon});
    } else {
        res.send({errorMessage: "weapon does not exist"});
    }
    
})

app.post("/weapons", (req, res) => {
    let postWeapon = {}

    postWeapon.id = parseInt(Math.max(...weapons.map(weapon=>weapon.id)) +1)

    console.log(postWeapon.id)

    Object.keys(req.body).forEach(Property =>{
        postWeapon[Property] = req.body[Property]
    });

    weapons.push(postWeapon);
    res.json(req.body);
})



app.put("/weapons/:id", (req,res) => {
    const newWeapon = {};

    Object.keys(req.body).forEach(property =>{
        newWeapon[property] = req.body[property]
    });

    weapons[parseInt(req.params.id) -1] = newWeapon;

    res.json(req.body);
})

app.patch("/weapons/:id", (req,res) => {
    const existingWeapon = weapons[parseInt(req.params.id) -1];

    Object.keys(req.body).forEach(property =>{
        existingWeapon[property] = req.body[property]
    });

    res.send(existingWeapon);
})

app.delete("/weapons/:id", (req,res) => {
    let weapon = weapons[parseInt(req.params.id) -1]
    
    if (weapon !== undefined) {
        res.send({data: weapon});
        weapons.splice(parseInt(req.params.id)-1, 1)
    } else {
        res.send({errorMessage: "no weapon for given id"});
    }
})

app.listen( port, () => {
    console.log( "successfully running on ", port);
})

