"use client";

import { useMemo, useState } from "react";
import { kes, monthlyPayment } from "@/lib/utils";

export function FinanceCalculator({
  price = 3000000,
  compact = false,
}: {
  price?: number;
  compact?: boolean;
}) {
  const [amount, setAmount] = useState(price);
  const [deposit, setDeposit] = useState(20);
  const [months, setMonths] = useState(48);
  const [rate, setRate] = useState(13.5);

  const { monthly, loan, interest, total } = useMemo(() => {
    const m = monthlyPayment(amount, deposit, months, rate);
    const principal = amount * (1 - deposit / 100);
    return {
      monthly: m,
      loan: principal,
      total: m * months,
      interest: m * months - principal,
    };
  }, [amount, deposit, months, rate]);

  return (
    <div className={compact ? "grid gap-4" : "grid gap-6 md:grid-cols-2"}>
      <div className="space-y-4">
        <label className="block">
          <span className="label">Vehicle price (KSh)</span>
          <input
            type="number"
            value={amount}
            step={50000}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="field mt-1"
          />
        </label>
        <label className="block">
          <span className="label">Deposit — {deposit}% ({kes(Math.round(amount * deposit / 100))})</span>
          <input type="range" min={10} max={60} value={deposit} onChange={(e) => setDeposit(Number(e.target.value))} className="mt-2 w-full accent-savanna-700" />
        </label>
        <label className="block">
          <span className="label">Loan term — {months} months</span>
          <input type="range" min={12} max={84} step={12} value={months} onChange={(e) => setMonths(Number(e.target.value))} className="mt-2 w-full accent-savanna-700" />
        </label>
        <label className="block">
          <span className="label">Interest rate — {rate}% p.a.</span>
          <input type="range" min={11} max={18} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="mt-2 w-full accent-savanna-700" />
        </label>
      </div>

      <div className="rounded-2xl bg-sand-100 p-5">
        <div className="label">Estimated monthly repayment</div>
        <div className="font-display text-3xl font-extrabold text-savanna-800">
          {kes(Math.round(monthly))}
        </div>
        <dl className="mt-4 space-y-2 border-t border-sand-300 pt-4 text-sm">
          <div className="flex justify-between"><dt className="text-muted">Loan amount</dt><dd className="font-semibold">{kes(Math.round(loan))}</dd></div>
          <div className="flex justify-between"><dt className="text-muted">Total interest</dt><dd className="font-semibold">{kes(Math.round(interest))}</dd></div>
          <div className="flex justify-between"><dt className="text-muted">Total cost</dt><dd className="font-semibold">{kes(Math.round(total))}</dd></div>
        </dl>
        <button className="btn btn-green btn-md mt-5 w-full">Apply for financing</button>
        <p className="mt-2 text-[11px] text-muted">Indicative only. Final rate depends on bank assessment.</p>
      </div>
    </div>
  );
}
