
export type PictureLinkProps={
        name: string,
        path: string,
        thubnail: string,
    };

export type CardType={
    title: string,
    price: number,
    quantity: number,
    thubnail: string,
    discountPorcentage?:number,
}


export type direction='left' | 'right';
export  type InfoCardProps={
        company: string,
        title: string,
        body: string,
        originalPrice: number,
        isDiscount: boolean,
        discountPorcentage?: number,

    }
