// requerir express
const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');
// con el contructor de express contruir una app
const app = express();
//  donde quiere que corra, puerto
const port = 3000;

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


// se le indica que debe escuchar en un puerto especifico
app.listen(port, () =>{
  // se utiliza un log solo para verificar, se debe eliminar, porque en producción es un error
  console.log(`Mi port ${port}`);
});
