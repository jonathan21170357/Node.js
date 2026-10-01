const estatusPedido = () => {
    return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => { 
        if(estatusPedido()){
            resolve('¡Pedido exitoso! Su pizza está en camino.');
        }else{
            reject('Ocurrio un error. Por favor intenta nuevamente.');
        }
    }, 3000);
});

miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });

const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
};

const manejarRechazo = (mensajeDeError) => {
    console.log(mensajeDeError);
};

miPedidoDePizza.then(manejarPedido).catch(manejarRechazo);