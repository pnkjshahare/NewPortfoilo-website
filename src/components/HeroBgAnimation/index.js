import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {
  CandlestickSeries,
  ColorType,
  CrosshairMode,
  HistogramSeries,
  LineStyle,
  createChart,
} from "lightweight-charts";
import { useMarketTrend } from "../../utils/MarketContext.js";

const ChartWrap = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.08;
  filter: blur(1px);
  transform: scale(1.04);
  transform-origin: center;
  pointer-events: none;
  overflow: hidden;
`;

const ChartMount = styled.div`
  width: 100%;
  height: 100%;
`;

const DarkOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.bg};
  opacity: 0.6;
`;

const CANDLE_INTERVAL_SECONDS = 60;
const BAR_COUNT = 120;

const randomBetween = (min, max) => min + Math.random() * (max - min);

const lerp = (start, end, progress) => start + (end - start) * progress;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const createInitialState = () => {
  const bars = [];
  const volumes = [];
  const startTime =
    Math.floor(Date.now() / 1000) - BAR_COUNT * CANDLE_INTERVAL_SECONDS;
  let close = 100 + randomBetween(-6, 6);

  for (let index = 0; index < BAR_COUNT; index += 1) {
    const time = startTime + index * CANDLE_INTERVAL_SECONDS;
    const open = close;
    const nextClose = clamp(open + randomBetween(-1.8, 1.8), 88, 112);
    const high = Math.max(open, nextClose) + randomBetween(0.2, 1.15);
    const low = Math.min(open, nextClose) - randomBetween(0.2, 1.15);
    const volume = Math.round(randomBetween(140, 640));
    const bullish = nextClose >= open;

    bars.push({
      time,
      open,
      high,
      low,
      close: nextClose,
    });

    volumes.push({
      time,
      value: volume,
      color: bullish ? "rgba(0, 208, 132, 0.42)" : "rgba(255, 79, 79, 0.42)",
    });

    close = nextClose;
  }

  return { bars, volumes };
};

const buildNextBar = (previousBar) => {
  const open = previousBar.close;
  const drift = randomBetween(-1.4, 1.4);
  const close = clamp(open + drift, 86, 114);
  const high = Math.max(open, close) + randomBetween(0.25, 1.35);
  const low = Math.min(open, close) - randomBetween(0.25, 1.35);
  const volume = Math.round(randomBetween(160, 720));

  return {
    bar: {
      time: previousBar.time + CANDLE_INTERVAL_SECONDS,
      open,
      high,
      low,
      close,
    },
    volume: {
      time: previousBar.time + CANDLE_INTERVAL_SECONDS,
      value: volume,
      color:
        close >= open ? "rgba(0, 208, 132, 0.42)" : "rgba(255, 79, 79, 0.42)",
    },
  };
};

