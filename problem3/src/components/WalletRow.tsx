function WalletRow({
  className,
  currency,
  amount,
  usdValue,
  formattedAmount,
}: {
  currency: string;
  className: object;
  amount: number;
  usdValue: number;
  formattedAmount: string;
}) {
  return (
    <div style={className}>
      <p>
        <b>Currency</b>: {currency} - <b>Value</b>: {usdValue}$
      </p>
      <p>
        <b>Amount</b>: {amount}
      </p>
      <p>
        <b>formattedAmount</b>: {formattedAmount}
      </p>
    </div>
  );
}

export default WalletRow;
