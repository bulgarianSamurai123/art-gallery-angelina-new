import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

const RadioPlayer = () => {
  const t = useTranslations("Radio");
  const audioRef = useRef(null);
  const hasStarted = useRef(false);
  const [volume, setVolume] = useState(0.5);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const RADIO_URL =
    "https://stream-163.zeno.fm/oehzeom8vzouv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJvZWh6ZW9tOHZ6b3V2IiwiaG9zdCI6InN0cmVhbS0xNjMuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IndIZzVic0RiVDFpWF9vSFUwOG5OVFEiLCJpYXQiOjE3Njg5MDU3MDQsImV4cCI6MTc2ODkwNTc2NH0.DbesRcwSIRONWVWJKQLKoVMuAEMrO6umqHjQqjnAU3g";

  useEffect(() => {
    const alreadyStarted = localStorage.getItem("radioStarted");

    const startRadio = () => {
      if (!audioRef.current || hasStarted.current) return;

      audioRef.current.volume = 0.7;

      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          hasStarted.current = true;

          localStorage.setItem("radioStarted", "true");
          localStorage.setItem("radioHintSeen", "true");

          setShowHint(false);
          removeListeners();
        })
        .catch(() => {});
    };

    const removeListeners = () => {
      window.removeEventListener("click", startRadio);
      window.removeEventListener("pointerdown", startRadio);
      window.removeEventListener("touchstart", startRadio);
      window.removeEventListener("keydown", startRadio);
    };

    if (alreadyStarted === "true") {
      startRadio();
    } else {
      setShowHint(true);
    }

    window.addEventListener("click", startRadio);
    window.addEventListener("pointerdown", startRadio);
    window.addEventListener("touchstart", startRadio);
    window.addEventListener("keydown", startRadio);

    return () => removeListeners();
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const value = Number(e.target.value);
    setVolume(value);
    if (audioRef.current) audioRef.current.volume = value;
  };

  return (
    <>
      {showHint && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center"
          onClick={() => {
            if (!audioRef.current || hasStarted.current) return;

            audioRef.current.volume = 0.5;
            audioRef.current.play().then(() => {
              setIsPlaying(true);
              hasStarted.current = true;
              setShowHint(false);
              console.log("Audio started from overlay click");
            });
          }}
        >
          <div className="bg-[rgba(0,0,0,0.75)] backdrop-blur-md text-white py-5 px-7 rounded-2xl text-center text-sm animate-[fadeIn_0.4s_ease]">
            <span className="text-2xl block mb-2">🎵</span>
            <p>{t("hint")}</p>
          </div>
        </div>
      )}

      <div className="w-full fixed bottom-0 left-0 z-50">
        <audio ref={audioRef} src={RADIO_URL} preload="none" />

        <div className="flex items-center gap-4 bg-[#111] text-white p-4 max-w-full w-full shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="flex-1 flex flex-col">
            <span className="font-semibold text-base">🎨 {t("title")}</span>
            <span className="text-sm opacity-70">{t("subtitle")}</span>
          </div>

          <button
            onClick={togglePlay}
            className={`w-12 h-12 rounded-[50%] border-none cursor-pointer text-lg bg-white text-[#111] active:transform-[scale(1.05)] active:bg-[#f2f2f2] ${isPlaying ? "pause" : "play"}`}
            aria-label={isPlaying ? t("pause") : t("play")}
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20"
            aria-label={t("volume")}
          />
        </div>
      </div>
      <div className="w-full fixed bottom-0 left-0 z-50">
        <audio ref={audioRef} src={RADIO_URL} preload="none" />

        <div className="flex items-center gap-4 bg-[#111] text-white p-4 max-w-full w-full shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="flex-1 flex flex-col">
            <span className="font-semibold text-base">🎨 {t("title")}</span>
            <span className="text-sm opacity-70">{t("subtitle")}</span>
          </div>

          <button
            onClick={togglePlay}
            className={`w-12 h-12 rounded-[50%] border-none cursor-pointer text-lg bg-white text-[#111] active:transform-[scale(1.05)] active:bg-[#f2f2f2] ${isPlaying ? "pause" : "play"}`}
            aria-label={isPlaying ? t("pause") : t("play")}
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20"
            aria-label={t("volume")}
          />
        </div>
      </div>
    </>
  );
};

export default RadioPlayer;
