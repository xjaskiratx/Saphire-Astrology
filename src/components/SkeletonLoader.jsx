import React from 'react';
import '../styles/Components.css';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-box skeleton-title"></div>
      <div className="skeleton-box skeleton-text"></div>
      <div className="skeleton-box skeleton-text"></div>
      <div className="skeleton-box skeleton-text"></div>
      <div className="skeleton-box skeleton-text-short"></div>
      <div style={{ marginTop: '60px' }}>
        <div className="skeleton-box skeleton-title" style={{ width: '40%', height: '32px' }}></div>
        <div className="skeleton-box skeleton-text"></div>
        <div className="skeleton-box skeleton-text"></div>
        <div className="skeleton-box skeleton-text-short"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
