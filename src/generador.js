export default function FraseAleatoria() {

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
    'El conocimiento es poder',
    'Queda terminantemente prohibido levantarse sin ilusiones',
    'Levántate, suspira, sonríe, y sigue adelante',
    'Las dificultades no existen para hacerte renunciar sino para hacerte más fuerte',
    'Ojalá vivas todos los días de tu vida',
    '¿Cuándo fue la última vez que hiciste algo por primera vez?',
    'Una persona que nunca se equivocó nunca intentó nada nuevo',
    'Dale a cada día la posibilidad de ser el mejor día de tu vida',
    'Los retos son lo que hacen la vida interesante, y superarlos es lo que hace que la vida tenga un significado',
    'Aunque te sientas perdido y sin fuerzas recuerda que cada día puede ser el comienzo de algo maravilloso. No te rindas',
    'Aquél que lo piensa mucho antes de dar un paso, se pasará toda su vida en un solo pie',
    'Evita juntarte con gente negativa. Siempre tienen un problema para cada solución',
    'Rara vez nos damos cuenta que estamos rodeados por lo extraordinario',
    'Ninguna vida está completa sin un toque de locura',
    'Vive. El dinero se recupera, el tiempo no',
    'La vida es cómo una cámara: enfócate sólo en lo importante, captura los buenos momentos, saca de lo negativo algo positivo, y si no sale como esperabas, intenta una nueva toma',
    'Ser grande no es una cuestión de tamaño sino de actitud',
    'Lo único imposible es aquello que no intentas',
    'Ser fuerte no empieza en el gimnasio. Empieza en tu cabeza',
    'La disciplina es el puente entre tus metas y tus logros',
    'Sueña sin miedos, vive sin límites',
    'Sigue corriendo, no dejes que tus excusas te alcancen',
    'Si la montaña que subes parece cada vez más imponente es que la cima está cada vez más cerca',
    'No será fácil pero merecerá la pena',
    'Si buscas resultados distintos, no hagas siempre lo mismo',
    'Mientras más fuertes sean tus pruebas, más grandes serán tus victorias',
    
];
  
    var num = Math.floor(Math.random()*frases.length);
    const frase = frases[num];
  
    return(frase);
    
  }
