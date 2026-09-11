"use client";

import { useEffect } from "react";

export default function SoundFeedback() {
  useEffect(() => {
    let audioCtx = null;

    const playSubtleClick = () => {
      try {
        if (!audioCtx) {
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === "suspended") {
          audioCtx.resume();
        }

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = "sine";
        // Nada klik frekuensi tinggi sangat singkat
        osc.frequency.setValueAtTime(800, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(
          400,
          audioCtx.currentTime + 0.04,
        );

        // Volume sangat rendah agar tidak bising
        gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(
          0.0001,
          audioCtx.currentTime + 0.04,
        );

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.04);
      } catch {
        // Fallback aman jika browser memblokir audio
      }
    };

    const handleClick = (e) => {
      const target = e.target.closest("button, a, [role='button']");
      if (target) {
        playSubtleClick();
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return null;
}
