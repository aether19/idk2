import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, DollarSign, Check, ArrowRight, Leaf, Sparkles, Heart, Phone } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const services = [
  {
    id: 1,
    title: '20 Minute Free Discovery Call',
    description:
      'A complimentary, no-obligation conversation to discuss your health goals, symptoms, and how we can work together. This is your opportunity to ask questions and see if we\'re a good fit.',
    duration: '20 min',
    price: 'Free',
    image: '/images/service-discovery.jpg',
    icon: Phone,
    featured: true,
    details: [
      'Discuss your current health concerns and goals',
      'Learn about my approach and methodology',
      'Ask any questions about the process',
      'Determine the best next steps for your journey',
    ],
  },
  {
    id: 2,
    title: 'Nutrition Consultation',
    description:
      'A comprehensive one-on-one session where we dive deep into your health history, symptoms, and lifestyle. You\'ll leave with a personalized nutrition plan and actionable steps to start feeling better.',
    duration: '1 hr 30 min',
    price: '$180',
    image: '/images/service-nutrition.jpg',
    icon: Leaf,
    featured: false,
    details: [
      'Complete health history review',
      'Personalized nutrition protocol',
      'Meal planning guidance',
      'Supplement recommendations',
      'Lifestyle modification strategies',
      'Email support for 1 week after session',
    ],
  },
  {
    id: 3,
    title: 'Follow-Up Nutrition Session',
    description:
      'A focused check-in session to review your progress, address any challenges, and adjust your plan as needed. Consistency is key to lasting results.',
    duration: '30 min',
    price: '$90',
    image: '/images/pillar-foods.jpg',
    icon: Heart,
    featured: false,
    details: [
      'Progress review and adjustments',
      'Address challenges and obstacles',
      'Fine-tune your nutrition plan',
      'Celebrate wins and set new goals',
    ],
  },
  {
    id: 4,
    title: 'Reiki & Sound Healing Session',
    description:
      'A deeply relaxing 45-minute session combining Reiki energy healing with sound therapy to balance your nervous system, reduce stress, and restore your body\'s natural energy flow.',
    duration: '45 min',
    price: '$120',
    image: '/images/service-reiki.jpg',
    icon: Sparkles,
    featured: false,
    details: [
      'Reiki energy healing',
      'Tibetan singing bowl sound therapy',
      'Chakra balancing',
      'Stress and anxiety relief',
      'Deep relaxation and restoration',
    ],
  },
];

export default function ServicesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const headerRef = useScrollReveal<HTMLDivElement>({ y: 40, duration: 0.7 });
  const cardsRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.service-card',
    stagger: 0.15,
    y: 40,
    duration: 0.6,
  });

  return (
    <main className="bg-cream">
      {/* Hero */}
      <section className="relative w-full pt-32 pb-12 md:pt-40 md:pb-16 bg-cream">
        <div className="section-container text-center" ref={headerRef}>
          <p className="font-body text-xs font-medium uppercase tracking-[2px] text-gold mb-4">
            How I Can Help
          </p>
          <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-medium text-olive leading-[1.1] mb-5">
            Services Designed for Your Journey
          </h1>
          <p className="font-body text-base sm:text-lg text-warmgray max-w-[600px] mx-auto leading-relaxed">
            Every woman's path to wellness is unique. Choose the service that resonates with where
            you are right now.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="section-container">
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-card bg-cream-light border border-borderline rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-card-hover ${
                  service.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`${service.featured ? 'grid grid-cols-1 md:grid-cols-2' : ''}`}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <service.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                        {service.featured && (
                          <span className="font-body text-[10px] font-medium uppercase tracking-wider bg-olive text-cream px-2.5 py-1 rounded-full">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <h3 className="font-body text-xl font-medium text-olive mb-2">
                        {service.title}
                      </h3>
                      <p className="font-body text-sm text-warmgray leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-4 mb-5">
                        <span className="inline-flex items-center gap-1.5 font-body text-xs font-medium uppercase tracking-wider bg-olive/10 text-olive px-3 py-1.5 rounded-full">
                          <Clock className="w-3.5 h-3.5" />
                          {service.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-body text-xs font-medium uppercase tracking-wider bg-gold/10 text-olive px-3 py-1.5 rounded-full">
                          <DollarSign className="w-3.5 h-3.5" />
                          {service.price}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link to="/booking" className="flex-1">
                        <Button className="btn-primary w-full text-xs">
                          Book Now
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        className="text-olive hover:text-gold font-body text-sm"
                        onClick={() => setSelectedService(service)}
                      >
                        Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-cream-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-display text-[28px] sm:text-[36px] font-normal text-olive mb-4">
              What to Expect
            </h2>
            <p className="font-body text-base text-warmgray max-w-[500px] mx-auto">
              A simple, supportive process designed to meet you exactly where you are.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[900px] mx-auto">
            {[
              {
                step: '01',
                title: 'Book a Call',
                description: 'Start with a free 20-minute discovery call to share your story and learn how I can help.',
              },
              {
                step: '02',
                title: 'Get Your Plan',
                description: 'Receive a personalized nutrition and wellness plan tailored to your unique body and goals.',
              },
              {
                step: '03',
                title: 'Feel Better',
                description: 'Implement simple, sustainable changes with ongoing support as you reclaim your health.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="font-display text-[48px] font-medium text-gold/30 leading-none">
                  {item.step}
                </span>
                <h3 className="font-body text-lg font-medium text-olive mt-3 mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-warmgray leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-[500px] bg-cream border-borderline">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-olive">
              {selectedService?.title}
            </DialogTitle>
            <DialogDescription className="font-body text-warmgray">
              {selectedService?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 font-body text-xs font-medium uppercase tracking-wider bg-olive/10 text-olive px-3 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                {selectedService?.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 font-body text-xs font-medium uppercase tracking-wider bg-gold/10 text-olive px-3 py-1.5 rounded-full">
                <DollarSign className="w-3.5 h-3.5" />
                {selectedService?.price}
              </span>
            </div>
            <h4 className="font-body text-sm font-medium uppercase tracking-wider text-olive mb-3">
              What's Included
            </h4>
            <ul className="space-y-2.5">
              {selectedService?.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-charcoal">{detail}</span>
                </li>
              ))}
            </ul>
            <Link to="/booking" className="block mt-6">
              <Button className="btn-primary w-full" onClick={() => setSelectedService(null)}>
                Book This Service
              </Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
