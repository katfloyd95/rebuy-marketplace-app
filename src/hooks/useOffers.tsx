import { useState, useEffect } from "react";
import type { Offer } from "../data/offers";
import { offersData } from "../data/offers";

export default function useOffers() {
  const [offers, setOffers] = useState<Offer[]>(() => {
    const stored = localStorage.getItem("offers");
    return stored ? JSON.parse(stored) : offersData;
  });

  useEffect(() => {
    localStorage.setItem("offers", JSON.stringify(offers));
  }, [offers]);

  return { offers, setOffers };
}
