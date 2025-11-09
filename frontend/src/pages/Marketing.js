import { useEffect, useState } from 'react';
import { Package, Share2, FileText } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Marketing = () => {
  const [collateral, setCollateral] = useState([]);

  useEffect(() => {
    const fetchCollateral = async () => {
      try {
        const response = await axios.get(`${API}/marketing-collateral`);
        setCollateral(response.data);
      } catch (error) {
        console.error('Error fetching marketing collateral:', error);
      }
    };
    fetchCollateral();
  }, []);

  const categoryIcons = {
    packaging: Package,
    social: Share2,
    print: FileText,
    documentation: FileText,
    product: Package,
    environmental: Package
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-5xl mx-auto text-center fade-in">
          <span className="inline-block text-sm font-medium text-copper bg-white px-6 py-2 rounded-full mb-6">Marketing & Applications</span>
          <h1 className="section-title">
            Bringing the Brand to Life
          </h1>
          <p className="section-subtitle mx-auto mt-6">
            The new identity comes alive across every customer touchpoint—from coffee bags and reusable cups to social campaigns and store environments.
          </p>
        </div>
      </section>

      {/* Collateral Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collateral.map((item, index) => {
              const Icon = categoryIcons[item.type] || Package;
              return (
                <div
                  key={item.id}
                  className="image-card"
                  data-testid={`collateral-card-${index}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-5 h-5 text-copper" />
                      <span className="text-xs font-semibold text-copper uppercase tracking-wide">{item.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-espresso mb-2">{item.title}</h3>
                    <p className="text-charcoal/70">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campaign Highlights */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">Launch Campaign</h2>
            <p className="section-subtitle mx-auto">
              The rebrand launched with an integrated campaign celebrating heritage, craft, and community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-lg" data-testid="campaign-heritage">
              <div className="text-4xl mb-6">📜</div>
              <h3 className="text-2xl font-playfair font-bold text-espresso mb-4">"Rooted in Heritage" Series</h3>
              <p className="text-charcoal/70 mb-6">
                Social media storytelling highlighting 40+ years of community moments, employee stories, and Pacific Northwest coffee culture.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start gap-2">
                  <span className="text-copper">•</span>
                  <span>Weekly historical photo features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper">•</span>
                  <span>Customer story spotlight videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper">•</span>
                  <span>Behind-the-scenes roasting content</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg" data-testid="campaign-craft">
              <div className="text-4xl mb-6">✨</div>
              <h3 className="text-2xl font-playfair font-bold text-espresso mb-4">"Crafted with Care" Campaign</h3>
              <p className="text-charcoal/70 mb-6">
                In-store and digital campaign showcasing sourcing practices, roasting process, and barista craftsmanship.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start gap-2">
                  <span className="text-copper">•</span>
                  <span>Origin story video series</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper">•</span>
                  <span>Seasonal menu launches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper">•</span>
                  <span>Sustainability commitments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Guidelines */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-latte to-cream p-12 rounded-3xl shadow-xl">
            <div className="text-center mb-10">
              <FileText className="w-16 h-16 text-copper mx-auto mb-6" />
              <h2 className="font-playfair text-3xl font-bold text-espresso mb-4">Comprehensive Brand Guidelines</h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                A detailed style guide ensures consistent brand application across all teams and touchpoints.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl text-center" data-testid="guideline-logo">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="font-semibold text-espresso mb-2">Logo Usage</h3>
                <p className="text-sm text-charcoal/60">Clear space, sizing, variations, misuse examples</p>
              </div>

              <div className="bg-white p-6 rounded-2xl text-center" data-testid="guideline-color">
                <div className="text-3xl mb-3">🌈</div>
                <h3 className="font-semibold text-espresso mb-2">Color System</h3>
                <p className="text-sm text-charcoal/60">Palettes, ratios, accessibility standards</p>
              </div>

              <div className="bg-white p-6 rounded-2xl text-center" data-testid="guideline-typography">
                <div className="text-3xl mb-3">📝</div>
                <h3 className="font-semibold text-espresso mb-2">Typography</h3>
                <p className="text-sm text-charcoal/60">Hierarchy, sizing, pairing rules</p>
              </div>

              <div className="bg-white p-6 rounded-2xl text-center" data-testid="guideline-voice">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-semibold text-espresso mb-2">Voice & Tone</h3>
                <p className="text-sm text-charcoal/60">Writing style, messaging, do's and don'ts</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <button className="btn-primary" data-testid="download-guidelines-btn">
                Download Brand Guidelines (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Showcase */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">360° Brand Experience</h2>
            <p className="section-subtitle mx-auto">
              Consistent, cohesive brand experience at every touchpoint.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl text-center" data-testid="touchpoint-physical">
              <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-copper" />
              </div>
              <h3 className="text-xl font-bold text-espresso mb-3">Physical</h3>
              <ul className="text-sm text-charcoal/70 space-y-2">
                <li>Store signage & interiors</li>
                <li>Packaging & product design</li>
                <li>Uniforms & merchandise</li>
                <li>Menu boards & posters</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center" data-testid="touchpoint-digital">
              <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Share2 className="w-8 h-8 text-copper" />
              </div>
              <h3 className="text-xl font-bold text-espresso mb-3">Digital</h3>
              <ul className="text-sm text-charcoal/70 space-y-2">
                <li>Website & mobile app</li>
                <li>Social media templates</li>
                <li>Email campaigns</li>
                <li>Digital advertising</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center" data-testid="touchpoint-print">
              <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-copper" />
              </div>
              <h3 className="text-xl font-bold text-espresso mb-3">Print</h3>
              <ul className="text-sm text-charcoal/70 space-y-2">
                <li>Business cards & stationery</li>
                <li>Brochures & flyers</li>
                <li>Promotional materials</li>
                <li>Out-of-home advertising</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketing;