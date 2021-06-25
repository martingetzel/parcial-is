export default function FraseAleatoria(){

    var frases = [
    'Un sueño no se hace realidad por arte de magia, necesita sudor, determinación y trabajo duro',
    'La lógica te llevará de la a a la z. la imaginación te llevará a cualquier lugar',
    'A veces la adversidad es lo que necesitas encarar para ser exitoso',
    'Para tener éxito tu deseo de alcanzarlo debe ser mayor que tu miedo al fracaso',
    'Ejecuta tus conocimientos con la maestría del que sigue aprendiendo',
    'No busques los errores, busca un remedio',
    'La vida es una aventura, atrévete',
    'Siempre parece imposible... hasta que se hace',
    'El mejor momento del día es ahora',
    'Piensa, sueña, cree y atrévete',
    'Asegúrate de que colocas tus pies en el lugar correcto, y luego mantente firme',
    'Las ideas pueden cambiar la vida. A veces a lo único que tienes que abrir la puerta es a una buena idea',
    'La mejor manera para empezar es callándote y empezar a hacer',
    'El universo no conspira contra ti, pero tampoco se desvía para alinear tu camino',
    'La innovación distingue al líder del seguidor',
    'El futuro pertenece a aquellos que creen en la belleza de sus sueños',
    'El conocimiento es poder'];
  
    var num = Math.floor(Math.random()*frases.length);
    const frase = frases[num];
  
    return(frase);
    
  }