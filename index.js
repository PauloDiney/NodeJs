const fastify = require('fastify')();
const fs = require('fs');
const cron = require('node-cron');

fastify.get('/',function(request, reply){
    reply.send({ hello: 'Scooby-Doo ' });
})


fastify.get('/Scooby',function(request, reply){
    fs.readFile('dados.json', 'utf8', (erro, data) => {
        if(erro){
            reply.code(500).send({erro: 'Falha ao ler o Arquivo Scooby DOOby DOOOOOOO 🐶👻😶'});
        }else{
            {
                reply.send(JSON.parse(data));
            }
        }
    })


   
})


fastify.listen({ port: 3006 },(erro) => {
    if(erro){
        fastify.log.error(erro);
        process.exit(1);
    }else{
        console.log("Servidor rodando na porta 3006😎")
    }
})
