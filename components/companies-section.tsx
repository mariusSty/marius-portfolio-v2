"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";

const companies = [
  {
    name: "The Surge",
    description:
      "Startup développant des applications dans le domaine de la blockchain et du trading",
  },
  {
    name: "Krafteo",
    description:
      "Start-up éditant une solution de planning et pilotage d'activité pour le secteur de la menuiserie",
  },
  {
    name: "Masteos",
    description:
      "Startup française simplifiant l'investissement immobilier pour les particuliers",
  },
  {
    name: "Fulll",
    description:
      "Agence du groupe InExtenso digitalisant tous les aspects de la comptabilité",
  },
  {
    name: "Métropole de Lyon",
    description:
      "Réseau social d'entrepreneurs lyonnais mettant en lien différents corps de métiers et incubateurs",
  },
  {
    name: "Astek",
    description:
      "ESN internationale — Prestation pour le client les Scouts d'Europe",
  },
  {
    name: "Sopra Steria",
    description:
      "ESN européenne — Prestation pour le centre de services de la SNCF",
  },
];

function CompanySlot({
  company,
  isVisible,
}: {
  company: (typeof companies)[number];
  isVisible: boolean;
}) {
  return (
    <Card
      className={cn(
        "flex flex-col items-center justify-center h-28 p-4 border-muted transition-all duration-500",
        isVisible
          ? "opacity-100 scale-100 blur-0"
          : "opacity-0 scale-95 blur-sm",
      )}
    >
      <span className="text-sm font-semibold text-center text-foreground">
        {company.name}
      </span>
      <span className="text-xs text-muted-foreground text-center mt-1 line-clamp-2">
        {company.description}
      </span>
    </Card>
  );
}

export function CompaniesSection() {
  const [slots, setSlots] = useState([0, 1, 2]);
  const [visible, setVisible] = useState([true, true, true]);
  const [nextSlotToChange, setNextSlotToChange] = useState(0);

  const cycleSlot = useCallback(() => {
    const slotIndex = nextSlotToChange;

    // Fade out
    setVisible((prev) => {
      const next = [...prev];
      next[slotIndex] = false;
      return next;
    });

    // After fade out, swap company and fade in
    setTimeout(() => {
      setSlots((prev) => {
        const next = [...prev];
        const usedIndices = new Set(next);
        const available = companies
          .map((_, i) => i)
          .filter((i) => !usedIndices.has(i));
        if (available.length > 0) {
          next[slotIndex] =
            available[Math.floor(Math.random() * available.length)];
        }
        return next;
      });
      setVisible((prev) => {
        const next = [...prev];
        next[slotIndex] = true;
        return next;
      });
    }, 500);

    setNextSlotToChange((prev) => (prev + 1) % 3);
  }, [nextSlotToChange]);

  useEffect(() => {
    const interval = setInterval(cycleSlot, 2000);
    return () => clearInterval(interval);
  }, [cycleSlot]);

  return (
    <section id="companies" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Ils m&apos;ont fait confiance
          </h2>
          <p className="text-muted-foreground text-lg">
            Les entreprises avec lesquelles j&apos;ai collaboré
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {slots.map((companyIndex, slotIndex) => (
            <CompanySlot
              key={slotIndex}
              company={companies[companyIndex]}
              isVisible={visible[slotIndex]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
