"use client";

interface PriceTableRow {
  service: string;
  description: string;
  price: string;
}

interface PriceTableProps {
  title: string;
  rows: PriceTableRow[];
}

export function PriceTable({ title, rows }: PriceTableProps) {
  return (
    <div className="mb-16 flex w-full flex-col gap-6 last:mb-0">
      <h2 className="font-manrope text-2xl font-extrabold tracking-tight text-[#0f172a]">
        {title}
      </h2>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
        <div className="flex flex-col">
          {/* Header - Hidden on mobile, but let's keep it simple and responsive for now */}
          <div className="hidden border-b border-slate-200 bg-[#f8fafc] md:flex">
            <div className="w-[30%] p-5 text-[10px] font-bold tracking-[0.2em] text-[#64748b] uppercase">
              Služba
            </div>
            <div className="grow border-l border-slate-200/50 p-5 text-[10px] font-bold tracking-[0.2em] text-[#64748b] uppercase">
              Popis
            </div>
            <div className="w-[200px] border-l border-slate-200/50 p-5 text-[10px] font-bold tracking-[0.2em] text-[#64748b] uppercase">
              Cena (bez DPH)
            </div>
          </div>

          {/* Body */}
          {rows.map((row, idx) => (
            <div
              key={idx}
              className={`flex flex-col border-b border-slate-100 transition-colors last:border-0 md:flex-row ${idx % 2 === 0 ? "bg-white" : "bg-[#fcfdfe]"}`}
            >
              {/* Service */}
              <div className="w-full p-5 text-sm font-bold text-[#0f172a] md:w-[30%] md:font-semibold md:text-[#334155]">
                {row.service}
              </div>

              {/* Description */}
              <div className="w-full grow p-5 pt-0 text-sm leading-relaxed text-[#64748b] md:border-l md:border-slate-100/50 md:pt-5">
                {row.description}
              </div>

              {/* Price */}
              <div className="w-full p-5 pt-0 font-mono text-sm font-bold text-[#002bff] md:flex md:w-[200px] md:items-center md:border-l md:border-slate-100/50 md:pt-5">
                <span className="mb-1 block text-[10px] tracking-widest text-slate-400 uppercase md:hidden">
                  Cena (bez DPH):
                </span>
                {row.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
