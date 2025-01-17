import { CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function CardContentTo({
  setTargetCode,
  codes,
  targetCurrency,
  date,
}: {
  setTargetCode: (value: string) => void;
  codes: [string, string][];
  targetCurrency: string | undefined;
  date: string | undefined;
}) {
  return (
    <>
      <CardContent>
        <p className="text-3xl font-bold mb-2">To</p>
        <Select onValueChange={(value) => setTargetCode(value)}>
          <SelectTrigger className="mb-3 shadow-md w-[280px] text-muted-foreground">
            <SelectValue placeholder="VND - VietNamese Đồng" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {codes.map((code) => (
              <SelectItem key={code[0]} value={code[0]}>
                {code[0]} - {code[1]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xl font-semibold">Receive: </p>
        <p className="text-2xl font-bold italic">{targetCurrency ?? 0}</p>
        {date && (
          <p className="text-sm italic text-red-600 font-semibold mt-3">
            Last Updated Date: {date}
          </p>
        )}
      </CardContent>
    </>
  );
}

export default CardContentTo;
