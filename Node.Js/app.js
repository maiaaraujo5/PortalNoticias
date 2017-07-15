var app = require('./config/server');

//var rotaHome = require('./app/routes/home');
//rotaHome(app);

//var rotaNoticias = require('./app/routes/noticias');
//rotaNoticias(app);

//var rotaFormulario = require ('./app/routes/formulario_inclusao_noticia');
//rotaFormulario(app);

app.listen(80, function()
{
  console.log('Servidor ON');
});