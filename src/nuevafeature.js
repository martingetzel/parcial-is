import logosecreto from './logo-secreto.svg';
import logocomun from './logo.svg';

export default function Secreto() {
    var i;
    const elementos = (document.getElementsByClassName("cambiable"));
    for (i = 0; i < elementos.length; i++) {
        elementos[i].classList.toggle('secreto');
    }
    const logo = document.getElementsByClassName("App-logo");
    if (logo[0].classList.contains('secreto')) {
        logo[0].setAttribute("src", logosecreto);
    } else {
        logo[0].setAttribute("src", logocomun);
    }
  }
