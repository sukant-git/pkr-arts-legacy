import React, { useRef } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import * as XLSX from "xlsx";

const ExcelTab: React.FC = () => {
  const [data, setData] = React.useState<any[][]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target?.result;
      if (typeof bstr === "string" || bstr instanceof ArrayBuffer) {
        const wb = XLSX.read(bstr, { type: "binary" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const json = XLSX.utils.sheet_to_json(ws, { header: 1 });
        setData(json as any[][]);
      }
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        accept=".xlsx,.xls"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <Button onClick={() => fileInputRef.current?.click()}>
        Upload Excel File
      </Button>
      {data.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="border px-2 py-1">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExcelTab;
