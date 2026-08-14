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
      /* ——— Clients: soft settle into continuous marquee ——— */
      const clients = document.querySelector(".clients");
      if (clients) {
        gsap.fromTo(
          clients,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.1,
            ease: EASE_SOFT,
            scrollTrigger: { trigger: clients, start: "top 90%", once: true },
          },
        );
      }

      /* ——— Services: metadata → headline clip → row cascade ——— */
      const services = document.querySelector(".services");
      if (services) {
        const eyebrow = services.querySelector(".services-head .eyebrow");
        const headline = services.querySelector(".services-head h2");
        const rows = gsap.utils.toArray<HTMLElement>(
          services.querySelectorAll(".service-row"),
        );

        gsap.set(eyebrow, { opacity: 0, y: 8 });
        gsap.set(headline, { clipPath: "inset(100% 0 0 0)" });
        rows.forEach((row) => {
          gsap.set(row, { opacity: 0 });
          gsap.set(row.querySelector(".service-num"), { opacity: 0, y: 10 });
          gsap.set(row.querySelector(".service-title"), {
            opacity: 0,
            y: 16,
          });
          gsap.set(row.querySelector(".service-desc"), { opacity: 0, y: 12 });
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
          .to(eyebrow, { opacity: 1, y: 0, duration: 0.7 }, 0)
          .to(
            headline,
            { clipPath: "inset(0% 0 0 0)", duration: 1.15 },
            0.15,
          );

        rows.forEach((row, i) => {
          const at = 0.45 + i * 0.18;
          servicesTl
            .to(row, { opacity: 1, duration: 0.01 }, at)
            .to(
              row.querySelector(".service-num"),
              { opacity: 1, y: 0, duration: 0.55 },
              at,
            )
            .to(
              row.querySelector(".service-title"),
              { opacity: 1, y: 0, duration: 0.75 },
              at + 0.08,
            )
            .to(
              row.querySelector(".service-desc"),
              { opacity: 1, y: 0, duration: 0.7 },
              at + 0.16,
            );
        });
      }

      /* ——— Work: editorial head + per-project clip image ——— */
      const work = document.querySelector(".work");
      if (work) {
        const eyebrow = work.querySelector(".work-head .eyebrow");
        const headline = work.querySelector(".work-head h2");
        const sub = work.querySelector(".work-head p");
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
          const meta = project.querySelector(".project-meta");
          const lower = project.querySelector(".project-lower");

          gsap.set(project, { opacity: 1 });
          gsap.set(meta, { opacity: 0, y: 14 });
          gsap.set(lower, { opacity: 0, y: 16 });
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
            .to(
              visual,
              { clipPath: "inset(0% 0% 0% 0%)", duration: 1.35 },
              0,
            )
            .to(img, { scale: 1, duration: 1.6, clearProps: "scale" }, 0)
            .to(meta, { opacity: 1, y: 0, duration: 0.8 }, 0.35)
            .to(lower, { opacity: 1, y: 0, duration: 0.85 }, 0.55);

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

      /* ——— Transformation: head then frame reveal ——— */
      const transformation = document.querySelector(".transformation");
      if (transformation) {
        const eyebrow = transformation.querySelector(".t-head .eyebrow");
        const headline = transformation.querySelector(".t-head h2");
        const sub = transformation.querySelector(".t-head p");
        const slider = transformation.querySelector(".slider");
        const labels = transformation.querySelector(".t-labels");

        gsap.set([eyebrow, sub], { opacity: 0, y: 10 });
        gsap.set(headline, { clipPath: "inset(100% 0 0 0)" });
        gsap.set(slider, { clipPath: "inset(8% 4% 8% 4%)", opacity: 0.92 });
        gsap.set(labels, { opacity: 0, y: 12 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: transformation,
              start: "top 70%",
              once: true,
            },
            defaults: { ease: EASE },
          })
          .to(eyebrow, { opacity: 1, y: 0, duration: 0.65 }, 0)
          .to(
            headline,
            { clipPath: "inset(0% 0 0 0)", duration: 1.15 },
            0.1,
          )
          .to(sub, { opacity: 1, y: 0, duration: 0.75 }, 0.4)
          .to(
            slider,
            {
              clipPath: "inset(0% 0% 0% 0%)",
              opacity: 1,
              duration: 1.3,
            },
            0.35,
          )
          .to(labels, { opacity: 1, y: 0, duration: 0.7 }, 0.85);
      }

      /* ——— Testimonials: quiet quote unveil ——— */
      const testimonials = document.querySelector(".testimonials");
      if (testimonials) {
        const eyebrow = testimonials.querySelector(".testi-head .eyebrow");
        const headline = testimonials.querySelector(".testi-head h2");
        const quote = testimonials.querySelector(".testi.is-primary .testi-quote");
        const attrib = testimonials.querySelector(".testi.is-primary .attrib");
        const nav = testimonials.querySelector(".testi-nav");

        gsap.set(eyebrow, { opacity: 0, y: 8 });
        gsap.set(headline, { clipPath: "inset(100% 0 0 0)" });
        gsap.set(quote, { clipPath: "inset(0 0 100% 0)", opacity: 1 });
        gsap.set(attrib, { opacity: 0, y: 10 });
        gsap.set(nav, { opacity: 0 });

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
          .to(
            headline,
            { clipPath: "inset(0% 0 0 0)", duration: 1.1 },
            0.12,
          )
          .to(
            quote,
            { clipPath: "inset(0% 0 0% 0)", duration: 1.2 },
            0.35,
          )
          .to(attrib, { opacity: 1, y: 0, duration: 0.7 }, 0.75)
          .to(nav, { opacity: 1, duration: 0.6 }, 1);
      }

      /* ——— Final CTA: media drift + staged copy ——— */
      const finalCta = document.querySelector(".final-cta");
      if (finalCta) {
        const media = finalCta.querySelector(".final-cta-media");
        const video = finalCta.querySelector(".final-cta-video");
        const h2 = finalCta.querySelector("h2");
        const em = finalCta.querySelector("h2 em");
        const sub = finalCta.querySelector(".sub");
        const ctas = finalCta.querySelector(".ctas");
        const servicesLine = finalCta.querySelector(".services-line");

        gsap.set([h2, sub, ctas, servicesLine], { opacity: 0, y: 18 });
        if (em) gsap.set(em, { opacity: 0.35 });
        if (video) gsap.set(video, { scale: 1.08 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: finalCta,
              start: "top 75%",
              once: true,
            },
            defaults: { ease: EASE },
          })
          .to(video, { scale: 1, duration: 2.2, ease: EASE_SOFT }, 0)
          .to(h2, { opacity: 1, y: 0, duration: 1 }, 0.2)
          .to(em, { opacity: 1, duration: 0.9 }, 0.45)
          .to(sub, { opacity: 1, y: 0, duration: 0.8 }, 0.55)
          .to(ctas, { opacity: 1, y: 0, duration: 0.7 }, 0.75)
          .to(servicesLine, { opacity: 1, y: 0, duration: 0.65 }, 0.95);

        if (media) {
          gsap.to(media, {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: finalCta,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }

      /* Hero entrance stays CSS-owned; scroll parallax reserved for work + CTA */
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
};
