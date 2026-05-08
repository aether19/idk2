import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Brain,
  Weight,
  Battery,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  Instagram,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

/* ───── Data ───── */
const symptoms = [
  {
    icon: Brain,
    title: 'Brain Fog',
    description: "Can't focus? Forget why you walked into a room? Mental clarity is one of the first things to shift — but it doesn't have to stay that way.",
  },
  {
    icon: Weight,
    title: 'Stubborn Weight Gain',
    description: "That midsection weight that won't budge no matter what you try? It's not your fault — your hormones are shifting and your body needs different support.",
  },
  {
    icon: Battery,
    title: 'Energy Crashes',
    description: 'The 3pm slump that feels impossible to shake. Fatigue is one of the most common (and most overlooked) signs your body needs balance.',
  },
  {
    icon: Heart,
    title: 'Overwhelm & Stress',
    description: "When even small things feel like too much. Stress hits differently in perimenopause, but there are gentle ways to bring your nervous system back to calm.",
  },
];

const pillars = [
  {
    number: '01',
    title: 'Foods that Heal',
    description:
      'The foods we eat send powerful messages to our body. During perimenopause, the right nutrition can ease symptoms, balance hormones, and restore energy. Together, we\'ll create an individualized plan that nourishes your body and builds healthy new habits.',
    image: '/images/pillar-foods.jpg',
  },
  {
    number: '02',
    title: 'Energetic Reset',
    description:
      "Your body's energy and nervous system guide how safe, calm, and alive you feel. Through Reiki and breathwork, we'll bring both back into harmony with simple morning and evening practices that help you feel balanced and ready for restful sleep.",
    image: '/images/pillar-reiki.jpg',
  },
  {
    number: '03',
    title: 'Movement',
    description:
      'Movement is one of the most powerful ways to support your mind and body during perimenopause. Just 20–30 minutes of intentional movement each day can reduce stress, boost your mood, and help you feel grounded and confident again.',
    image: '/images/pillar-movement.jpg',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Rose',
    age: 45,
    quote: "Pam is non-judgmental and sympathetic towards your needs. The suggestions are tailored towards your goals and easy to follow. I finally feel like I have a partner in my health journey.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Aisha',
    age: 52,
    quote: "I sleep better, I no longer have recurrent colds, and I lost 16lbs! Pam's approach is gentle but effective. She helped me understand my body in a whole new way.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Grace',
    age: 64,
    quote: 'I have more energy and lower cholesterol. I would highly recommend Pam for your nutritional goals. She truly listens and creates a plan that works for YOUR life.',
    rating: 5,
  },
];

const instagramPosts = [
  { id: 1, image: '/images/pillar-foods.jpg', alt: 'Nutritious meal prep' },
  { id: 2, image: '/images/pam-kitchen.jpg', alt: 'Behind the scenes' },
  { id: 3, image: '/images/pillar-reiki.jpg', alt: 'Wellness ritual' },
  { id: 4, image: '/images/pillar-movement.jpg', alt: 'Gentle movement' },
  { id: 5, image: '/images/service-reiki.jpg', alt: 'Reiki session' },
  { id: 6, image: '/images/service-nutrition.jpg', alt: 'Nutrition consultation' },
];

