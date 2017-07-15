var http = require('http');

http.createServer(function(req, res){

var categoria = req.url;

if(categoria == '/tecnologia')
{
	res.end("<html><body>Notícias de Tecnologia</body></html>");

} else if(categoria == '/moda')
{
	res.end("<html><body>Notícias de Moda</body></html>");
}
else
{
res.end("<html><body>Portal de Notícias</body></html>");
}
}).listen(80);
