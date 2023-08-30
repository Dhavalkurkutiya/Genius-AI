"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0c499458-3b25-405c-b5d2-cda5fcaa15a9");
  }, []);

  return null;
};
