import React, { useMemo } from "react";
import { getPriority } from "../utils";
import { FormattedWalletBalance, Props, WalletBalance } from "../interfaces";
import { usePrices, useWalletBalances } from "../hooks";
import WalletRow from "./WalletRow";

// css style for component WalletRow
const classes = {
  row: {},
};

const WalletPage: React.FC<Props> = (props: Props) => {
  const { children, ...rest } = props;

  const balances = useWalletBalances();
  const prices = usePrices();

  const sortedBalances = useMemo(() => {
    return balances
      .filter((balance: WalletBalance) => {
        // argument of getPriority is string and balance has type of WalletBalance
        const balancePriority = getPriority(balance.currency);
        // getPriority return a number
        if (balancePriority > -99) {
          if (balance.amount <= 0) {
            return true;
          }
        }
        return false;
      })
      .sort((lhs: WalletBalance, rhs: WalletBalance) => {
        const leftPriority = getPriority(lhs.currency);
        const rightPriority = getPriority(rhs.currency);

        if (leftPriority > rightPriority) {
          return -1;
        } else if (rightPriority > leftPriority) {
          return 1;
        } else {
          // leftPriority may be equal to rightPriority
          return 0;
        }
      });
    // because we do not use variable `prices` in useMemo hooks so remove it from dependency
  }, [balances]);

  const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
    return {
      ...balance,
      formatted: balance.amount.toFixed(),
    };
  });

  // balance has type of `FormattedWalletBalance` so replace `sortedBalances` to `formattedBalances`
  const rows = formattedBalances.map(
    (balance: FormattedWalletBalance, index: number) => {
      const usdValue = prices[balance.currency] * balance.amount;
      return (
        <WalletRow
          className={classes.row}
          key={index}
          amount={balance.amount}
          usdValue={usdValue}
          formattedAmount={balance.formatted}
        />
      );
    }
  );

  return <div {...rest}>{rows}</div>;
};

export default WalletPage;
