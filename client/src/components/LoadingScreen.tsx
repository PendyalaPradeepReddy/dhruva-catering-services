/** Telangana Feast Editorial: a ceremonial first moment where the Dhruva leaf-and-serving-dome mark signals a thoughtful service is being prepared. */
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const startedAt = Date.now();
    let revealTimer: number | undefined;
    let dismissTimer: number | undefined;
    let fallbackTimer: number | undefined;
    let completed = false;

    const reveal = () => {
      if (completed) return;
      completed = true;
      const remaining = Math.max(0, 780 - (Date.now() - startedAt));
      revealTimer = window.setTimeout(() => {
        setLeaving(true);
        dismissTimer = window.setTimeout(() => setVisible(false), 360);
      }, remaining);
    };

    if (document.readyState === "complete") reveal();
    else window.addEventListener("load", reveal, { once: true });
    fallbackTimer = window.setTimeout(reveal, 2400);

    return () => {
      window.removeEventListener("load", reveal);
      if (revealTimer) window.clearTimeout(revealTimer);
      if (dismissTimer) window.clearTimeout(dismissTimer);
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`dhruva-loader ${leaving ? "dhruva-loader--leaving" : ""}`} role="status" aria-live="polite" aria-label="Preparing the Dhruva Catering experience">
      <div className="dhruva-loader__texture" aria-hidden="true" />
      <div className="dhruva-loader__content">
        <div className="dhruva-loader__mark" aria-hidden="true">
          <span className="dhruva-loader__dome dhruva-loader__dome--outer" />
          <span className="dhruva-loader__dome dhruva-loader__dome--inner" />
          <span className="dhruva-loader__leaf" />
          <span className="dhruva-loader__leaf-vein" />
        </div>
        <p className="dhruva-loader__name">Dhruva</p>
        <p className="dhruva-loader__subtitle">Catering Services</p>
        <div className="dhruva-loader__progress" aria-hidden="true"><span /></div>
        <p className="sr-only">Preparing the Dhruva Catering website.</p>
      </div>
    </div>
  );
}
