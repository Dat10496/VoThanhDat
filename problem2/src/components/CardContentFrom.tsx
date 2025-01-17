import { CardContent, CardFooter } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
function CardContentFrom({
  setBaseCode,
  setBaseCurrency,
  isLoading,
  codes,
  handleSwap,
}: {
  setBaseCode: (value: string) => void;
  setBaseCurrency: (value: number) => void;
  handleSwap: () => void;
  isLoading: boolean;
  codes: [string, string][];
}) {
  //+
  return (
    <>
      <CardContent>
        <h1 className="text-3xl font-bold mb-2">From</h1>
        <Select onValueChange={(value) => setBaseCode(value)}>
          <SelectTrigger className="gap-1 mb-3 shadow-md w-[280px] text-muted-foreground ">
            <SelectValue
              placeholder="USD - United States Dollars"
              className="text-xl font-semibold"
            />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {codes.map((code) => (
              <SelectItem key={code[0]} value={code[0]}>
                {code[0]} - {code[1]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          defaultValue="0.0"
          onChange={(e) => setBaseCurrency(Number(e.target.value))}
          className="shadow-md w-[280px]"
        />
        <CardFooter className="pl-0 mt-5 ">
          <Button
            variant="outline"
            onClick={() => handleSwap()}
            disabled={isLoading}
            className="shadow-md"
          >
            {!isLoading && "Confirm Swap"}
            {isLoading && <Loader2 className="animate-spin" />}
          </Button>
        </CardFooter>
      </CardContent>
    </>
  );
}

export default CardContentFrom;
