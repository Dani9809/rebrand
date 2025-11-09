import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Sparkles } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const [brandData, setBrandData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        const response = await axios.get(`${API}/brand-overview`);
        setBrandData(response.data);
      } catch (error) {
        console.error('Error fetching brand data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrandData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Coffee className="w-12 h-12 text-copper mx-auto mb-4 animate-pulse" />
          <p className="text-charcoal">Loading brand story...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
        <div className="absolute inset-0 gradient-subtle"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-copper/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center fade-in">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-espresso/10">
            <Sparkles className="w-4 h-4 text-copper" />
            <span className="text-sm font-medium text-charcoal">Rebranding Case Study • {brandData?.year}</span>
          </div>
          
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-espresso mb-6 leading-tight" data-testid="hero-title">
            Reviving a Coffee Legacy
          </h1>
          
          <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto mb-4 leading-relaxed">
            How we transformed <span className="font-semibold text-espresso">{brandData?.brand_name}</span>, a struggling 40-year-old coffee chain,
            into a modern specialty café brand that honors heritage while embracing the future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Link to="/challenge" data-testid="explore-journey-btn">
              <button className="btn-primary flex items-center gap-2">
                Explore the Journey
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/impact" data-testid="view-results-btn">
              <button className="btn-secondary">
                View Results
              </button>
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="stat-founded">
              <div className="text-3xl font-playfair font-bold text-copper mb-2">1983</div>
              <div className="text-sm text-charcoal/70">Founded</div>
            </div>
            <div className="text-center" data-testid="stat-locations">
              <div className="text-3xl font-playfair font-bold text-copper mb-2">47</div>
              <div className="text-sm text-charcoal/70">Locations</div>
            </div>
            <div className="text-center" data-testid="stat-improvement">
              <div className="text-3xl font-playfair font-bold text-copper mb-2">+86%</div>
              <div className="text-sm text-charcoal/70">Brand Score</div>
            </div>
            <div className="text-center" data-testid="stat-engagement">
              <div className="text-3xl font-playfair font-bold text-copper mb-2">+128%</div>
              <div className="text-sm text-charcoal/70">Youth Appeal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="slide-up">
              <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">The Challenge</h2>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
                {brandData?.challenge}
              </p>
              <div className="bg-latte p-6 rounded-2xl border-l-4 border-copper">
                <p className="text-sm font-medium text-charcoal/60 mb-2">Old Tagline</p>
                <p className="font-playfair text-xl text-espresso mb-4">"{brandData?.old_tagline}"</p>
                <p className="text-sm font-medium text-charcoal/60 mb-2">New Tagline</p>
                <p className="font-playfair text-xl text-copper">"{brandData?.new_tagline}"</p>
              </div>
            </div>
            <div className="slide-up">
              <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">Our Solution</h2>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-8">
                {brandData?.solution}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-copper rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-espresso mb-1">Research-Driven Strategy</h3>
                    <p className="text-charcoal/70">Deep customer insights and competitive analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-copper rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-espresso mb-1">Complete Visual Refresh</h3>
                    <p className="text-charcoal/70">Modern identity system honoring heritage</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-copper rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-espresso mb-1">360° Brand Experience</h3>
                    <p className="text-charcoal/70">Cohesive touchpoints from packaging to digital</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <Coffee className="w-16 h-16 text-copper mx-auto mb-6" />
          <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">
            Ready to Dive Deep?
          </h2>
          <p className="text-lg text-charcoal/80 mb-10 max-w-2xl mx-auto">
            Explore the complete rebranding journey—from initial research and strategy to final execution and measurable impact.
          </p>
          <Link to="/challenge" data-testid="start-journey-btn">
            <button className="btn-primary inline-flex items-center gap-2">
              Start the Journey
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;