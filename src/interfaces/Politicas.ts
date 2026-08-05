export interface ListItem{
    texto: string
    sublista?: string[]
}

export interface Politica{
    titulo: string
    contenido?: string[]
    lista?: string
    listanum?: (string | ListItem)[]
    listaabc?: string[]
    contenido1?: string[]

}