import { Monitor, Smartphone, Layout } from 'lucide-react';

const WebsiteRedesign = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-5xl mx-auto text-center fade-in">
          <span className="inline-block text-sm font-medium text-copper bg-white px-6 py-2 rounded-full mb-6">Website Redesign</span>
          <h1 className="section-title">
            Digital Experience Reimagined
          </h1>
          <p className="section-subtitle mx-auto mt-6">
            The website transformation brings the new brand identity to life online with modern UX, compelling storytelling, and seamless functionality.
          </p>
        </div>
      </section>

      {/* Before/After */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">Website Evolution</h2>
            <p className="section-subtitle mx-auto">
              From cluttered and outdated to clean, inviting, and conversion-focused.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4" data-testid="before-website">
              <div className="bg-gray-200 aspect-video rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Monitor className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Old Website Design</p>
                  <p className="text-sm text-gray-400">Dated layout, poor UX</p>
                </div>
              </div>
              <div className="bg-latte p-6 rounded-2xl">
                <h3 className="font-bold text-espresso mb-3">Previous Issues</h3>
                <ul className="space-y-2 text-charcoal/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-copper">×</span>
                    <span>Confusing navigation and information hierarchy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper">×</span>
                    <span>No mobile optimization or responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper">×</span>
                    <span>Minimal product photography and storytelling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper">×</span>
                    <span>Slow load times and outdated technology</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4" data-testid="after-website">
              <div className="bg-gradient-to-br from-cream to-latte aspect-video rounded-2xl flex items-center justify-center border-2 border-copper/20">
                <div className="text-center">
                  <Monitor className="w-16 h-16 text-copper mx-auto mb-4" />
                  <p className="text-espresso font-medium">New Website Design</p>
                  <p className="text-sm text-copper">Modern, intuitive, engaging</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-copper/20">
                <h3 className="font-bold text-espresso mb-3">Improvements</h3>
                <ul className="space-y-2 text-charcoal/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-copper">✓</span>
                    <span>Intuitive navigation with clear user journeys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper">✓</span>
                    <span>Fully responsive design optimized for all devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper">✓</span>
                    <span>Rich photography and brand storytelling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper">✓</span>
                    <span>Fast performance with modern tech stack</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">Key Features</h2>
            <p className="section-subtitle mx-auto">
              Strategic functionality designed to drive engagement and conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg" data-testid="feature-menu">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-xl font-bold text-espresso mb-3">Interactive Menu</h3>
              <p className="text-charcoal/70 mb-4">Beautiful product photography with detailed descriptions, origin stories, and customization options.</p>
              <div className="text-sm text-copper font-medium">Increased add-to-cart rate by 65%</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg" data-testid="feature-ordering">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-espresso mb-3">Mobile Ordering</h3>
              <p className="text-charcoal/70 mb-4">Seamless order-ahead functionality with store location selection and pickup time estimates.</p>
              <div className="text-sm text-copper font-medium">30% of orders now placed online</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg" data-testid="feature-stories">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold text-espresso mb-3">Origin Stories</h3>
              <p className="text-charcoal/70 mb-4">Dedicated section showcasing coffee sourcing, farmer partnerships, and sustainability practices.</p>
              <div className="text-sm text-copper font-medium">Average time on site +3.2 minutes</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg" data-testid="feature-locator">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-espresso mb-3">Store Locator</h3>
              <p className="text-charcoal/70 mb-4">Interactive map with filtering, hours, amenities, and directions for all 47 locations.</p>
              <div className="text-sm text-copper font-medium">Improved location discovery</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg" data-testid="feature-rewards">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-bold text-espresso mb-3">Loyalty Program</h3>
              <p className="text-charcoal/70 mb-4">Integrated rewards dashboard with point tracking, personalized offers, and member perks.</p>
              <div className="text-sm text-copper font-medium">42% enrollment rate</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg" data-testid="feature-blog">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold text-espresso mb-3">Coffee Journal</h3>
              <p className="text-charcoal/70 mb-4">Editorial content covering brewing tips, recipe ideas, and coffee culture insights.</p>
              <div className="text-sm text-copper font-medium">Building community & SEO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Design */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Layout className="w-12 h-12 text-copper mx-auto mb-6" />
            <h2 className="font-playfair text-4xl font-bold text-espresso mb-6">Responsive Design</h2>
            <p className="section-subtitle mx-auto">
              Optimized experiences across all devices—desktop, tablet, and mobile.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="responsive-desktop">
              <div className="bg-latte p-8 rounded-2xl mb-4">
                <Monitor className="w-20 h-20 text-copper mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-espresso mb-2">Desktop</h3>
              <p className="text-charcoal/70 text-sm">Rich layouts with immersive photography and detailed product information</p>
            </div>

            <div className="text-center" data-testid="responsive-tablet">
              <div className="bg-latte p-8 rounded-2xl mb-4">
                <svg className="w-20 h-20 text-copper mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="3" width="12" height="18" rx="2" strokeWidth="2"/>
                  <line x1="9" y1="18" x2="15" y2="18" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-espresso mb-2">Tablet</h3>
              <p className="text-charcoal/70 text-sm">Optimized touch interfaces with adapted layouts for medium screens</p>
            </div>

            <div className="text-center" data-testid="responsive-mobile">
              <div className="bg-latte p-8 rounded-2xl mb-4">
                <Smartphone className="w-20 h-20 text-copper mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-espresso mb-2">Mobile</h3>
              <p className="text-charcoal/70 text-sm">Streamlined navigation and thumb-friendly interactions for on-the-go ordering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-12 rounded-3xl shadow-xl">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-3xl font-bold text-espresso mb-4">Technology Stack</h2>
              <p className="text-charcoal/70">Modern, performant infrastructure built for scale and speed.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-copper mb-4">Frontend</h3>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <span className="text-copper">•</span>
                    <span><strong>React</strong> - Component-based UI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper">•</span>
                    <span><strong>Next.js</strong> - Server-side rendering & SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper">•</span>
                    <span><strong>Tailwind CSS</strong> - Utility-first styling</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-copper mb-4">Performance</h3>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <span className="text-copper">•</span>
                    <span>Page load time: <strong>1.2s</strong> (85% improvement)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper">•</span>
                    <span>Lighthouse score: <strong>95/100</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-copper">•</span>
                    <span>Mobile-first with progressive enhancement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteRedesign;