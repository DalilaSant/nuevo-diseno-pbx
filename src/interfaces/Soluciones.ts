export interface SolucionesCard {
  title: string
  desc: string
  bgClass: string
}

export interface SolucionesCardDos{
  title: string
  desc: string
  bgClass: string
}

//datos section 7 
export interface CardsPrecios {
  title: string
  titletwo: string
  price: string
  setup: string
  features: string[]
}

//Interfaz principal que agrupa todo
export interface SolucionesData {
  cards: SolucionesCard[]
  cardsDos: SolucionesCardDos[]
  preciosConmutador: CardsPrecios[]
}
