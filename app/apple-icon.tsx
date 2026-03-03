import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2C2824',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <span
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#F5F3EE',
              letterSpacing: '-2px',
            }}
          >
            twc
          </span>
          <div
            style={{
              width: '14px',
              height: '14px',
              background: '#FF2B2B',
              borderRadius: '50%',
              marginLeft: '4px',
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
