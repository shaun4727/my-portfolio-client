'use client';

import Image from 'next/image';
import '../asset/RightDivider.css';

export default function RightDivider() {
  return (
    <div className="right-divider-section">
      <Image
        src="/images/static/right-divider.svg"
        width={100}
        height={100}
        className="right-divider"
        alt="right-divider"
      />
    </div>
  );
}
