function WalletRow({
  className,
  key,
  amount,
  usdValue,
  formattedAmount,
}: {
  className: object;
  key: number;
  amount: number;
  usdValue: number;
  formattedAmount: string;
}) {
  return (
    <div style={className} key={key}>
      WalletRow
      {amount}
      {usdValue}
      {formattedAmount}
    </div>
  );
}

export default WalletRow;
