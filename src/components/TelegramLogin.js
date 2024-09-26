"use client";

import React, { useEffect } from "react";

const TelegramLogin = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute("data-telegram-login", "Mynew0071234bot");
    script.setAttribute("data-size", "large");
    script.setAttribute(
      "data-auth-url",
      `${process.env.NEXT_AUTH_ENDPOINT}/api/auth/telegram/callback`
    );
    script.setAttribute("data-request-access", "write");
    script.async = true;

    document.getElementById("telegram-login-widget").appendChild(script);

    return () => {
      document.getElementById("telegram-login-widget")?.removeChild(script);
    };
  }, []);

  return <div id="telegram-login-widget" className="mt-4" />;
};

export default TelegramLogin;
