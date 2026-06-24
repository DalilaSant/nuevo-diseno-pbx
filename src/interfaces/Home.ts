export interface CarruselData{
    icono: string,
    titulo: string,
    descNegrita: string,
    descNormal: string,
    link: string
}

//Interfaz principal que agrupa todo
export interface HomeData{
    carrusel: CarruselData[];
}