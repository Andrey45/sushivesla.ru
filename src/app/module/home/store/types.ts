type Card = {
    title: string;
    cardImg: string;
    animation: string;
    background?: SafeArray
    color?: string;
}

export type ColumnCard = {
    background: string;
    card: Card[]
}