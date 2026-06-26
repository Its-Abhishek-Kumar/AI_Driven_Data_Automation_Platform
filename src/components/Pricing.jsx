import React, { useEffect, useRef } from 'react';

// Multi-dimensional configuration object factoring in exchange rates and regional tariff adjustments
const PRICING_MATRIX = {
  USD: { symbol: '$', exchangeRate: 1.0, regionalTariff: 1.0, precision: 2 },
  EUR: { symbol: '€', exchangeRate: 0.92, regionalTariff: 1.05, precision: 2 }, // 5% regional adjustment
  INR: { symbol: '₹', exchangeRate: 82.5, regionalTariff: 0.75, precision: 0 }   // 25% regional discount adjustment
};

const TIERS = [
  {
    id: 0,
    name: "DEVELOPER",
    baseRate: 19,
    features: [
      "Up to 100,000 messages/sec",
      "5 concurrent pipelines",
      "Self-healing correction delay (2s)",
      "Standard schema mapping accuracy",
      "Community support"
    ],
    cta: "START FREE TESTRUN"
  },
  {
    id: 1,
    name: "GROWTH",
    baseRate: 49,
    popular: true,
    features: [
      "Up to 1,000,000 messages/sec",
      "Unlimited active pipelines",
      "Sub-second self-healing loops",
      "99.8% Schema mapping accuracy",
      "24/7 dedicated support desk",
      "Custom transformations sandbox"
    ],
    cta: "DEPLOY GROWTH AGENT"
  },
  {
    id: 2,
    name: "ENTERPRISE",
    baseRate: 149,
    features: [
      "Infinite ingestion throughput",
      "Dedicated multi-cluster isolates",
      "Zero-delay instant auto-healing",
      "Custom neural network training",
      "Dedicated solutions architect",
      "SLA guaranteed: 99.999% uptime"
    ],
    cta: "REQUEST ENTERPRISE STACK"
  }
];

