"use client";
import useTradingViewWidget from "@/hooks/useTradingViewWidget";
import { cn } from "@/lib/utils";
import React, { memo } from "react";

interface TradingViewWidgetProps {
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

/**
 * Render a TradingView widget inside a styled container with an optional title.
 *
 * @param title - Optional heading text displayed above the widget
 * @param scriptUrl - URL of the TradingView embed script to load
 * @param config - Configuration object passed to the TradingView widget initializer
 * @param height - Container height in pixels (defaults to 600)
 * @param className - Optional additional class name(s) applied to the widget container
 * @returns A React element that displays the optional title and a container for the TradingView widget
 */
function TradingViewWidget({
  title,
  scriptUrl,
  config,
  height = 600,
  className,
}: TradingViewWidgetProps) {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && (
        <h3 className="font-semibold text-2xl text-gray-100 mb-5">{title}</h3>
      )}
      <div
        className={cn("tradingview-widget-container", className)}
        ref={containerRef}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height, width: "100%" }}
        />
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);