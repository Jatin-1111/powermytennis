"use client";

import { useRef, useEffect } from "react";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  useMotionValueEvent,
} from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { MotionSection, MotionItem } from "@/components/shared/MotionSection";
import { MagneticButton } from "@/components/shared/MagneticButton";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Holds the latest scrub target while the browser finishes a pending seek
  const pendingSeekRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Spring-smooth the scroll so every transform feels weighted, not 1:1 raw
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Act 1 — headline drifts up and out while the video slowly de-zooms
  const textY = useTransform(progress, [0, 0.3], ["0%", "-60%"]);
  const textOpacity = useTransform(progress, [0.05, 0.28], [1, 0]);
  const videoZoom = useTransform(progress, [0, 0.55], [1.2, 1]);
  // Legibility overlay lifts as the text leaves, revealing the footage
  const overlayOpacity = useTransform(progress, [0, 0.35], [1, 0.25]);

  // Act 2 — the video shrinks into a framed, rounded "screen"
  const frameScale = useTransform(progress, [0.38, 0.75], [1, 0.88]);
  const frameRadius = useTransform(progress, [0.38, 0.75], [0, 28]);

  // Act 3 — a closing statement fades in over the framed video
  const stingerOpacity = useTransform(progress, [0.55, 0.72], [0, 1]);
  const stingerY = useTransform(progress, [0.55, 0.72], ["30%", "0%"]);
  const stingerBackdrop = useTransform(progress, [0.55, 0.75], [0, 0.55]);

  const scrollHintOpacity = useTransform(progress, [0, 0.08], [1, 0]);

  const animate = !prefersReducedMotion;

  // Scrub: scroll progress drives the video's currentTime (all-intra encode
  // makes every frame a keyframe, so seeks land instantly). The seeking guard
  // prevents queue-thrash; any target set mid-seek is applied on "seeked".
  useMotionValueEvent(progress, "change", (p) => {
    const video = videoRef.current;
    if (!video || !video.duration || prefersReducedMotion) return;
    const target = p * video.duration;
    if (video.seeking) {
      pendingSeekRef.current = target;
    } else {
      video.currentTime = target;
    }
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onSeeked = () => {
      if (pendingSeekRef.current !== null) {
        video.currentTime = pendingSeekRef.current;
        pendingSeekRef.current = null;
      }
    };
    video.addEventListener("seeked", onSeeked);
    return () => video.removeEventListener("seeked", onSeeked);
  }, []);

  return (
    <section
      ref={containerRef}
      className={`relative bg-brand-primary text-brand-white ${
        animate ? "h-[250vh] md:h-[300vh]" : ""
      }`}
    >
      {/* Sticky stage: the viewport holds still while scroll drives the acts */}
      <div
        className={`top-0 h-screen flex items-center overflow-hidden ${
          animate ? "sticky" : "relative"
        }`}
      >
        {/* Video frame — shrinks into a rounded card in act 2 */}
        <motion.div
          style={
            animate
              ? {
                  scale: frameScale,
                  borderRadius: frameRadius,
                  willChange: "transform",
                }
              : undefined
          }
          className="absolute inset-0 z-0 overflow-hidden bg-brand-black"
        >
          <motion.video
            ref={videoRef}
            style={animate ? { scale: videoZoom } : undefined}
            src="/hero-video-scrub.mp4"
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
          />

          {/* Legibility gradient — heavy while the headline is on screen */}
          <motion.div
            style={animate ? { opacity: overlayOpacity } : undefined}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/75 to-brand-primary/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent" />
          </motion.div>

          {/* Cinematic vignette, always on */}
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.45)] pointer-events-none" />

          {/* Act 3 backdrop + closing statement */}
          {animate && (
            <>
              <motion.div
                style={{ opacity: stingerBackdrop }}
                className="absolute inset-0 bg-brand-black"
              />
              <motion.div
                style={{ opacity: stingerOpacity, y: stingerY }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
              >
                <p className="text-brand-accent text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] mb-4">
                  High Performance Academy · {siteConfig.address.city}
                </p>
                <h2 className="font-black uppercase tracking-tight leading-[1.05] text-[clamp(1.75rem,6vw,4rem)]">
                  Where power
                  <span className="block text-brand-accent">
                    meets precision
                  </span>
                </h2>
              </motion.div>
            </>
          )}
        </motion.div>

        {/* Act 1 content — parallaxes up and fades as you scroll */}
        <motion.div
          style={animate ? { y: textY, opacity: textOpacity } : undefined}
          className="relative z-10 w-full"
        >
          <Container className="w-full pt-24 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col justify-center text-left">
                <MotionSection stagger>
                  <MotionItem>
                    <h1 className="font-black uppercase tracking-tight mb-8 leading-none">
                      <span className="block text-brand-white text-[clamp(1.75rem,9vw,4.5rem)] lg:text-hero">
                        Power<span className="text-brand-accent">My</span>
                        Tennis
                      </span>
                      <span className="block text-brand-accent text-h3 mt-3 tracking-[0.08em]">
                        {siteConfig.name.split(" ").slice(1).join(" ")}
                      </span>
                    </h1>
                  </MotionItem>

                  <MotionItem>
                    <p className="text-body-lg text-brand-neutral font-medium max-w-xl mb-12 leading-relaxed">
                      {siteConfig.tagline}
                    </p>
                  </MotionItem>

                  <MotionItem>
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                      <MagneticButton>
                        <Button
                          href="/contact"
                          variant="primary"
                          className="w-full sm:w-auto px-10 py-5 shadow-xl hover:shadow-2xl transition-shadow text-sm tracking-widest"
                        >
                          Book a Trial
                        </Button>
                      </MagneticButton>

                      <MagneticButton intensity={0.1}>
                        <Button
                          href="/pathway"
                          variant="outline-white"
                          className="w-full sm:w-auto px-10 py-5 bg-brand-primary/20 backdrop-blur-sm text-sm tracking-widest"
                        >
                          Explore Pathway
                        </Button>
                      </MagneticButton>
                    </div>
                  </MotionItem>
                </MotionSection>
              </div>

              <div className="hidden lg:block lg:col-span-5" />
            </div>
          </Container>
        </motion.div>

        {/* Scroll hint — fades the moment scrolling starts */}
        {animate && (
          <motion.div
            style={{ opacity: scrollHintOpacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
          >
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-brand-white/60">
              Scroll
            </span>
            <div className="relative w-px h-10 overflow-hidden bg-brand-white/20">
              <motion.div
                animate={{ y: ["-100%", "100%"] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-x-0 h-1/2 bg-brand-accent"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
