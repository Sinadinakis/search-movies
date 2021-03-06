import React, { useEffect, useState } from 'react';

// CSS
import './LikeButton.scss'

const LikeButton = () => {
  const [clicks, setClicks] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  let total = 0;

  useEffect(() => {
    let singleClickTimer;
    if (clicks === 1) {
      singleClickTimer = setTimeout(
        () => {
          handleClick();
          setClicks(0);
        }, 250);
    } else if (clicks === 2) {
      handleDoubleClick();
      setClicks(0);
    }
    return () => clearTimeout(singleClickTimer);
  }, [clicks]);

  // Single Click
  const handleClick = () => {
    total = totalClicks + 1;
    setTotalClicks(total);
  }

  // Double Click
  const handleDoubleClick = () => {
    if (total > 0) {
      total = totalClicks - 1;
    }
    setTotalClicks(total);
  }

  return (
    <div
      className="likeButton"
      onClick={() => setClicks(clicks + 1)}
    >
      Likes | {totalClicks}
    </div>
  )
}

export default LikeButton;