'use client';

import Image from 'next/image';
import '../asset/LeftDivider.css';

export default function LeftDivider() {
  return (
    <div className="left-divider-section">
      <Image
        src="/images/static/left-divider.svg"
        width={100}
        height={100}
        className="left-divider"
        alt="left-divider"
      />
    </div>
  );
}
