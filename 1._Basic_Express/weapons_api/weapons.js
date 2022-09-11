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

app.listen( port, () => {
    console.log( "successfully running on ", port);
})