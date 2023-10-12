const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://lk3v1nn:dE658bz9Pr88GPgS@cluster0.i5qgmef.mongodb.net/DBRentaCar"
    )
    .then((msg) => console.log("Conectado a la DB: ", msg.connection.host))
    .catch((err) => console.log("Error al conectar a la DB: ", err));