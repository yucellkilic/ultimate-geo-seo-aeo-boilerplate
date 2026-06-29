'use client';

import { useEffect, useState } from 'react';

interface GeoData {
  country?: string;
  city?: string;
  region?: string;
  latitude?: number;
  longitude?: number;
}

export function GeoInfo() {
  const [geo, setGeo] = useState<GeoData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGeo = async () => {
      try {
        const res = await fetch('/api/geo');
        const data = await res.json();
        setGeo(data);
      } catch (error) {
        console.error('Geo fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGeo();
  }, []);

  if (loading) return <div className="text-slate-400">Loading location...</div>;

  return (
    <div className="bg-slate-700 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-3">📍 Your Location</h3>
      <p className="text-slate-300">
        {geo.city && `${geo.city}, ${geo.region}, ${geo.country}`}
      </p>
      {geo.latitude && geo.longitude && (
        <p className="text-sm text-slate-400 mt-2">
          Coordinates: {geo.latitude.toFixed(4)}, {geo.longitude.toFixed(4)}
        </p>
      )}
    </div>
  );
}
