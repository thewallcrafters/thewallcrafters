import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'TWC Fit-Outs — Modular Kitchens & Interior Design, Madurai';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          background: '#2C2824',
          padding: '60px 72px',
          fontFamily: 'serif',
          position: 'relative',
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '6px',
            background: '#C0392B',
          }}
        />

        {/* Logo / Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              background: '#C0392B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F5F3EE',
              fontSize: '22px',
              fontWeight: 700,
              letterSpacing: '-1px',
            }}
          >
            TWC
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '18px',
                color: '#F5F3EE',
                letterSpacing: '4px',
                textTransform: 'uppercase',
              }}
            >
              TWC Fit-Outs
            </span>
            <span
              style={{
                fontSize: '12px',
                color: '#A09080',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginTop: '2px',
              }}
            >
              The Wall Crafters
            </span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: 300,
            color: '#F5F3EE',
            lineHeight: 1.1,
            letterSpacing: '-1px',
            marginBottom: '24px',
            maxWidth: '860px',
          }}
        >
          Modular Kitchens &amp;{' '}
          <span style={{ fontStyle: 'italic', color: '#C0392B' }}>
            Interior Fit-Outs
          </span>{' '}
          in Madurai
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: '20px',
            color: '#A09080',
            fontWeight: 300,
            letterSpacing: '0.5px',
            marginBottom: '48px',
          }}
        >
          Factory-finished. Site-installed. One team, one standard.
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '48px' }}>
          {[
            { num: '50+', label: 'Spaces Delivered' },
            { num: '14', label: 'Interior Categories' },
            { num: '10+', label: 'Years Experience' },
          ].map((s) => (
            <div
              key={s.label}
              style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
            >
              <span
                style={{ fontSize: '32px', color: '#F5F3EE', fontWeight: 600 }}
              >
                {s.num}
              </span>
              <span
                style={{
                  fontSize: '13px',
                  color: '#A09080',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            right: '72px',
            fontSize: '14px',
            color: '#A09080',
            letterSpacing: '2px',
          }}
        >
          thewallcrafters.com
        </div>
      </div>
    ),
    { ...size }
  );
}
