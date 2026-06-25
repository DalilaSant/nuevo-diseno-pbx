export interface CarruselData {
  icono: string
  titulo: string
  descNegrita: string
  descNormal: string
  link: string
}

export interface HomeCard {
  title: string
  desc: string
  bgClass: string
}

//Interfaz principal que agrupa todo
export interface HomeData {
  carrusel: CarruselData[]
  cards: HomeCard[]
}
