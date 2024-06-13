
const antecedentes = document.querySelector("#antecedentes");
const enviar = document.querySelector("#enviar");
const miHistoria = document.querySelector("#historia")

enviar.addEventListener("click", (event) => {
    event.preventDefault(); 

    const pais = antecedentes.pais.value;
    console.log(pais);
    const dinero = antecedentes.dinero.value;
    console.log(dinero);
    const bf = antecedentes.bf.value;
    console.log(bf)
    const jefe = antecedentes.jefe.value;
    console.log(jefe)
    const nacionalidad = antecedentes.nacionalidad.value;
    console.log(nacionalidad)
    antecedentes.remove()

    return miHistoria.innerHTML = `
    <div>
    <h1>Tu viaje a ${pais}</h1>
    <p>Por fin lo has logrado ha sido una larga espera has gastado mucho y estas muy feliz por fin estas en ${pais}, sonries aunque solo te quedan ${dinero} pesos</p>
    <p> ahora que estas en ${pais} estas ansioso (a) de recorrer todo el lugar con tu amigx ${bf}, pero en ese momento suena tu celular es tu jefx ${jefe}, de tu trabajo</p>
    <p> enojadx te dice que debido a que no pediste permiso para irte 2 semanas de vacaciones no te van a pagar ese día y lo haran cuando vuelvas a tu trabajo</p>
    <p> te precoupas porque solo te quedan ${dinero} pesos y ya tienes hambre y deseas comer</p>
    <p> sin embargo ves que enfrete de tu hotel hay restaurante que dice "aqui las personas de nacionalidad ${nacionalidad}, comen gratis presentando su pasaporte"</p>

    </div>
    `
});
