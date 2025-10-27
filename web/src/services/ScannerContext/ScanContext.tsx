import React, { createContext, useContext, useState } from "react";

type ScanCtx = {
  lastScan: string | null;
  setLastScan: (val: string | null) => void;
};

const Ctx = createContext<ScanCtx | undefined>(undefined);

export const ScanProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [lastScan, setLastScan] = useState<string | null>(null);
  return <Ctx.Provider value={{ lastScan, setLastScan }}>{children}</Ctx.Provider>;
};

export const useScan = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useScan must be used within ScanProvider");
  return ctx;
};
