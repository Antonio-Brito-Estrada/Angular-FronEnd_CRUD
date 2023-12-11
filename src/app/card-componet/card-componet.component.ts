import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-componet',
  templateUrl: './card-componet.component.html',
  styleUrls: ['./card-componet.component.css']
})
export class CardComponetComponent implements OnInit {
  show= false;
  lista:any[] = [
    {
      "icono": "https://th.bing.com/th/id/R.3bcb36f3d4774fb93fbe48d0a25737eb?rik=WXX7B4olBgn8TQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-DYVbSKM0xGQ%2fUnKclbsDugI%2fAAAAAAAAAI0%2fv3FhyPcK02Y%2fs1600%2fimagenes-de-perritos-bonitos.jpg&ehk=uY%2bcX0a3udlR4%2bcaEqFEHaDmly9dBmwI4ktryOKByl8%3d&risl=&pid=ImgRaw&r=0",
      "raza": "Labrador Retriever",
      "color": "Dorado",
      "tamanio": "Grande",
      "edadPromedio": "10 años",
      "x": "blue"
    },
    {
      "icono": "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "raza": "Chihuahua",
      "color": "Café",
      "tamanio": "Pequeño",
      "edadPromedio": "15 años",
      "x": "black"
    },
    {
      "icono": "https://3.bp.blogspot.com/-ZwuKTSo1OHk/U8sQ_HEWFDI/AAAAAAAAC44/7q3jfXcyM1g/s1600/americanstaffordshireterrier.jpg",
      "raza": "Husky Siberiano",
      "color": "Blanco y Negro",
      "tamanio": "Mediano",
      "edadPromedio": "12 años",
      "x": "pink"
    },
    {
      "icono": "https://th.bing.com/th/id/OIP.sSVkJBpp65uvbj9yp3yO5gHaEb?pid=ImgDet&rs=1",
      "raza": "Bulldog Francés",
      "color": "Atigrado",
      "tamanio": "Pequeño",
      "edadPromedio": "9 años",
      "x": "green"
    },
    {
      "icono": "https://th.bing.com/th/id/R.467fe7932b7817b890a227965d6b8db4?rik=cdj5d%2bW6mcu8jw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-ykTmfC6GeGo%2fTlkRe3HJ0wI%2fAAAAAAAAMNA%2fDpOVCkwkFmc%2fs1600%2fPitbull-Dogs_Perros-Pitbull_03_1.jpg&ehk=paXXc5vEahCpwyV4zLP2NA6xdHuHPl0qShgmsghkEfM%3d&risl=&pid=ImgRaw&r=0",
      "raza": "Golden Retriever",
      "color": "Dorado",
      "tamanio": "Grande",
      "edadPromedio": "12 años",
      "x": "red"
    }
  ]
  detailsDogs = [
    {
      "raza": "Labrador Retriever",
      "descripcion": "El Labrador Retriever es una raza de perro amigable, inteligente y obediente. Son conocidos por su naturaleza cariñosa y su capacidad para llevarse bien con niños y otras mascotas. Son excelentes perros de familia y compañía, y también son ampliamente utilizados como perros guías para personas con discapacidades visuales. Tienen un pelaje denso y resistente al agua que los hace ideales para actividades acuáticas. Los Labradores son enérgicos y disfrutan de actividades al aire libre, como correr y jugar a buscar pelotas."
    },
    {
      "raza": "Chihuahua",
      "descripcion": "El Chihuahua es una raza de perro pequeño pero valiente. Son leales y afectuosos con sus dueños, pero a veces pueden ser reservados o tímidos con extraños. Los Chihuahuas son excelentes perros de compañía y son ideales para vivir en espacios pequeños debido a su tamaño compacto. Son perros alertas y protectores, lo que los convierte en buenos perros guardianes a pesar de su pequeño tamaño. Los Chihuahuas tienen diferentes variedades de pelaje y colores, y requieren un cuidado regular para mantener su pelaje en buen estado."
    },
    {
      "raza": "Husky Siberiano",
      "descripcion": "El Husky Siberiano es una raza de perro activa, enérgica e independiente. Son conocidos por su hermoso pelaje espeso y sus ojos azules penetrantes. Los Huskies son perros amigables y cariñosos, pero también pueden ser tercos y testarudos en ocasiones. Son perros muy sociables que disfrutan de la compañía de su familia y otros perros. Debido a su instinto de trabajo y alta energía, es importante proporcionarles suficiente ejercicio y estimulación mental. Son perros de trineo por naturaleza y pueden disfrutar de actividades al aire libre, como correr y tirar de un trineo."
    },
    {
      "raza": "Bulldog Francés",
      "descripcion": "El Bulldog Francés es una raza de perro pequeño y de aspecto peculiar. Son conocidos por su personalidad juguetona y afectuosa. Son perros tranquilos y cariñosos que disfrutan de la compañía humana. Los Bulldogs Franceses pueden tener problemas respiratorios debido a su estructura facial plana, por lo que es importante no ejercitarlos demasiado en climas cálidos. Son perros de compañía ideales para vivir en apartamentos o casas pequeñas. Aunque son pequeños, tienen una personalidad valiente y pueden ser buenos perros guardianes."
    },
    {
      "raza": "Golden Retriever",
      "descripcion": "El Golden Retriever es una raza de perro amigable, inteligente y dedicada. Son conocidos por su lealtad y disposición para complacer a sus dueños. Los Golden Retrievers son perros familiares excepcionales y tienen una naturaleza paciente y cariñosa, lo que los hace ideales para hogares con niños. Son perros muy inteligentes y se destacan en actividades de entrenamiento y obediencia. También son perros de trabajo talentosos y se utilizan en tareas de rescate y asistencia. Tienen un pelaje denso y dorado que requiere un cepillado regular para mantenerlo limpio y libre de nudos."
    }
  ];
  detailDog: any = [];
  inputValue="";
  constructor() { }

  ngOnInit() {
  }

  public showDetails(raza: string){
    this.show = true;
    this.detailDog = this.detailsDogs.find(item => item.raza === raza);
    console.log(this.detailDog)
    if(!this.detailDog) this.detailDog =  this.detailsDogs[0]

  }

  public cancel(){
    this.show = false;
  }

  public save(){
    // debugger
    const Resulatdo = document.getElementById("raza") as HTMLInputElement;
    const Colrrr = document.getElementById("x") as HTMLInputElement;
    // alert(Resulatdo.value +"AAA")
    const arr = [{
      "icono": "fff",
      "raza": Resulatdo.value.toString(),
      "color": "Dorado",
      "tamanio": "Grande",
      "edadPromedio": "12 años",
      "x": Colrrr.value.toString()
    }]
    console.log(arr[0])
    this.lista.unshift(arr[0])
    console.log(this.lista)
    // alert(this.inputValue)
  
  }
}
