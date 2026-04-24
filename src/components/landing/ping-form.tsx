"use client";

import { useState, useTransition } from "react";
import { ping, type PingResult } from "@/actions/ping";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PingForm() {
  const [result, setResult] = useState<PingResult | null>(null);
  const [isPending, startTransition] = useTransition();

  function onSubmit(formData: FormData) {
    startTransition(async () => {
      const res = await ping(formData);
      setResult(res);
    });
  }

  return (
    <form action={onSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <Label htmlFor="ping-name" className="text-xs tracking-wide uppercase opacity-70">
          Name
        </Label>
        <Input
          id="ping-name"
          name="name"
          placeholder="Chef"
          autoComplete="off"
          className="border-white/10 bg-white/5 text-[color:var(--souped-ink)] placeholder:text-white/30"
        />
      </div>
      <Button
        type="submit"
        disabled={isPending}
        className="self-start"
        style={{
          backgroundColor: "var(--souped-accent)",
          color: "var(--souped-bg)",
        }}
      >
        {isPending ? "Pinging…" : "Ping"}
      </Button>
      {result && (
        <div
          role="status"
          aria-live="polite"
          className="mt-2 rounded-lg border px-3 py-2 text-sm"
          style={
            result.ok
              ? {
                  borderColor: "rgba(255, 107, 53, 0.35)",
                  backgroundColor: "rgba(255, 107, 53, 0.1)",
                  color: "var(--souped-ink)",
                }
              : {
                  borderColor: "rgba(255, 107, 107, 0.4)",
                  backgroundColor: "rgba(255, 107, 107, 0.12)",
                  color: "#ffb4b4",
                }
          }
        >
          {result.ok ? result.message : result.error}
        </div>
      )}
    </form>
  );
}
