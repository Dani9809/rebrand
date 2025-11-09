import { useEffect, useState } from 'react';
import { TrendingDown, Users, Eye, AlertCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Challenge = () => {
  const [brandData, setBrandData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/brand-overview`);
        setBrandData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const challenges = [
    {
      icon: TrendingDown,
      title: 'Declining Performance',
      description: 'Year-over-year foot traffic down 12%, with revenue declining across all locations.',
      color: 'copper'
    },
    {
      icon: Users,
      title: 'Demographic Disconnect',
      description: 'Only 18% of customers under 35, missing the core specialty coffee demographic.',
      color: 'terracotta'
    },
    {
      icon: Eye,
      title: 'Outdated Perception',
      description: 'Brand viewed as dated, corporate, and disconnected from modern coffee culture.',
      color: 'copper'
    },
    {
      icon: AlertCircle,
      title: 'Competitive Pressure',
      description: 'Losing market share to independent cafés and modern specialty chains.',
      color: 'terracotta'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-5xl mx-auto text-center fade-in">
          <span className="inline-block text-sm font-medium text-copper bg-white px-6 py-2 rounded-full mb-6">The Challenge</span>
          <h1 className="section-title">
            A Legacy Brand at a Crossroads
          </h1>
          <p className="section-subtitle mx-auto mt-6">
            {brandData?.brand_name} had built a loyal following over four decades, but by 2023, the brand was struggling to remain relevant in an evolving coffee landscape.
          </p>
        </div>
      </section>

      {/* Main Challenges Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={index}
                  className="metric-card hover-lift"
                  data-testid={`challenge-card-${index}`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-${challenge.color}/10 flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 text-${challenge.color}`} style={{ color: challenge.color === 'copper' ? '#D4756A' : '#B8655F' }} />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-espresso mb-3">{challenge.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{challenge.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before State */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">The Old Identity</h2>
            <p className="section-subtitle mx-auto">
              The original branding reflected 1980s corporate aesthetics—heavy, formal, and disconnected from today's coffee culture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-semibold text-espresso mb-4 text-lg">Visual Language</h3>
              <ul className="space-y-3 text-charcoal/70">
                <li className="flex items-start gap-3">
                  <span className="text-copper mt-1">×</span>
                  <span>Dark, heavy color palette</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-copper mt-1">×</span>
                  <span>Complex, dated logo design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-copper mt-1">×</span>
                  <span>Inconsistent brand applications</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-semibold text-espresso mb-4 text-lg">Brand Voice</h3>
              <ul className="space-y-3 text-charcoal/70">
                <li className="flex items-start gap-3">
                  <span className="text-copper mt-1">×</span>
                  <span>Corporate and impersonal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-copper mt-1">×</span>
                  <span>Focused on convenience over craft</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-copper mt-1">×</span>
                  <span>Lacked storytelling and personality</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-semibold text-espresso mb-4 text-lg">Customer Experience</h3>
              <ul className="space-y-3 text-charcoal/70">
                <li className="flex items-start gap-3">
                  <span className="text-copper mt-1">×</span>
                  <span>Generic café atmosphere</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-copper mt-1">×</span>
                  <span>Limited digital engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-copper mt-1">×</span>
                  <span>Minimal social media presence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">Rebranding Objectives</h2>
            <p className="section-subtitle mx-auto">
              Our goals were clear: honor the heritage while building a brand that resonates with modern coffee enthusiasts.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-latte p-8 rounded-2xl border-l-4 border-copper" data-testid="objective-1">
              <h3 className="text-xl font-semibold text-espresso mb-3">1. Attract Younger Demographics</h3>
              <p className="text-charcoal/70">Increase under-35 customer base from 18% to 40%+ through modern aesthetics and authentic storytelling.</p>
            </div>

            <div className="bg-latte p-8 rounded-2xl border-l-4 border-terracotta" data-testid="objective-2">
              <h3 className="text-xl font-semibold text-espresso mb-3">2. Elevate Brand Perception</h3>
              <p className="text-charcoal/70">Transform perception from 'dated chain' to 'craft coffee destination' while maintaining loyal customer base.</p>
            </div>

            <div className="bg-latte p-8 rounded-2xl border-l-4 border-copper" data-testid="objective-3">
              <h3 className="text-xl font-semibold text-espresso mb-3">3. Create Cohesive Brand System</h3>
              <p className="text-charcoal/70">Develop flexible, modern identity system that works across all touchpoints—physical spaces to digital platforms.</p>
            </div>

            <div className="bg-latte p-8 rounded-2xl border-l-4 border-terracotta" data-testid="objective-4">
              <h3 className="text-xl font-semibold text-espresso mb-3">4. Honor Pacific Northwest Roots</h3>
              <p className="text-charcoal/70">Celebrate 40+ years of community connection and regional coffee heritage in authentic, contemporary way.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenge;