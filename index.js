const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3232;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

let tarefas = ['Fazer algo', 'outra tarefa diferente', 'mais alguma coisa kkk'];

app.post('/', (req, res) => {
    let tarefa = req.body.tarefa;
    if(tarefa == '' || tarefa == null)return;
    tarefas.push(tarefa);
    res.render('index', { tarefasList: tarefas });
});

app.get('/', (req, res) => {
    res.render('index', { tarefasList: tarefas });
});

app.get('/deletar/:id', (req, res) => {
    tarefas = tarefas.filter((v, i) => {
        if (i != req.params.id) return v;
    })
    res.render('index', { tarefasList: tarefas });
});

app.listen(PORT, () => {
    console.log('Servidor rodando...')
    console.log(`Acesse: http://localhost:${PORT}`);
})