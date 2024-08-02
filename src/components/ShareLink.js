import React from 'react';
import '../styles/ShareLink.css';

const ShareLink = ({ link }) => {
  if (!link) {
    return <div>No link available</div>;
  }

  const handleShare = () => {
    navigator.clipboard.writeText(link)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy the link: ', err);
      });
  };

  return (
    <button className="share-link" onClick={handleShare}>
      Share Link
    </button>
  );
};

export default ShareLink;
