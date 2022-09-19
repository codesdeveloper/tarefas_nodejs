const express = require('express');
const path = require('path');
const app = express();
const PORT = 3232;

app.engine('html', require('ejs').renderFile);
app.set('view engine',  'html')
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('index', {nome: 'joao pedro', msg: 'Nodejs é muito incrivel!'});
});

app.listen(PORT, () => {
    console.log('Servidor rodando...')
    console.log(`Acesse: http://localhost:${PORT}`);
})