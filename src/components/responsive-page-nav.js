/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import HandbookNavList from './handbook-nav-list'
import Sticky from '@wicked_query/react-sticky'

export default function testNav ({ handbookNavList, offset }) {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <div>
      <div className={isSmallScreen ? `small` : `large`}>
        {isSmallScreen && 
          <HandbookNavList handbookNavList={handbookNavList} isSmallScreen={isSmallScreen} />
        }
        {!isSmallScreen && 
        <Sticky offset={offset}>
          <HandbookNavList handbookNavList={handbookNavList} />
        </Sticky>
        }
      </div>
    </div>
  );
}