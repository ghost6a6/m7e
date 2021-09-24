import React from 'react';
import PageTitle from '../page-title';
import styles from './index.module.less';

export default function Schedule() {
  function menuItemClick(index) {
    //
  }
  return (
    <div className="relative flex flex-col justify-center items-center w-screen h-screen bg-black">
      <PageTitle title="Schedule" />
      <div className={styles.container}>
        <div className={styles['menu-title']}>Sept 15 ~ Oct 28</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          NFT Airdrop & Claim on M7E.SH
        </div>
        <div className={styles['menu-title']}>Oct 22 ~ 28</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          MOCA Exhibition in Metaverse, M7E.SH, Twittersphere and M50 Shanghai
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Pubs in Shanghai NFT Scavenger Hunt
        </div>
        <div className={styles['menu-title']}>Oct 24 ~ 28</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          NFT Scavenger Hunt in Shanghai
        </div>
        <div className={styles['menu-title']}>Oct 22</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          ideaPod the Bund House Shanghai Opening Forum: Quest for Metaverse Identity
        </div>
        <div className={styles['menu-title']}>Oct 23</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          AM, M50 Innovation+ Space Shanghai Harmony Meetup: When Shanghai meets Silicon Valley in
          Metaverse
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          PM, M50 Innovation+ Space Shanghai NFT Avatar Carnival
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Night, M50 Innovation+ Space Shanghai Polygon Ecosystem Metaverse Night
        </div>
        <div className={styles['menu-title']}>Oct 24</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          M50 Innovation+ Space Shanghai Nash Metaverse: 4X-Inception Exhibition
        </div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Night, ideaPod the Bund House Shanghai Metaverse Cocktail: Quest for Metaverse Identity by
          MyCrptoProfile & Dataverse
        </div>
        <div className={styles['menu-title']}>Oct 28</div>
        <div className={styles['menu-item']} onClick={() => menuItemClick(0)}>
          Night, Metaverse Closing Party
        </div>
      </div>
    </div>
  );
}
