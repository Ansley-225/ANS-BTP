"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface AutoStartCounterProps {
  chiffre: number;
  motCle?: string;
}

export function AutoStartCounter({ chiffre, motCle }: AutoStartCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: false, // Ne se déclenche qu'une fois
    threshold: 0.1, // Déclenche quand 10% est visible
  });

  return (
    <div
      ref={ref}
      style={{
        fontSize: "7rem",
        fontWeight: "900",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {inView && (
        <CountUp
          start={0}
          end={chiffre}
          duration={2}
          separator=""
          decimals={0}
        />
      )}
      {motCle && (
        <span style={{ fontSize: "4rem", marginLeft: "0.2rem" }}>{motCle}</span>
      )}
    </div>
  );
}
