import { useEffect, useState } from 'react';
import { Palette, Type, Sparkles } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const VisualIdentity = () => {
  const [colors, setColors] = useState([]);
  const [typography, setTypography] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [colorsRes, typographyRes] = await Promise.all([
          axios.get(`${API}/brand-colors`),
          axios.get(`${API}/typography`)
        ]);
        setColors(colorsRes.data);
        setTypography(typographyRes.data);
      } catch (error) {
        console.error('Error fetching visual identity data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-5xl mx-auto text-center fade-in">
          <span className="inline-block text-sm font-medium text-copper bg-white px-6 py-2 rounded-full mb-6">Visual Identity</span>
          <h1 className="section-title">
            A Modern Identity with Soul
          </h1>
          <p className="section-subtitle mx-auto mt-6">
            The new visual identity honors Vintage Brew's heritage while establishing a contemporary, craft-focused aesthetic that appeals to modern coffee enthusiasts.
          </p>
        </div>
      </section>

      {/* Logo Evolution */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">Logo Evolution</h2>
            <p className="section-subtitle mx-auto">
              From complex and dated to refined and timeless—the new mark balances heritage with modernity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-12 rounded-3xl text-center" data-testid="old-logo">
              <div className="bg-white p-8 rounded-2xl shadow-lg inline-block mb-6">
                <div className="text-6xl font-bold text-gray-700">VB</div>
                <div className="text-sm text-gray-500 mt-2">EST. 1983</div>
              </div>
              <h3 className="text-xl font-bold text-espresso mb-3">Before</h3>
              <p className="text-charcoal/70">Heavy, corporate, dated letterforms with complex embellishments</p>
            </div>

            <div className="bg-gradient-to-br from-cream to-latte p-12 rounded-3xl text-center" data-testid="new-logo">
              <div className="bg-white p-8 rounded-2xl shadow-lg inline-block mb-6">
                <div className="font-playfair text-5xl font-bold text-espresso mb-2">Vintage Brew</div>
                <div className="text-sm text-copper tracking-widest">SINCE 1983</div>
              </div>
              <h3 className="text-xl font-bold text-copper mb-3">After</h3>
              <p className="text-charcoal/70">Clean, elegant serif with subtle vintage charm and modern refinement</p>
            </div>
          </div>

          <div className="bg-latte p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-espresso mb-4">Design Rationale</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-copper font-semibold mb-2">Typography</div>
                <p className="text-sm text-charcoal/70">Playfair Display brings editorial elegance while maintaining readability and warmth</p>
              </div>
              <div>
                <div className="text-copper font-semibold mb-2">Simplicity</div>
                <p className="text-sm text-charcoal/70">Removed decorative clutter for timeless mark that works at any scale</p>
              </div>
              <div>
                <div className="text-copper font-semibold mb-2">Heritage Link</div>
                <p className="text-sm text-charcoal/70">"Since 1983" preserves historical connection in understated way</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Palette className="w-12 h-12 text-copper mx-auto mb-6" />
            <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">Color Palette</h2>
            <p className="section-subtitle mx-auto">
              Warm, inviting colors inspired by coffee, craft materials, and Pacific Northwest landscapes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colors.map((color, index) => (
              <div key={color.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift" data-testid={`color-card-${index}`}>
                <div
                  className="h-48 flex items-center justify-center"
                  style={{ backgroundColor: color.hex_code }}
                >
                  <div className="text-center">
                    <div className={`text-2xl font-bold mb-2 ${['#FAF7F2', '#F4EDE4'].includes(color.hex_code) ? 'text-espresso' : 'text-white'}`}>
                      {color.hex_code}
                    </div>
                    <div className={`text-sm ${['#FAF7F2', '#F4EDE4'].includes(color.hex_code) ? 'text-charcoal/70' : 'text-white/80'}`}>
                      {color.type.toUpperCase()}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-espresso mb-2">{color.name}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Type className="w-12 h-12 text-copper mx-auto mb-6" />
            <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">Typography System</h2>
            <p className="section-subtitle mx-auto">
              A balanced pairing of elegant serif and clean sans-serif for versatility across all applications.
            </p>
          </div>

          <div className="space-y-8">
            {typography.map((typeface, index) => (
              <div key={typeface.id} className="bg-latte p-10 rounded-3xl" data-testid={`typography-card-${index}`}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="text-sm font-semibold text-copper bg-white px-3 py-1 rounded-full">{typeface.type.toUpperCase()}</span>
                    <h3 className="text-3xl font-bold text-espresso mt-4 mb-3" style={{ fontFamily: typeface.font_family }}>
                      {typeface.font_family}
                    </h3>
                    <p className="text-charcoal/70 mb-4">{typeface.usage}</p>
                    <div className="flex flex-wrap gap-2">
                      {typeface.weights.map((weight, idx) => (
                        <span key={idx} className="text-xs bg-white text-charcoal px-3 py-1 rounded-full">
                          {weight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl">
                    <div style={{ fontFamily: typeface.font_family }}>
                      <div className="text-5xl font-bold text-espresso mb-4">Aa</div>
                      <div className="text-xl text-charcoal/70 mb-2">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                      <div className="text-lg text-charcoal/60">abcdefghijklmnopqrstuvwxyz</div>
                      <div className="text-base text-charcoal/50 mt-4">0123456789</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Sparkles className="w-12 h-12 text-copper mx-auto mb-6" />
            <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">Design Principles</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg" data-testid="principle-warmth">
              <h3 className="text-xl font-bold text-espresso mb-3">Approachable Warmth</h3>
              <p className="text-charcoal/70">Every element should feel inviting and human. Avoid cold, corporate aesthetics in favor of organic warmth.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg" data-testid="principle-craft">
              <h3 className="text-xl font-bold text-espresso mb-3">Craft Excellence</h3>
              <p className="text-charcoal/70">Attention to detail and quality materials communicate premium coffee experience without pretension.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg" data-testid="principle-balance">
              <h3 className="text-xl font-bold text-espresso mb-3">Heritage Balance</h3>
              <p className="text-charcoal/70">Honor the past through subtle nods to history while embracing contemporary design language.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg" data-testid="principle-flexibility">
              <h3 className="text-xl font-bold text-espresso mb-3">Flexible System</h3>
              <p className="text-charcoal/70">Identity must work seamlessly across physical spaces, packaging, digital platforms, and marketing materials.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisualIdentity;