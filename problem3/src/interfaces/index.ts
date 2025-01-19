export interface WalletBalance {
    currency: string;
    amount: number;
}
export interface FormattedWalletBalance {
    currency: string;
    amount: number;
    formatted: string;
}


type BoxProps = object

export interface Props extends BoxProps {
    children: any
}

export interface Prices {
    [currency: string]: number;
}