const HeroBgAnimation = () => {
  const chartRef = useRef(null);
  const { setTrend } = useMarketTrend();

  useEffect(() => {
    const mount = chartRef.current;

    if (!mount) {
      return undefined;
    }

    const chart = createChart(mount, {
      autoSize: true,
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "rgba(255, 255, 255, 0.12)",
        attributionLogo: false,
      },
      grid: {
        vertLines: {
          color: "rgba(120, 130, 160, 0.12)",
          style: LineStyle.Solid,
        },
        horzLines: {
          color: "rgba(120, 130, 160, 0.12)",
          style: LineStyle.Solid,
        },
      },
      rightPriceScale: {
        visible: false,
        borderVisible: false,
        borderColor: "rgba(0, 0, 0, 0)",
      },
      leftPriceScale: {
        visible: false,
        borderVisible: false,
        borderColor: "rgba(0, 0, 0, 0)",
      },
      timeScale: {
        visible: false,
        borderVisible: false,
        borderColor: "rgba(0, 0, 0, 0)",
        timeVisible: false,
        secondsVisible: false,
        shiftVisibleRangeOnNewBar: true,
        allowShiftVisibleRangeOnWhitespaceReplacement: true,
        ticksVisible: false,
        rightBarStaysOnScroll: true,
      },
      crosshair: {
        mode: CrosshairMode.Hidden,
        vertLine: {
          color: "rgba(0, 0, 0, 0)",
          width: 1,
          style: LineStyle.Solid,
          visible: false,
          labelVisible: false,
          labelBackgroundColor: "rgba(0, 0, 0, 0)",
        },
        horzLine: {
          color: "rgba(0, 0, 0, 0)",
          width: 1,
          style: LineStyle.Solid,
          visible: false,
          labelVisible: false,
          labelBackgroundColor: "rgba(0, 0, 0, 0)",
        },
        doNotSnapToHiddenSeriesIndices: true,
      },
      handleScroll: false,
      handleScale: false,
      localization: {
        locale: "en-US",
      },
      addDefaultPane: true,
      hoveredSeriesOnTop: false,
      defaultVisiblePriceScaleId: "right",
      attributionLogo: false,
    });

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#00C176",
      downColor: "#FF5A5F",
      borderVisible: false,
      wickUpColor: "#00C176",
      wickDownColor: "#FF5A5F",
      priceLineVisible: false,
      lastValueVisible: false,
      crosshairMarkerVisible: false,
    });

    const volumeSeries = chart.addSeries(HistogramSeries, {
      priceScaleId: "volume",
      priceLineVisible: false,
      lastValueVisible: false,
      color: "rgba(0, 208, 132, 0.42)",
      crosshairMarkerVisible: false,
    });

    chart.priceScale("volume").applyOptions({
      visible: false,
      borderVisible: false,
      borderColor: "rgba(0, 0, 0, 0)",
      ticksVisible: false,
      scaleMargins: { top: 0.8, bottom: 0.02 },
    });

    const initialState = createInitialState();
    let latestBar = initialState.bars[initialState.bars.length - 1];

    candlestickSeries.setData(initialState.bars);
    volumeSeries.setData(initialState.volumes);
    chart.timeScale().fitContent();
    chart.timeScale().scrollToRealTime();
    setTrend(latestBar.close >= latestBar.open ? "up" : "down");

    let animationFrameId = null;
    let timeoutId = null;
    let cancelled = false;

    const scheduleNextTick = () => {
      timeoutId = window.setTimeout(
        () => {
          if (cancelled) {
            return;
          }

          const nextTick = buildNextBar(latestBar);
          setTrend(nextTick.bar.close >= nextTick.bar.open ? "up" : "down");
          const startTime = performance.now();
          const duration = 525;

          const animate = (now) => {
            if (cancelled) {
              return;
            }

            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            candlestickSeries.update({
              time: nextTick.bar.time,
              open: lerp(latestBar.open, nextTick.bar.open, eased),
              high: lerp(latestBar.high, nextTick.bar.high, eased),
              low: lerp(latestBar.low, nextTick.bar.low, eased),
              close: lerp(latestBar.close, nextTick.bar.close, eased),
            });

            volumeSeries.update({
              time: nextTick.volume.time,
              value: lerp(220, nextTick.volume.value, eased),
              color: nextTick.volume.color,
            });

            chart.timeScale().scrollToRealTime();

            if (progress < 1) {
              animationFrameId = window.requestAnimationFrame(animate);
              return;
            }

            latestBar = nextTick.bar;
            scheduleNextTick();
          };

          animationFrameId = window.requestAnimationFrame(animate);
        },
        randomBetween(1500, 2250),
      );
    };

    scheduleNextTick();

    return () => {
      cancelled = true;
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
      chart.remove();
    };
  }, [setTrend]);

  return (
    <ChartWrap>
      <ChartMount ref={chartRef} />
      <DarkOverlay />
    </ChartWrap>
  );
};

export default HeroBgAnimation;
