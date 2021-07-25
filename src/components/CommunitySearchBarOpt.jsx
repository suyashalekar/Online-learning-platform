import React from 'react';
import '../CommunitySearchBarOpt.css';
function CommunitySearchBarOpt({ active, text, Icon }) {
  return (
    <div className={`commuSearchBarOpt__iconHover ${active && 'commuSearchBarOpt--active'}`}>
      <div className="commuSearchBarOpt__container">
        <Icon />
        <h2>{text}</h2>
      </div>
    </div>
  );
}

export default CommunitySearchBarOpt;
