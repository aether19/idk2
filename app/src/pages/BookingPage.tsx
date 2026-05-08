import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Phone, Leaf, Heart, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const bookingOptions = [
  {
    id: 'discovery',
    title: 'Free Discovery Call',
    duration: '20 min',
    price: 'Free',
    description: 'A complimentary conversation to discuss your goals and see if we\'re a good fit.',
    icon: Phone,
    image: '/images/service-discovery.jpg',
  },
  {
    id: 'nutrition',
    title: 'Nutrition Consultation',
    duration: '1 hr 30 min',
    price: '$180',
    description: 'Comprehensive session with personalized nutrition plan and actionable steps.',
    icon: Leaf,
    image: '/images/service-nutrition.jpg',
  },
  {
    id: 'followup',
    title: 'Follow-Up Session',
    duration: '30 min',
    price: '$90',
    description: 'Check-in session to review progress and adjust your plan.',
    icon: Heart,
    image: '/images/pillar-foods.jpg',
  },
  {
    id: 'reiki',
    title: 'Reiki & Sound Healing',
    duration: '45 min',
    price: '$120',
    description: 'Energy healing and sound therapy for deep relaxation and balance.',
    icon: Sparkles,
    image: '/images/service-reiki.jpg',
  },
];

export default function BookingPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
  });

  const headerRef = useScrollReveal<HTMLDivElement>({ y: 40, duration: 0.7 });
  const cardsRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.booking-card',
    stagger: 0.1,
    y: 30,
    duration: 0.6,
  });
  const formRef = useScrollReveal<HTMLDivElement>({ y: 30, duration: 0.6 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send data to a backend
  };

  if (submitted) {
    return (
      <main className="bg-cream min-h-screen">
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="section-container max-w-[600px] mx-auto text-center">
            <div className="bg-cream-light border border-borderline rounded-2xl p-10 md:p-14">
              <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-olive" />
              </div>
              <h2 className="font-display text-[28px] sm:text-[36px] font-normal text-olive mb-4">
                Booking Request Received!
              </h2>
              <p className="font-body text-base text-warmgray leading-relaxed mb-6">
                Thank you for reaching out. I'll be in touch within 24 hours to confirm your
                appointment and provide next steps.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/">
                  <Button className="btn-secondary">Return Home</Button>
                </Link>
                <button onClick={() => setSubmitted(false)} className="btn-primary">
                  Book Another
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="relative w-full pt-32 pb-12 md:pt-40 md:pb-16 bg-cream">
        <div className="section-container text-center" ref={headerRef}>
          <p className="font-body text-xs font-medium uppercase tracking-[2px] text-gold mb-4">
            Begin Your Journey
          </p>
          <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-medium text-olive leading-[1.1] mb-5">
            Book Your Session
          </h1>
          <p className="font-body text-base sm:text-lg text-warmgray max-w-[550px] mx-auto leading-relaxed">
            Select a service below and fill out the form. I'll get back to you within 24 hours to
            confirm your appointment.
          </p>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-8 md:py-12 bg-cream">
        <div className="section-container">
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bookingOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedService(option.id)}
                className={`booking-card text-left bg-cream-light border rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
                  selectedService === option.id
                    ? 'border-olive ring-2 ring-olive/20'
                    : 'border-borderline'
                }`}
              >
                <option.icon className="w-6 h-6 text-gold mb-3" strokeWidth={1.5} />
                <h3 className="font-body text-base font-medium text-olive mb-1">
                  {option.title}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-body text-[11px] uppercase tracking-wider text-warmgray">
                    {option.duration}
                  </span>
                  <span className="text-borderline">|</span>
                  <span className="font-body text-[11px] uppercase tracking-wider text-olive font-medium">
                    {option.price}
                  </span>
                </div>
                <p className="font-body text-xs text-warmgray leading-relaxed">
                  {option.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 md:py-20 bg-cream-light">
        <div className="section-container">
          <div ref={formRef} className="max-w-[600px] mx-auto">
            <div className="bg-white border border-borderline rounded-2xl p-8 md:p-10">
              <h2 className="font-display text-2xl text-olive mb-6">
                {selectedService
                  ? `Booking: ${bookingOptions.find((o) => o.id === selectedService)?.title}`
                  : 'Request an Appointment'}
              </h2>

              {!selectedService && (
                <p className="font-body text-sm text-warmgray mb-6">
                  Please select a service above, or fill out the form and I'll help you choose the
                  right option.
                </p>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-body text-xs font-medium uppercase tracking-wider text-olive">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="bg-cream-light border-borderline focus:border-olive focus:ring-olive/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body text-xs font-medium uppercase tracking-wider text-olive">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      required
                      className="bg-cream-light border-borderline focus:border-olive focus:ring-olive/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-body text-xs font-medium uppercase tracking-wider text-olive">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(416) 555-1234"
                      className="bg-cream-light border-borderline focus:border-olive focus:ring-olive/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date" className="font-body text-xs font-medium uppercase tracking-wider text-olive">
                      Preferred Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="bg-cream-light border-borderline focus:border-olive focus:ring-olive/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-body text-xs font-medium uppercase tracking-wider text-olive">
                    Tell Me About Yourself
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share a bit about your health goals, current symptoms, or what you're hoping to achieve..."
                    rows={4}
                    className="bg-cream-light border-borderline focus:border-olive focus:ring-olive/20 resize-vertical"
                  />
                </div>

                <Button type="submit" className="btn-primary w-full">
                  Request Appointment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <p className="font-body text-xs text-warmgray text-center">
                  I'll get back to you within 24 hours to confirm your booking.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
