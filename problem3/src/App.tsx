import WalletPage from "./components/WalletPage";

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "0.5rem",
};
function App() {
  return (
    <>
      <WalletPage children={styles} />
    </>
  );
}

export default App;
