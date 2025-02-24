import { useState } from 'react';
import styles from './index.module.css';
import home_off from '../../../assets/home_off.svg';
import home_on from '../../../assets/home_on.svg';
import profile_off from '../../../assets/profile_off.svg';
import profile_on from '../../../assets/profile_on.svg';
import chapchap_off from '../../../assets/chapchap_off.svg';
import chapchap_on from '../../../assets/chapchap_on.svg';
import React from 'react';

const BottomBar = ({ ...rest }) => {
  const [selectedTab, setSelectedTab] = useState('home');

  const tabs = [
    { id: 'home', label: '홈', iconOff: home_off, iconOn: home_on },
    {
      id: 'chapchap',
      label: '챕챕',
      iconOff: chapchap_off,
      iconOn: chapchap_on,
    },
    {
      id: 'profile',
      label: '마이',
      iconOff: profile_off,
      iconOn: profile_on,
    },
  ];

  return (
    <div {...rest} className={styles.wrap}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${styles.bottom_item} ${
            selectedTab === tab.id ? styles.active : ''
          }`}
          onClick={() => setSelectedTab(tab.id)}
        >
          <img
            src={selectedTab === tab.id ? tab.iconOn : tab.iconOff}
            alt={`${tab.id} icon`}
          />
          <p
            className={
              selectedTab === tab.id ? styles.activeText : styles.defaultText
            }
          >
            {tab.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BottomBar;
