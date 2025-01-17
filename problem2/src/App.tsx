import { useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { pairConversion, supportedCodes } from "@/app/api";

import { fDateTimeSuffix, formatCurrency } from "@/utils";
import CardContentFrom from "@/components/CardContentFrom";
import CardContentTo from "@/components/CardContentTo";

function App() {
  const [codes, setCodes] = useState<[string, string][]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [baseCode, setBaseCode] = useState<string>("USD");
  const [targetCode, setTargetCode] = useState<string>("VND");
  const [baseCurrency, setBaseCurrency] = useState<number>();
  const [targetCurrency, setTargetCurrency] = useState<string>();
  const [date, setDate] = useState<string>();

  const handleSwap = async () => {
    try {
      setIsLoading(true);
      const response = await pairConversion(baseCode, targetCode, baseCurrency);

      const result = response.data.conversion_result;
      const currency = formatCurrency(targetCode, result);

      setTargetCurrency(currency);
      setIsLoading(false);
      setDate(fDateTimeSuffix(response.data.time_last_update_utc));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unknown Error.");
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getSupportedCode = async () => {
      try {
        setError("");
        const result = await supportedCodes();
        setCodes(result.data.supported_codes);
      } catch (error: any) {
        if (error.response.data["error-type"]) {
          setError(error.response.data["error-type"]);
        } else {
          setError("Unknown Error.");
        }
      }
    };
    getSupportedCode();
  }, []);

  return (
    <main className="flex justify-center  border border-input min-h-screen">
      <Card className="w-2/3 h-2/3 mt-10 shadow-md">
        <CardHeader>
          <CardTitle>Currency Swap</CardTitle>
          <CardDescription>Currency data of 99Tech.</CardDescription>
          {error && (
            <CardDescription className="text-red-400 italic">
              {error}
            </CardDescription>
          )}
        </CardHeader>

        <div className="flex justify-between">
          <CardContentFrom
            setBaseCode={setBaseCode}
            codes={codes}
            isLoading={isLoading}
            handleSwap={handleSwap}
            setBaseCurrency={setBaseCurrency}
          />

          <CardContentTo
            setTargetCode={setTargetCode}
            codes={codes}
            targetCurrency={targetCurrency}
            date={date}
          />
        </div>
      </Card>
    </main>
  );
}

export default App;
