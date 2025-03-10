import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  // Get title from query params or use default
  const title = searchParams.get('title') || 'TechSphere';
  const description = searchParams.get('description') || 'Modern Electronics E-commerce';
  const type = searchParams.get('type') || 'default';
  
  // Generate the image
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#0f172a',
          color: 'white',
          fontFamily: 'sans-serif',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #3b82f6',
            borderRadius: '20px',
            padding: '40px',
            width: '90%',
            height: '90%',
            background: 'linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(30,58,138,0.4) 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                backgroundClip: 'text',
                color: 'transparent',
                marginRight: '10px',
              }}
            >
              Tech
            </div>
            <div
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Sphere
            </div>
          </div>
          
          <div
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '20px',
              maxWidth: '80%',
            }}
          >
            {title}
          </div>
          
          <div
            style={{
              fontSize: '24px',
              textAlign: 'center',
              color: '#94a3b8',
              maxWidth: '70%',
            }}
          >
            {description}
          </div>
          
          {type === 'product' && (
            <div
              style={{
                marginTop: '30px',
                padding: '10px 20px',
                backgroundColor: '#3b82f6',
                borderRadius: '10px',
                fontSize: '20px',
              }}
            >
              Shop Now
            </div>
          )}
          
          <div
            style={{
              position: 'absolute',
              bottom: '30px',
              fontSize: '16px',
              color: '#94a3b8',
            }}
          >
            techsphere-site.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
} 