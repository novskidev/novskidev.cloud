'use client';

import { ReactNode, useEffect } from "react";
import { ThemeProvider } from "@/app/utils/theme-provider";

export default function ClientWrapper({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    if (!("serviceWorker" in navigator)) {
      return;
    }

    let mounted = true;

    const register = async () => {
      try {
        const registration = await navigator.serviceWorker.register(
          "/service-worker.js",
          { scope: "/" }
        );

        if (!mounted) {
          return;
        }

        registration.addEventListener("updatefound", () => {
          const worker = registration.installing;

          if (!worker) {
            return;
          }

          worker.addEventListener("statechange", () => {
            if (worker.state === "installed" && navigator.serviceWorker.controller) {
              console.log("New content is available; please refresh.");
            }
          });
        });
      } catch (error) {
        console.error("Service worker registration failed", error);
      }
    };

    register();

    return () => {
      mounted = false;
    };
  }, []);

  return <ThemeProvider>{children}</ThemeProvider>;
}