/* ───── Hero Section ───── */
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      gsap.set(el.querySelectorAll('.hero-anim'), { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ delay: 0.3 });
    tl.from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' })
      .from('.hero-title', { opacity: 0, y: 30, duration: 0.7, ease: 'power2.out' }, '-=0.2')
      .from('.hero-desc', { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' }, '-=0.3')
      .from('.hero-cta', { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' }, '-=0.2')
      .from('.hero-scroll', { opacity: 0, duration: 0.4 }, '-=0.1');

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[100dvh] flex items-end justify-center overflow-hidden"
    >
      {/* Background Image (always shows, video optional) */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-poster.jpg"
          alt="Serene wellness garden"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(58,74,46,0.7) 0%, rgba(58,74,46,0.35) 45%, rgba(0,0,0,0.15) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center pb-[18vh] px-6 max-w-[800px] mx-auto">
        <p className="hero-subtitle hero-anim font-body text-[13px] font-medium uppercase tracking-[2px] text-cream/90 mb-5">
          A Safe Space for Women in Perimenopause
        </p>
        <h1 className="hero-title hero-anim font-display text-[40px] sm:text-[56px] lg:text-[72px] font-medium text-cream leading-[1.1] mb-6">
          You don't need to navigate perimenopause alone!
        </h1>
        <p className="hero-desc hero-anim font-body text-base sm:text-lg text-cream/85 max-w-[560px] mx-auto mb-8 leading-relaxed">
          Empowering women 40+ to reclaim their energy, balance their hormones, and feel like
          themselves again through holistic nutrition, Reiki, and personalized support.
        </p>
        <div className="hero-cta hero-anim flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/booking">
            <Button className="btn-primary">Book Your Free Call</Button>
          </Link>
          <a href="#perimenopause-intro" className="btn-ghost">
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll hero-anim absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-6 h-6 text-cream/50 animate-pulse-soft" />
      </div>
    </section>
  );
}

/* ───── Perimenopause Intro Section ───── */
function PerimenopauseIntro() {
  const headlineRef = useScrollReveal<HTMLDivElement>({ y: 40, duration: 0.7 });
  const textRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.intro-paragraph',
    stagger: 0.1,
    y: 30,
    duration: 0.6,
  });
  const imageRef = useScrollReveal<HTMLDivElement>({ y: 0, x: 40, duration: 0.8, delay: 0.2 });

  return (
    <section id="perimenopause-intro" className="relative w-full bg-cream">
      {/* Curved top transition */}
      <div
        className="absolute -top-[30px] left-0 right-0 h-[60px] bg-cream"
        style={{ borderRadius: '50% 50% 0 0 / 60px 60px 0 0' }}
      />

      <div className="section-container pt-[120px] md:pt-[140px] pb-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div>
            <div ref={headlineRef}>
              <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[48px] font-normal text-olive leading-[1.15] mb-8">
                You don't have to navigate perimenopause alone
              </h2>
            </div>
            <div ref={textRef} className="space-y-5">
              <p className="intro-paragraph font-body text-base text-charcoal leading-relaxed">
                You don't have to navigate perimenopause alone or pretend everything is 'fine'
                while your body feels completely different. This chapter wasn't meant to be powered
                through with sheer willpower.
              </p>
              <p className="intro-paragraph font-body text-base text-charcoal leading-relaxed">
                With the right support, understanding, and guidance, you can feel more grounded,
                energized, and in tune with yourself again. My role is to meet you exactly where
                you are — without judgment, pressure, or perfection — and help you make sense of
                what your symptoms are trying to tell you.
              </p>
              <p className="intro-paragraph font-body text-base text-charcoal leading-relaxed">
                Together, we'll focus on simple, supportive strategies that balance your hormones,
                calm your nervous system, and reduce the overwhelm so many women carry in this
                season.
              </p>
              <div className="intro-paragraph pt-4">
                <Link to="/booking">
                  <Button className="btn-secondary">Start Your Journey</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div ref={imageRef}>
            <div className="rounded-[20px] overflow-hidden shadow-image">
              <img
                src="/images/pam-portrait.jpg"
                alt="Pam - Functional Nutritionist"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Symptoms Section ───── */
function SymptomsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 40, duration: 0.7 });
  const cardsRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.symptom-card',
    stagger: 0.15,
    y: 40,
    duration: 0.6,
  });

  return (
    <section className="relative w-full bg-cream py-[80px] md:py-[100px]">
      <div className="section-container">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-[700px] mx-auto mb-14">
          <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[44px] font-normal text-olive leading-[1.15]">
            It's not all in your head, your body is asking for support!
          </h2>
          <p className="font-body text-base text-warmgray mt-4">
            These are some of the most common signs your body is going through perimenopause:
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {symptoms.map((s) => (
            <div
              key={s.title}
              className="symptom-card bg-cream-light border border-borderline rounded-2xl p-8 md:p-10 text-center transition-all duration-400 hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <s.icon className="w-12 h-12 text-gold mx-auto mb-5" strokeWidth={1.5} />
              <h3 className="font-body text-lg font-medium text-olive mb-3">{s.title}</h3>
              <p className="font-body text-sm text-warmgray leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Curved transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40px] bg-cream-light"
        style={{ borderRadius: '50% 50% 0 0 / 40px 40px 0 0' }}
      />
    </section>
  );
}

/* ───── Three Pillar Approach ───── */
function PillarSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 40, duration: 0.7 });
  const cardsRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.pillar-card',
    stagger: 0.2,
    y: 50,
    duration: 0.7,
  });

  return (
    <section className="relative w-full bg-cream-light py-[80px] md:py-[120px]">
      <div className="section-container">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[48px] font-normal text-olive leading-[1.15]">
            A Holistic Approach to Your Wellbeing
          </h2>
          <p className="font-body text-base sm:text-lg text-charcoal max-w-[600px] mx-auto mt-4 leading-relaxed">
            True healing happens when we nourish the body, calm the mind, and move with intention.
            Here's how we'll work together:
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.number}
              className="pillar-card bg-white rounded-[20px] overflow-hidden shadow-card transition-all duration-400 hover:-translate-y-1.5 hover:shadow-card-hover group"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-9">
                <span className="font-body text-[11px] font-medium uppercase tracking-[1.5px] text-gold">
                  {p.number}
                </span>
                <h3 className="font-display text-2xl md:text-[28px] font-medium text-olive mt-3 mb-4">
                  {p.title}
                </h3>
                <div className="w-8 h-0.5 bg-gold mb-4" />
                <p className="font-body text-[15px] text-charcoal leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Testimonials Section ───── */
