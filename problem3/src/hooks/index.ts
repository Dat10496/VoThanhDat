import { Prices } from "../interfaces";


// mock data from two hooks
export const useWalletBalances = () => {
    const balances = [
        { currency: "Osmosis", amount: 10 },
        { currency: "Ethereum", amount: 20 },
        { currency: "Arbitrum", amount: 30 },
        { currency: "Zilliqa", amount: 50 },
        { currency: "Neo", amount: 60 },
    ];

    return balances;
};

export const usePrices = (): Prices => {
    const prices = {
        Osmosis: 0.1,
        Ethereum: 0.05,
        Arbitrum: 0.03,
        Zilliqa: 0.02,
        Neo: 0.02,
    };

    return prices;
};
