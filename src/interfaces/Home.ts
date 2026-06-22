export interface Recuadro{
    text: string
    url: string
}

export interface Servicio{
    title:string
    desc: string
    img: string
    icon: string
    url: string
}

//interface principal que agrupa todo
export interface HomeData{
    recuadro: Recuadro[];
    servicio: Servicio[];
}