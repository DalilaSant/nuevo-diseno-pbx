import type { StringMappingType } from "typescript"

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

/*Banner 09*/ 
export interface CardsPreciosCobranza{
  title:string
  titletwo: string
  price: string
}

/* Banner 12 */
export interface CardsPreciosDialler{
  title:string
  tittletwo:string
  price:string
  description: string
  textred:string
  features:string[]
}

/*Banner 14*/
export interface CardsPreciosCallcenter{
 title:string 
 price: string
 features: string[]
 featuredesc: string[]
}

export interface WhatsappCard{
  title: string
  desc: string
  bgClass: string 
}

export interface AgenteIACard{
  title:string
  desc: string
  bgClass: string 
}

//Interfaz principal que agrupa todo
export interface SolucionesData {
  cards: SolucionesCard[]
  cardsDos: SolucionesCardDos[]
  preciosConmutador: CardsPrecios[]
  preciosCobranza: CardsPreciosCobranza[]
  preciosDialler: CardsPreciosDialler[]
  preciosCallcenter: CardsPreciosCallcenter[]
  cardsWhatsapp: WhatsappCard[]
  cardsAgenteIA: AgenteIACard[]
}
