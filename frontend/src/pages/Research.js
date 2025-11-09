import { useEffect, useState } from 'react';
import { BarChart3, Target, Heart, TrendingUp } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Research = () => {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await axios.get(`${API}/research-insights`);
        setInsights(response.data);
      } catch (error) {
        console.error('Error fetching insights:', error);
      }
    };
    fetchInsights();
  }, []);

  const categoryIcons = {
    Demographics: Target,
    'Brand Equity': Heart,
    Perception: Eye,
    'Consumer Behavior': TrendingUp,
    Digital: BarChart3,
    Values: Heart
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-5xl mx-auto text-center fade-in">
          <span className="inline-block text-sm font-medium text-copper bg-white px-6 py-2 rounded-full mb-6">Research & Strategy</span>
          <h1 className="section-title">
            Understanding the Coffee Drinker
          </h1>
          <p className="section-subtitle mx-auto mt-6">
            Before touching any design, we immersed ourselves in research—customer interviews, competitive analysis, market trends, and brand perception studies.
          </p>
        </div>
      </section>

      {/* Research Process */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-espresso mb-12 text-center">Our Research Methodology</h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center" data-testid="research-method-1">
              <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-playfair font-bold text-copper">1</span>
              </div>
              <h3 className="font-semibold text-espresso mb-2">Customer Interviews</h3>
              <p className="text-sm text-charcoal/70">45+ in-depth conversations with loyal and lapsed customers</p>
            </div>

            <div className="text-center" data-testid="research-method-2">
              <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-playfair font-bold text-copper">2</span>
              </div>
              <h3 className="font-semibold text-espresso mb-2">Market Analysis</h3>
              <p className="text-sm text-charcoal/70">Competitive landscape and specialty coffee trend evaluation</p>
            </div>

            <div className="text-center" data-testid="research-method-3">
              <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-playfair font-bold text-copper">3</span>
              </div>
              <h3 className="font-semibold text-espresso mb-2">Brand Perception</h3>
              <p className="text-sm text-charcoal/70">Surveys and focus groups across demographics</p>
            </div>

            <div className="text-center" data-testid="research-method-4">
              <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-playfair font-bold text-copper">4</span>
              </div>
              <h3 className="font-semibold text-espresso mb-2">Digital Audit</h3>
              <p className="text-sm text-charcoal/70">Social media, website analytics, and online sentiment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">Key Research Insights</h2>
            <p className="section-subtitle mx-auto">
              Six critical findings that shaped our rebranding strategy and design direction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight, index) => {
              const Icon = categoryIcons[insight.category] || BarChart3;
              return (
                <div
                  key={insight.id}
                  className="bg-white p-8 rounded-2xl shadow-lg hover-lift"
                  data-testid={`insight-card-${index}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 text-copper" />
                    <span className="text-xs font-semibold text-copper bg-copper/10 px-3 py-1 rounded-full">
                      {insight.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-espresso mb-3">{insight.title}</h3>
                  <p className="text-charcoal/70 mb-4 leading-relaxed">{insight.description}</p>
                  <div className="text-2xl font-playfair font-bold text-copper">{insight.metric}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">Target Personas</h2>
            <p className="section-subtitle mx-auto">
              Based on research, we identified three core customer personas to guide brand development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-latte p-8 rounded-2xl" data-testid="persona-heritage">
              <div className="text-4xl mb-4">👵</div>
              <h3 className="text-xl font-bold text-espresso mb-2">The Heritage Loyalist</h3>
              <p className="text-sm text-copper font-medium mb-4">Age 55+ • Regular Customer Since 1980s</p>
              <p className="text-charcoal/70 mb-4">Values tradition, community connection, and consistency. Concerned rebrand might lose the familiar warmth.</p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-semibold text-espresso mb-2">Design Implications:</p>
                <p className="text-sm text-charcoal/70">Preserve warmth and approachability. Honor heritage visually.</p>
              </div>
            </div>

            <div className="bg-latte p-8 rounded-2xl" data-testid="persona-explorer">
              <div className="text-4xl mb-4">🧑</div>
              <h3 className="text-xl font-bold text-espresso mb-2">The Coffee Explorer</h3>
              <p className="text-sm text-copper font-medium mb-4">Age 25-35 • Specialty Coffee Enthusiast</p>
              <p className="text-charcoal/70 mb-4">Seeks quality, ethical sourcing, and unique experiences. Values aesthetics and brand story.</p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-semibold text-espresso mb-2">Design Implications:</p>
                <p className="text-sm text-charcoal/70">Modern aesthetics, craft emphasis, Instagram-worthy moments.</p>
              </div>
            </div>

            <div className="bg-latte p-8 rounded-2xl" data-testid="persona-professional">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-espresso mb-2">The Busy Professional</h3>
              <p className="text-sm text-copper font-medium mb-4">Age 30-45 • Daily Commuter</p>
              <p className="text-charcoal/70 mb-4">Wants premium quality with convenience. Values efficiency, rewards programs, mobile ordering.</p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm font-semibold text-espresso mb-2">Design Implications:</p>
                <p className="text-sm text-charcoal/70">Clear information hierarchy, digital-first experience, premium positioning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Direction */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-12 rounded-3xl shadow-xl">
            <h2 className="font-playfair text-3xl font-bold text-espresso mb-6 text-center">Strategic Brand Direction</h2>
            <div className="h-1 w-24 bg-copper mx-auto mb-8"></div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-copper mb-3">Brand Positioning</h3>
                <p className="text-charcoal/80 leading-relaxed">
                  "The Pacific Northwest's heritage coffee roaster that bridges generational coffee culture—honoring craft tradition while embracing contemporary specialty coffee excellence."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-copper mb-3">Brand Values</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3">
                    <span className="text-copper">•</span>
                    <span className="text-charcoal/80"><strong>Heritage:</strong> 40+ years of community roots</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-copper">•</span>
                    <span className="text-charcoal/80"><strong>Craft:</strong> Quality and care in every cup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-copper">•</span>
                    <span className="text-charcoal/80"><strong>Warmth:</strong> Approachable, welcoming spaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-copper">•</span>
                    <span className="text-charcoal/80"><strong>Progress:</strong> Evolution without abandoning roots</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-copper mb-3">Voice & Tone</h3>
                <p className="text-charcoal/80 leading-relaxed">
                  Warm yet refined. Knowledgeable without being pretentious. Storytelling that celebrates both tradition and innovation. Approachable premium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Eye = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

export default Research;