"use client";

import { Card } from "@/components/ui/card";
import { Meteors } from "@/components/ui/meteors";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

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

export function CompaniesSection() {
  const [slots, setSlots] = useState([0, 1, 2]);
  const [nextSlotToChange, setNextSlotToChange] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlots((prev) => {
        const next = [...prev];
        const usedIndices = new Set(next);
        const available = companies
          .map((_, i) => i)
          .filter((i) => !usedIndices.has(i));
        if (available.length > 0) {
          next[nextSlotToChange] =
            available[Math.floor(Math.random() * available.length)];
        }
        return next;
      });
      setNextSlotToChange((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, [nextSlotToChange]);

  return (
    <section
      id="companies"
      className="py-24 px-6 bg-linear-to-b from-muted/20 to-background relative overflow-hidden"
    >
      <Meteors number={10} />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ils m&apos;ont fait confiance
          </h2>
          <p className="text-muted-foreground text-lg">
            Les entreprises avec lesquelles j&apos;ai collaboré
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {slots.map((companyIndex, slotIndex) => (
            <div key={slotIndex} className="relative h-28 overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={companyIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Card className="flex flex-col items-center justify-center h-full p-4 border-muted">
                    <span className="text-sm font-semibold text-center text-foreground">
                      {companies[companyIndex].name}
                    </span>
                    <span className="text-xs text-muted-foreground text-center mt-1 line-clamp-2">
                      {companies[companyIndex].description}
                    </span>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
