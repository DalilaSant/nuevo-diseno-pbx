export interface Feature{
  image: string
  alt: string
  title: string
  descPrefix: string
  link?: { url: string; text: string }
  descSuffix?: string
}

export interface Paises{
    image: string
    pais: string
    telefono:string
}


//interface principal que grupa todo
export interface FooterData{
  feature: Feature[];
  paises: Paises[];
}