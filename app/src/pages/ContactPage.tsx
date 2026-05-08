import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Send,
  Check,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const headerRef = useScrollReveal<HTMLDivElement>({ y: 40, duration: 0.7 });
  const infoRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.contact-info-item',
    stagger: 0.1,
    y: 20,
    duration: 0.5,
  });
  const formRef = useScrollReveal<HTMLDivElement>({ y: 30, duration: 0.6 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="relative w-full pt-32 pb-12 md:pt-40 md:pb-16 bg-cream">
        <div className="section-container text-center" ref={headerRef}>
          <p className="font-body text-xs font-medium uppercase tracking-[2px] text-gold mb-4">
            Get in Touch
          </p>
          <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-medium text-olive leading-[1.1] mb-5">
            Let's Connect
          </h1>
          <p className="font-body text-base sm:text-lg text-warmgray max-w-[550px] mx-auto leading-relaxed">
            Have questions? I'd love to hear from you. Send me a message and I'll respond as soon
            as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 md:py-16 bg-cream">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 max-w-[1100px] mx-auto">
            {/* Contact Info */}
            <div ref={infoRef}>
              <h2 className="font-display text-2xl text-olive mb-8">Contact Information</h2>

              <div className="space-y-6">
                <a
                  href="mailto:info@roothealingandnutrition.ca"
                  className="contact-info-item flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-olive/10 flex items-center justify-center shrink-0 group-hover:bg-olive transition-colors duration-200">
                    <Mail className="w-5 h-5 text-olive group-hover:text-cream transition-colors duration-200" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-medium uppercase tracking-wider text-olive mb-1">
                      Email
                    </h3>
                    <p className="font-body text-base text-charcoal group-hover:text-olive transition-colors">
                      info@roothealingandnutrition.ca
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+14165551234"
                  className="contact-info-item flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-olive/10 flex items-center justify-center shrink-0 group-hover:bg-olive transition-colors duration-200">
                    <Phone className="w-5 h-5 text-olive group-hover:text-cream transition-colors duration-200" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-medium uppercase tracking-wider text-olive mb-1">
                      Phone
                    </h3>
                    <p className="font-body text-base text-charcoal group-hover:text-olive transition-colors">
                      Call Me
                    </p>
                  </div>
                </a>

                <div className="contact-info-item flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-olive/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-olive" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-medium uppercase tracking-wider text-olive mb-1">
                      Location
                    </h3>
                    <p className="font-body text-base text-charcoal">
                      Toronto, Ontario
                      <br />
                      <span className="text-warmgray text-sm">Virtual sessions available worldwide</span>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-olive/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-olive" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-medium uppercase tracking-wider text-olive mb-1">
                      Hours
                    </h3>
                    <p className="font-body text-base text-charcoal">
                      Monday – Friday: 9am – 6pm
                      <br />
                      <span className="text-warmgray text-sm">Saturday: By appointment</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10 pt-8 border-t border-borderline">
                <h3 className="font-body text-sm font-medium uppercase tracking-wider text-olive mb-4">
                  Follow Along
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com/roothealingandnutrition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center text-olive hover:bg-olive hover:text-cream transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com/roothealingandnutrition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center text-olive hover:bg-olive hover:text-cream transition-all duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="mt-10 p-6 bg-cream-light border border-borderline rounded-xl">
                <h3 className="font-display text-lg text-olive mb-2">
                  Ready to Book?
                </h3>
                <p className="font-body text-sm text-warmgray mb-4">
                  Skip the form and book your session directly.
                </p>
                <Link to="/booking">
                  <Button className="btn-primary text-xs w-full">
                    Book an Appointment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div ref={formRef}>
              <div className="bg-white border border-borderline rounded-2xl p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-olive" />
                    </div>
                    <h3 className="font-display text-2xl text-olive mb-3">
                      Message Sent!
                    </h3>
                    <p className="font-body text-base text-warmgray mb-6">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl text-olive mb-6">
                      Send a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="contact-name" className="font-body text-xs font-medium uppercase tracking-wider text-olive">
                            Your Name
                          </Label>
                          <Input
                            id="contact-name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Jane Smith"
                            required
                            className="bg-cream-light border-borderline focus:border-olive focus:ring-olive/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contact-email" className="font-body text-xs font-medium uppercase tracking-wider text-olive">
                            Email Address
                          </Label>
                          <Input
                            id="contact-email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@example.com"
                            required
                            className="bg-cream-light border-borderline focus:border-olive focus:ring-olive/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-subject" className="font-body text-xs font-medium uppercase tracking-wider text-olive">
                          Subject
                        </Label>
                        <Input
                          id="contact-subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="How can I help you?"
                          required
                          className="bg-cream-light border-borderline focus:border-olive focus:ring-olive/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-message" className="font-body text-xs font-medium uppercase tracking-wider text-olive">
                          Message
                        </Label>
                        <Textarea
                          id="contact-message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell me what's on your mind..."
                          rows={5}
                          required
                          className="bg-cream-light border-borderline focus:border-olive focus:ring-olive/20 resize-vertical"
                        />
                      </div>

                      <Button type="submit" className="btn-primary w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
