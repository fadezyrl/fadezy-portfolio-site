"use client";

import { useEffect, type ReactElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EASE = "power3.out";
const EASE_SOFT = "power2.out";

export const FadezyEffects = (): ReactElement | null => {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      document.documentElement.classList.add("motion-reduced");
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("is-in");
      });
      document.querySelectorAll(".about").forEach((el) => {
        el.classList.add("is-in");
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const clients = document.querySelector(".clients");
      if (clients) {
        gsap.fromTo(
          clients,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: EASE_SOFT,
            scrollTrigger: { trigger: clients, start: "top 92%", once: true },
          },
        );
      }

      const services = document.querySelector(".services");
      if (services) {
        const eyebrow = services.querySelector(".services-eyebrow");
        const count = services.querySelector(".services-count");
        const headline = services.querySelector(".services-headline");
        const entries = gsap.utils.toArray<HTMLElement>(
          services.querySelectorAll(".service-entry"),
        );

        gsap.set([eyebrow, count], { opacity: 0, y: 8 });
        gsap.set(headline, { clipPath: "inset(100% 0 0 0)" });
        entries.forEach((entry) => {
          gsap.set(entry, { opacity: 0, y: 18 });
        });

        const servicesTl = gsap.timeline({
          scrollTrigger: {
            trigger: services,
            start: "top 72%",
            once: true,
          },
          defaults: { ease: EASE },
        });

        servicesTl
          .to([eyebrow, count], { opacity: 1, y: 0, duration: 0.7 }, 0)
          .to(
            headline,
            { clipPath: "inset(0% 0 0 0)", duration: 1.15 },
            0.12,
          );

        entries.forEach((entry, i) => {
          servicesTl.to(
            entry,
            { opacity: 1, y: 0, duration: 0.75 },
            0.4 + i * 0.1,
          );
        });
      }

      const work = document.querySelector(".work");
      if (work) {
        const eyebrow = work.querySelector(".work-eyebrow");
        const headline = work.querySelector(".work-headline");
        const sub = work.querySelector(".work-sub");
        const projects = gsap.utils.toArray<HTMLElement>(
          work.querySelectorAll(".project"),
        );

        gsap.set([eyebrow, sub], { opacity: 0, y: 10 });
        gsap.set(headline, { clipPath: "inset(100% 0 0 0)" });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: work,
              start: "top 70%",
              once: true,
            },
            defaults: { ease: EASE },
          })
          .to(eyebrow, { opacity: 1, y: 0, duration: 0.65 }, 0)
          .to(
            headline,
            { clipPath: "inset(0% 0 0 0)", duration: 1.2 },
            0.12,
          )
          .to(sub, { opacity: 1, y: 0, duration: 0.75 }, 0.45);

        projects.forEach((project) => {
          const visual = project.querySelector(".project-visual");
          const img = project.querySelector(".project-visual-img");
          const rail = project.querySelector(".project-rail");
          const note = project.querySelector(".project-note");

          gsap.set([rail, note], { opacity: 0, y: 14 });
          if (visual) {
            gsap.set(visual, { clipPath: "inset(10% 8% 10% 8%)" });
          }
          if (img) {
            gsap.set(img, { scale: 1.06 });
          }

          gsap
            .timeline({
              scrollTrigger: {
                trigger: project,
                start: "top 78%",
                once: true,
              },
              defaults: { ease: EASE },
            })
            .to(rail, { opacity: 1, y: 0, duration: 0.75 }, 0)
            .to(
              visual,
              { clipPath: "inset(0% 0% 0% 0%)", duration: 1.35 },
              0.1,
            )
            .to(img, { scale: 1, duration: 1.6, clearProps: "scale" }, 0.1)
            .to(note, { opacity: 1, y: 0, duration: 0.8 }, 0.45);

          if (img) {
            gsap.to(img, {
              yPercent: 4,
              ease: "none",
              scrollTrigger: {
                trigger: project,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          }
        });
      }

      const testimonials = document.querySelector(".testimonials");
      if (testimonials) {
        const eyebrow = testimonials.querySelector(".testi-eyebrow");
        const quote = testimonials.querySelector(".testi-quote");
        const foot = testimonials.querySelector(".testi-foot");

        gsap.set(eyebrow, { opacity: 0, y: 8 });
        gsap.set(quote, { opacity: 0, y: 16 });
        gsap.set(foot, { opacity: 0, y: 10 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: testimonials,
              start: "top 70%",
              once: true,
            },
            defaults: { ease: EASE },
          })
          .to(eyebrow, { opacity: 1, y: 0, duration: 0.65 }, 0)
          .to(quote, { opacity: 1, y: 0, duration: 1 }, 0.2)
          .to(foot, { opacity: 1, y: 0, duration: 0.7 }, 0.55);
      }

      const finalCta = document.querySelector(".final-cta");
      if (finalCta) {
        const meta = finalCta.querySelector(".final-cta-meta");
        const lines = gsap.utils.toArray<HTMLElement>(
          finalCta.querySelectorAll(".final-cta-line"),
        );
        const action = finalCta.querySelector(".final-cta-action");

        gsap.set(meta, { opacity: 0, y: 8 });
        gsap.set(lines, { opacity: 0, y: 22 });
        gsap.set(action, { opacity: 0, y: 12 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: finalCta,
              start: "top 75%",
              once: true,
            },
            defaults: { ease: EASE },
          })
          .to(meta, { opacity: 1, y: 0, duration: 0.65 }, 0)
          .to(
            lines,
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 },
            0.15,
          )
          .to(action, { opacity: 1, y: 0, duration: 0.7 }, 0.65);
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
};
