function llenado(){

var canvas=document.getElementById("historia");
var datos = canvas.getContext("2d");
var img=new Image()
img.src='img/llorona.png';
img.onload=function(){
    datos.drawImage(img,350,60);
}

datos.beginPath();
datos.font="40px Calibri,Arial";
datos.fillStyle=("rgb(255,255,255)");
datos.fillText("La llorona",450,50);
datos.fill();
datos.beginPath();
datos.font="22px Calibri,Arial";
datos.fillText("Hace muchos años en la Ciudad de México, cerca de Xochimilco, se escuchaban los tristes lamentos de una mujer.",50,400)
datos.fillText("- ¡Ay mis hijos! Qué será de ellos - decía una voz perturbadora..",50,425);
datos.fillText("Mientras se escuchaba a la mujer misteriosa, los temerosos habitantes de la ciudad se encerraban en sus casas",50,450);
datos.fillText("a base de lodo y piedra. Tampoco los antiguos conquistadores se atrevían a salir a la calle, pues los gritos de aquella.",50,475);
datos.fillText("mujer eran realmente espeluznantes. Los rumores decían que se trataba de la llorona,una mujer vestida de blanco",50,500);
datos.fillText("con cabellos largos y aspecto fantasmagórico, que flotaba en el aire con un velo para cubrir su horripilante rostro.",50,525);
datos.fillText("Lentamente vagaba por la ciudad entre calles y plazas, y quien llegó a ser testigo de su presencia dice que al gritar,",50,550);
datos.fillText("¡Ay mis hijos! , agitaba sus largos brazos de manera angustiosa, para después desaparecer en el aire y seguir",50,575);
datos.fillText("aterrorizando en otras partes de la ciudad con sus quejidos y gritos.Mientras la llorona recorría las plazas,",50,600);
datos.fillText("lloraba desesperada, después de un tiempo se dirigía al río hasta perderse poco a poco en la oscuridad de la noche,",50,625);
datos.fillText("y así terminar disolviéndose entre las aguas. Esto pasaba todas las noches en la ciudad de México",50,650);
datos.fillText("Algunas personas decían que la mujer tenía un enamorado, con el cual nunca había podido casarse gracias a que",50,675);
datos.fillText("la había sorprendido inesperadamente. Al morir el hombre se quedó solo y triste, y descuidó a tal punto a sus 3 hijos,",50,700);
datos.fillText("que los pobrecitos se quedaron huérfanos sin que nadie les ayudara. A causa de esto la mujer regresaba del más allá",50,725);
datos.fillText("para cuidar de sus hijos, y los buscaba desesperadamente a través de gritos y lamentos.",50,750);
datos.fillText("Desde entonces su espíritu errante vaga todas las noches buscando a sus hijos, llorando",50,775);
datos.fillText("y lamentando por los alrededores de los pueblos.",50,800);
datos.fillText("FIN.",50,825);
datos.fillText("FIN.",50,825);
datos.fill();

}
 window.addEventListener("load", llenado, false);