export default function Pricing() {
  // References for direct DOM updates (performance isolation)
  const currencySelectorRef = useRef(null);
  const cycleToggleRef = useRef(null);
  
  // Array of refs for each price value element
  const priceValRefs = useRef([]);
  const priceSymbolRefs = useRef([]);
  const pricePeriodRefs = useRef([]);
  const priceTotalBillingRefs = useRef([]);

  // Variables storing current selected options in DOM memory (no React state updates)
  const currentCurrency = useRef('USD');
  const currentCycle = useRef('monthly'); // 'monthly' or 'annual'

  // Update DOM values directly
  const updatePricingDOM = () => {
    const currency = currentCurrency.current;
    const cycle = currentCycle.current;
    const config = PRICING_MATRIX[currency];
    const isAnnual = cycle === 'annual';
    const discountMultiplier = isAnnual ? 0.8 : 1.0; // Flat 20% annual discount

    TIERS.forEach((tier, index) => {
      // 1. Calculate price factoring in base rate, currency rate, regional tariff adjustment, and cycle discount
      const rawPrice = tier.baseRate * config.exchangeRate * config.regionalTariff * discountMultiplier;
      let formattedPrice = '';
      if (config.precision === 0) {
        formattedPrice = Math.round(rawPrice).toLocaleString();
      } else {
        formattedPrice = rawPrice.toFixed(2);
      }

      // 2. Set currency symbol
      if (priceSymbolRefs.current[index]) {
        priceSymbolRefs.current[index].textContent = config.symbol;
      }

      // 3. Set price value
      if (priceValRefs.current[index]) {
        priceValRefs.current[index].textContent = formattedPrice;
      }

      // 4. Set period suffix
      if (pricePeriodRefs.current[index]) {
        pricePeriodRefs.current[index].textContent = isAnnual ? '/ mo equivalent' : '/ mo';
      }

      // 5. Set total annual billing message
      if (priceTotalBillingRefs.current[index]) {
        if (isAnnual) {
          const totalRaw = tier.baseRate * config.exchangeRate * config.regionalTariff * 0.8 * 12;
          let formattedTotal = '';
          if (config.precision === 0) {
            formattedTotal = Math.round(totalRaw).toLocaleString();
          } else {
            formattedTotal = totalRaw.toFixed(2);
          }
          priceTotalBillingRefs.current[index].textContent = `Billed annually: ${config.symbol}${formattedTotal}/yr`;
          priceTotalBillingRefs.current[index].style.opacity = '1';
        } else {
          priceTotalBillingRefs.current[index].textContent = 'Billed month-to-month';
          priceTotalBillingRefs.current[index].style.opacity = '0.5';
        }
      }
    });
  };

  // Run on mount to initialize the pricing matrix display values
  useEffect(() => {
    updatePricingDOM();
  }, []);

  // Handle currency button click
  const handleCurrencyChange = (currencyCode, e) => {
    currentCurrency.current = currencyCode;
    
    // Toggle active state classes directly in DOM
    const buttons = currencySelectorRef.current.querySelectorAll('.currency-btn');
    buttons.forEach((btn) => {
      if (btn.getAttribute('data-currency') === currencyCode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    updatePricingDOM();
  };

  // Handle billing cycle toggle click
  const handleCycleToggle = () => {
    const isMonthly = currentCycle.current === 'monthly';
    currentCycle.current = isMonthly ? 'annual' : 'monthly';

    // Update active class on toggle button
    const toggleBtn = cycleToggleRef.current;
    if (currentCycle.current === 'annual') {
      toggleBtn.classList.add('annual-active');
    } else {
      toggleBtn.classList.remove('annual-active');
    }

    updatePricingDOM();
  };

  return (
    <section id="pricing" style={{
      padding: '80px 0',
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div className="max-width-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="badge" style={{ marginBottom: '16px' }}>TARIFF STRUCTURE</span>
          <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>
            PREDICTABLE MATRIX PRICING
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Transparent regional billing calculations, with 20% annual discount layers. Zero re-render local execution.
          </p>
        </div>

        {/* Pricing Controls: Currency Selector & Billing Cycle Toggle */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {/* Currency Switcher */}
          <div 
            ref={currencySelectorRef} 
            className="glass-panel" 
            style={{
              display: 'flex',
              padding: '4px',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}
          >
            {Object.keys(PRICING_MATRIX).map((currency) => (
              <button
                key={currency}
                data-currency={currency}
                onClick={(e) => handleCurrencyChange(currency, e)}
                className={`currency-btn ${currency === 'USD' ? 'active' : ''}`}
                style={{
                  padding: '8px 16px',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {currency}
              </button>
            ))}
          </div>

          {/* Billing Cycle Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.875rem', 
              color: currentCycle.current === 'monthly' ? 'var(--text-primary)' : 'var(--text-secondary)'
            }}>
              MONTHLY
            </span>
            <button
              ref={cycleToggleRef}
              onClick={handleCycleToggle}
              aria-label="Toggle Billing Cycle"
              style={{
                width: '52px',
                height: '28px',
                borderRadius: '9999px',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background-color var(--transition-fast)'
              }}
            >
              <div className="toggle-thumb" style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
                position: 'absolute',
                top: '3px',
                left: '4px',
                transition: 'transform var(--transition-normal)'
              }} />
            </button>
            <span style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.875rem', 
              color: currentCycle.current === 'annual' ? 'var(--text-primary)' : 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              ANNUAL
              <span className="badge" style={{ padding: '2px 6px', fontSize: '0.65rem', border: '1px solid var(--accent)' }}>
                -20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          alignItems: 'stretch'
        }}>
          {TIERS.map((tier, index) => (
            <div
              key={tier.id}
              className="glass-panel"
              style={{
                padding: '40px 32px',
                borderRadius: '16px',
                border: tier.popular ? '2px solid var(--accent)' : '1px solid var(--border)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: tier.popular ? '0 10px 30px -10px rgba(255, 200, 1, 0.15)' : 'var(--shadow-md)'
              }}
            >
              {tier.popular && (
                <span className="badge" style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'var(--accent)',
                  color: 'var(--oceanic-noir)',
                  border: 'none',
                  boxShadow: '0 4px 10px rgba(255,200,1,0.3)'
                }}>
                  MOST POPULAR
                </span>
              )}

              <div>
                {/* Tier Name */}
                <h3 style={{ 
                  fontSize: '0.875rem', 
                  letterSpacing: '0.1em', 
                  color: 'var(--text-muted)',
                  marginBottom: '20px'
                }}>
                  // {tier.name}
                </h3>

                {/* Price Display Block (Isolated nodes) */}
                <div className="price-display-wrapper" style={{ marginBottom: '8px' }}>
                  <span ref={el => priceSymbolRefs.current[index] = el} className="price-currency">$</span>
                  <span ref={el => priceValRefs.current[index] = el} className="price-value">--</span>
                  <span ref={el => pricePeriodRefs.current[index] = el} className="price-period">/ mo</span>
                </div>

                {/* Total Billing calculation indicator */}
                <div 
                  ref={el => priceTotalBillingRefs.current[index] = el} 
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '32px',
                    transition: 'opacity var(--transition-fast)'
                  }}
                >
                  Billed month-to-month
                </div>

                {/* Features Divider */}
                <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: '32px' }} />

                {/* Features list */}
                <ul style={{ listStyle: 'none', padding: '0', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'start', gap: '10px', fontSize: '0.875rem', textAlign: 'left' }}>
                      <img src="/svgs/chevron-right.svg" alt="" width="14" height="14" style={{ marginTop: '2px', filter: 'invert(1)' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call-to-action button */}
              <button 
                className={`btn ${tier.popular ? 'btn-primary' : 'btn-secondary'}`} 
                style={{ width: '100%' }}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .currency-btn.active {
          background-color: var(--accent) !important;
          color: var(--oceanic-noir) !important;
          box-shadow: 0 2px 8px rgba(255, 200, 1, 0.2);
        }
        .annual-active .toggle-thumb {
          transform: translateX(24px);
        }
      `}} />
    </section>
  );
}
