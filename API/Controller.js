const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let user = models.User;
let veiculo = models.Vehicle;

// login
app.post('/login', async (req, res) => {
    let response = await user.findOne({
        include: [{// Notice `include` takes an ARRAY
            model: veiculo
        }],
        where: { email: req.body.email, password: req.body.password },
    });
    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    }
});

// criação do usuário no banco
app.post('/cadastro', async (req, res) => {
    await user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        // profile_type: req.body.profile_type,
    });
});

// criação de veículo no banco
app.post('/veiculos/cadastro', async (req, res) => {
    await veiculo.create({
        marca: req.body.marca,
        modelo: req.body.modelo,
        placa: req.body.placa,
        cor: req.body.cor,
        ano: req.body.ano,
        userId: req.body.userId,
    });
});

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Servidor Rodando');
});