function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const emblaRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<any>(null);

  const headerRef = useScrollReveal<HTMLDivElement>({ y: 40, duration: 0.7 });

  const initEmbla = useCallback(() => {
    const el = emblaRef.current;
    if (!el || apiRef.current) return;

    // Simple manual carousel
    const scrollTo = (index: number) => {
      const newIndex = Math.max(0, Math.min(index, testimonials.length - 1));
      setActiveIndex(newIndex);
      setCanScrollPrev(newIndex > 0);
      setCanScrollNext(newIndex < testimonials.length - 1);
    };

    (el as any)._scrollTo = scrollTo;
  }, []);

  useEffect(() => {
    initEmbla();
  }, [initEmbla]);

  const scrollPrev = () => {
    if (activeIndex > 0) setActiveIndex((prev) => prev - 1);
  };

  const scrollNext = () => {
    if (activeIndex < testimonials.length - 1) setActiveIndex((prev) => prev + 1);
  };

  const scrollTo = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    setCanScrollPrev(activeIndex > 0);
    setCanScrollNext(activeIndex < testimonials.length - 1);
  }, [activeIndex]);

  return (
    <section className="relative w-full bg-cream py-[80px] md:py-[120px]">
      <div className="section-container">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[44px] font-normal text-olive leading-[1.15]">
            What Women Who Walked the Path Are Saying
          </h2>
          <p className="font-body text-base text-warmgray mt-3">
            Real stories from real women who reclaimed their health.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-[900px] mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-10 w-12 h-12 rounded-full border border-borderline bg-white flex items-center justify-center text-olive hover:bg-olive hover:text-cream transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-10 w-12 h-12 rounded-full border border-borderline bg-white flex items-center justify-center text-olive hover:bg-olive hover:text-cream transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Track */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-blush/20 rounded-[20px] p-8 md:p-12 text-center transition-all duration-300 hover:-translate-y-1">
                    {/* Stars */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                      ))}
                    </div>
                    {/* Quote Mark */}
                    <span className="font-display text-[60px] md:text-[80px] text-gold/40 leading-none block -mb-4">
                      "
                    </span>
                    {/* Quote */}
                    <p className="font-accent italic text-lg md:text-[22px] text-charcoal leading-relaxed mb-6">
                      {t.quote}
                    </p>
                    {/* Attribution */}
                    <p className="font-body text-sm font-medium text-olive">
                      {t.name}, {t.age}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-olive w-6' : 'bg-borderline hover:bg-olive/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── CTA Banner Section ───── */
function CTABanner() {
  const ref = useScrollReveal<HTMLDivElement>({
    childSelector: '.cta-anim',
    stagger: 0.15,
    y: 30,
    duration: 0.6,
  });

  return (
    <section className="relative w-full bg-forest py-[80px] md:py-[120px] overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div ref={ref} className="section-container relative z-10">
        <div className="max-w-[700px] mx-auto text-center">
          <div className="cta-anim w-[60px] h-0.5 bg-gold mx-auto mb-8" />
          <h2 className="cta-anim font-display text-[28px] sm:text-[36px] lg:text-[44px] font-normal text-cream leading-[1.2] mb-6">
            Every Woman's Journey is Unique. Are You Ready to Begin Yours?
          </h2>
          <p className="cta-anim font-body text-base sm:text-lg text-cream/80 max-w-[520px] mx-auto mb-8 leading-relaxed">
            Stop waiting for symptoms to get better on their own. Let's take that first step
            together with a free 20-minute discovery call.
          </p>
          <div className="cta-anim">
            <Link to="/booking">
              <Button className="bg-olive-light hover:bg-[#6A7D5A] text-cream font-body font-medium text-sm uppercase tracking-widest px-10 py-4 rounded-pill transition-all duration-300 hover:-translate-y-0.5">
                Book Your Free Discovery Call
              </Button>
            </Link>
          </div>
          <p className="cta-anim font-body text-[13px] text-cream/50 mt-4">
            No obligation. Just a conversation.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───── Instagram Feed Section ───── */
function InstagramSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30, duration: 0.6 });
  const gridRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.insta-item',
    stagger: 0.1,
    y: 20,
    duration: 0.5,
  });

  return (
    <section className="relative w-full bg-cream py-[60px] md:py-[80px]">
      <div className="section-container">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-10">
          <Instagram className="w-8 h-8 text-olive mx-auto mb-3" strokeWidth={1.5} />
          <h3 className="font-display text-2xl md:text-[32px] font-normal text-olive">
            Follow Our Journey
          </h3>
          <a
            href="https://instagram.com/roothealingandnutrition"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-olive hover:text-gold transition-colors duration-200 inline-block mt-2 underline underline-offset-2"
          >
            @roothealingandnutrition
          </a>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/roothealingandnutrition"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-item relative aspect-square rounded-xl overflow-hidden group"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-olive/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="w-8 h-8 text-cream" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href="https://instagram.com/roothealingandnutrition"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-olive uppercase tracking-wider hover:text-gold transition-colors duration-200"
          >
            Follow on Instagram
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───── Home Page ───── */
export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HeroSection />
      <PerimenopauseIntro />
      <SymptomsSection />
      <PillarSection />
      <TestimonialsSection />
      <CTABanner />
      <InstagramSection />
    </main>
  );
}
