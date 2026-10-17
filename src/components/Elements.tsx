import { useState } from 'react';
import { Camera } from './Icons';
import { profile, type Detail } from '../data/profile';

export function Photo() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="photo-frame">
      {profile.photo.src && !failed ? (
        <img
          src={profile.photo.src}
          alt={profile.photo.alt}
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="photo-placeholder"
          role="img"
          aria-label="Profile photograph placeholder"
        >
          <Camera size={28} strokeWidth={1} />
          <span>Profile photograph</span>
        </div>
      )}
    </div>
  );
}

export function DetailList({ items }: { items: Detail[] }) {
  return (
    <dl className="detail-list">
      {items.map(({ label, value }) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
