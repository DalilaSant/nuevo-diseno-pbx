export interface BannerItem {
    image: string
    title: string
    titleRed: string
    description: string
    item: {
        text: string
    }[]
    enlace:string
}

//interfaz principal que agrupa todo
export interface BannerAllData {
    dataBanner: BannerItem[]
}