import { useEffect, useState } from 'react';
import { TrendingUp, Users, Heart, DollarSign, Award } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Impact = () => {
  const [metrics, setMetrics] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [metricsRes, testimonialsRes] = await Promise.all([
          axios.get(`${API}/impact-metrics`),
          axios.get(`${API}/testimonials`)
        ]);
        setMetrics(metricsRes.data);
        setTestimonials(testimonialsRes.data);
      } catch (error) {
        console.error('Error fetching impact data:', error);
      }
    };
    fetchData();
  }, []);

  const metricIcons = {
    0: Award,
    1: Users,
    2: Heart,
    3: TrendingUp,
    4: DollarSign,
    5: TrendingUp
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-5xl mx-auto text-center fade-in">
          <span className="inline-block text-sm font-medium text-copper bg-white px-6 py-2 rounded-full mb-6">Results & Impact</span>
          <h1 className="section-title">
            A Brand Transformation
          </h1>
          <p className="section-subtitle mx-auto mt-6">
            Six months post-launch, the rebrand delivered measurable results across every key metric—from brand perception to revenue growth.
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">Measurable Impact</h2>
            <p className="section-subtitle mx-auto">
              Data-driven results demonstrating the power of strategic rebranding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metricIcons[index] || TrendingUp;
              return (
                <div
                  key={metric.id}
                  className="metric-card"
                  data-testid={`metric-card-${index}`}
                >
                  <Icon className="w-10 h-10 text-copper mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal/70 mb-4">{metric.metric_name}</h3>
                  <div className="flex items-end justify-between mb-2">
                    <div>
                      <div className="text-sm text-charcoal/50 mb-1">Before</div>
                      <div className="text-2xl font-bold text-charcoal/60">{metric.before_value}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-charcoal/50 mb-1">After</div>
                      <div className="text-3xl font-playfair font-bold text-copper">{metric.after_value}</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-espresso/10">
                    <div className="text-2xl font-bold text-espresso">{metric.improvement}</div>
                    <div className="text-sm text-charcoal/60">improvement</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">Customer Voices</h2>
            <p className="section-subtitle mx-auto">
              Real feedback from customers experiencing the transformed brand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-card" data-testid={`testimonial-card-${index}`}>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-espresso">{testimonial.name}</h3>
                    <p className="text-sm text-charcoal/60">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-charcoal/80 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">Key Takeaways</h2>
            <p className="section-subtitle mx-auto">
              Lessons learned from this comprehensive rebranding journey.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-latte p-8 rounded-2xl" data-testid="takeaway-1">
              <h3 className="text-xl font-bold text-copper mb-3">1. Research Drives Strategy</h3>
              <p className="text-charcoal/70">
                Deep customer insights were essential to understanding the balance between honoring heritage and embracing modernity. Without research, we would have missed the emotional connection loyal customers had with the brand's history.
              </p>
            </div>

            <div className="bg-latte p-8 rounded-2xl" data-testid="takeaway-2">
              <h3 className="text-xl font-bold text-copper mb-3">2. Consistency Is Everything</h3>
              <p className="text-charcoal/70">
                A cohesive identity system across all touchpoints—from packaging to digital—creates a unified brand experience that builds recognition and trust exponentially faster than fragmented approaches.
              </p>
            </div>

            <div className="bg-latte p-8 rounded-2xl" data-testid="takeaway-3">
              <h3 className="text-xl font-bold text-copper mb-3">3. Don't Fear Evolution</h3>
              <p className="text-charcoal/70">
                Legacy brands often resist change from fear of alienating existing customers. Our results prove that thoughtful evolution can attract new audiences while deepening loyalty with existing ones.
              </p>
            </div>

            <div className="bg-latte p-8 rounded-2xl" data-testid="takeaway-4">
              <h3 className="text-xl font-bold text-copper mb-3">4. Design With Purpose</h3>
              <p className="text-charcoal/70">
                Every design decision—from color choices to typography—was rooted in strategic objectives and customer insights. Beautiful design that doesn't serve business goals is just decoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-5xl mx-auto text-center">
          <Award className="w-16 h-16 text-copper mx-auto mb-6" />
          <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">Recognition</h2>
          <p className="section-subtitle mx-auto mb-12">
            The Vintage Brew rebrand has been recognized by industry organizations and publications.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl" data-testid="award-1">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-semibold text-espresso mb-2">Brand Impact Awards 2024</h3>
              <p className="text-sm text-charcoal/60">Gold - Brand Transformation</p>
            </div>

            <div className="bg-white p-6 rounded-2xl" data-testid="award-2">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="font-semibold text-espresso mb-2">Design Excellence</h3>
              <p className="text-sm text-charcoal/60">Featured in Creative Review</p>
            </div>

            <div className="bg-white p-6 rounded-2xl" data-testid="award-3">
              <div className="text-3xl mb-3">📰</div>
              <h3 className="font-semibold text-espresso mb-2">Industry Press</h3>
              <p className="text-sm text-charcoal/60">Fast Company Case Study</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding bg-espresso text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-lg mb-10 text-white/80 max-w-2xl mx-auto">
            This case study demonstrates the power of strategic rebranding. Whether you're a legacy brand needing refresh or a new venture seeking identity, thoughtful design creates measurable business impact.
          </p>
          <button className="bg-copper text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-espresso transition-all" data-testid="contact-btn">
            Let's Talk About Your Brand
          </button>
        </div>
      </section>
    </div>
  );
};

export default Impact;