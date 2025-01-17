import { format } from "date-fns";


export const formatCurrency = (currency: string, amount: number) => {
    const result = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: `${currency}`,
    });
    return result.format(amount);
}

export const fDateTimeSuffix = (date: string) => {
    return format(date, "dd MMM yyyy p");
}