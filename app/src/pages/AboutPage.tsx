import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Award, BookOpen, Heart, Leaf, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';

const education = [
  { year: '2020', title: 'Applied Holistic Nutrition', school: 'Institute of Holistic Nutrition', icon: BookOpen },
  { year: '2018', title: 'Holistic Health Practitioner', school: 'Canadian College of Homeopathic Medicine', icon: Heart },
  { year: '2025', title: "Women's Health Coach", school: 'Institute of Integrative Nutrition', icon: Sparkles },
  { year: '2025', title: 'Menopause Coach', school: 'The Menopause Society', icon: Leaf },
];

const certifications = [
  'Reiki Master — Level 1, 2 & Master',
  'Food Relationship Specialist',
  'Hormone Health Certified',
];

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const heroRef = useScrollReveal<HTMLElement>({ y: 30, duration: 0.7 });
  const storyRef = useScrollReveal<HTMLDivElement>({ childSelector: '.story-anim', stagger: 0.1, y: 30, duration: 0.6 });
  const eduRef = useScrollReveal<HTMLDivElement>({ childSelector: '.edu-item', stagger: 0.12, y: 30, duration: 0.6 });
  const certRef = useScrollReveal<HTMLDivElement>({ childSelector: '.cert-item', stagger: 0.1, y: 20, duration: 0.5 });

  return (
    <main className="bg-cream">
      {/* Hero */}
      <section ref={heroRef} className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-cream">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="font-body text-xs font-medium uppercase tracking-[2px] text-gold mb-4">
                About Pam
              </p>
              <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-medium text-olive leading-[1.1] mb-6">
                From Struggle to Strength
              </h1>
              <p className="font-body text-base sm:text-lg text-charcoal leading-relaxed max-w-[500px]">
                I'm Pam — a Functional Nutritionist, Reiki Master, and fellow woman who has walked
                through the fire of perimenopause and come out the other side with a mission to help
                others.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-[20px] overflow-hidden shadow-image">
                <img
                  src="/images/pam-portrait.jpg"
                  alt="Pam - Root Healing and Nutrition"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-olive text-cream px-6 py-3 rounded-full font-body text-sm font-medium">
                15+ Years of Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-16 md:py-24 bg-cream-light">
        <div className="section-container">
          <div ref={storyRef} className="max-w-[800px] mx-auto">
            <h2 className="story-anim font-display text-[28px] sm:text-[36px] font-normal text-olive mb-8 text-center">
              My Journey
            </h2>
            <div className="space-y-6">
              <p className="story-anim font-body text-base text-charcoal leading-relaxed">
                Like many of the women I work with, my journey into holistic health began with my
                own struggles. In my early 40s, I found myself dealing with unexplained weight gain,
                crippling fatigue, brain fog, and mood swings that made me feel like a stranger in
                my own body. Despite visiting multiple doctors, I kept hearing the same thing:
                "Everything looks normal."
              </p>
              <p className="story-anim font-body text-base text-charcoal leading-relaxed">
                But I knew something wasn't right. I refused to accept that feeling this way was
                simply "part of getting older." That determination led me down a path of deep
                research and education in holistic nutrition, energy healing, and functional
                medicine — and ultimately, to becoming the practitioner I wished I had during my
                own transition.
              </p>
              <p className="story-anim font-body text-base text-charcoal leading-relaxed">
                Today, I combine evidence-based nutritional science with ancient healing modalities
                like Reiki to offer a truly holistic approach to women's health. My practice is
                built on the belief that every woman deserves to feel vibrant, balanced, and
                empowered at every stage of life — especially during perimenopause, when our
                bodies need support the most.
              </p>
              <p className="story-anim font-body text-base text-charcoal leading-relaxed">
                When I'm not working with clients, you'll find me experimenting with new recipes in
                my kitchen, practicing yoga in my garden, or exploring Toronto's amazing food
                scene. I believe that healing should be joyful, not restrictive — and that the
                journey to wellness is just as important as the destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-display text-[28px] sm:text-[36px] font-normal text-olive">
              Education & Training
            </h2>
            <p className="font-body text-base text-warmgray mt-3 max-w-[500px] mx-auto">
              Committed to ongoing learning and evidence-based practice.
            </p>
          </div>

          <div ref={eduRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1000px] mx-auto">
            {education.map((edu) => (
              <div
                key={edu.year + edu.title}
                className="edu-item bg-cream-light border border-borderline rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <edu.icon className="w-8 h-8 text-gold mx-auto mb-4" strokeWidth={1.5} />
                <span className="font-body text-xs font-medium uppercase tracking-wider text-gold">
                  {edu.year}
                </span>
                <h3 className="font-body text-base font-medium text-olive mt-2 mb-1">
                  {edu.title}
                </h3>
                <p className="font-body text-sm text-warmgray">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20 bg-forest">
        <div className="section-container">
          <div ref={certRef} className="max-w-[700px] mx-auto text-center">
            <h2 className="cert-item font-display text-[28px] sm:text-[36px] font-normal text-cream mb-8">
              Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="cert-item flex items-center justify-center gap-3 text-cream/90"
                >
                  <Check className="w-5 h-5 text-gold shrink-0" />
                  <span className="font-body text-base">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="section-container text-center">
          <Award className="w-10 h-10 text-gold mx-auto mb-4" strokeWidth={1.5} />
          <h2 className="font-display text-[28px] sm:text-[36px] font-normal text-olive mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="font-body text-base text-warmgray max-w-[500px] mx-auto mb-8">
            Let's work together to create a personalized plan that supports your unique body,
            lifestyle, and goals.
          </p>
          <Link to="/booking">
            <Button className="btn-primary">Book Your Free Discovery Call</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
