export function Arrow({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const paths = {
  product: <><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><path d="M17 13v8M13 17h8" /></>,
  brand: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M5.2 18.8l2.1-2.1M16.7 7.3l2.1-2.1" /></>,
  dist: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  capital: <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
  talent: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  ops: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
};

export function PillarIcon({ name, size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function Star({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 1l2 5.5h6l-5 4 2 5.5L9 12.5 4 16l2-5.5-5-4h6L9 1z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function Check({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M2 7.5 6 11l7-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Pin({ size = 11 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 12" fill="none" aria-hidden="true">
      <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5zm0 6.5C4.17 6.5 3.5 5.83 3.5 5S4.17 3.5 5 3.5 6.5 4.17 6.5 5 5.83 6.5 5 6.5z" fill="currentColor" />
    </svg>
  );
}
