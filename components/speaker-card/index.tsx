import React from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import LogoBg from '../../public/images/logoBg.svg';
import styles from './styles.module.less';

interface Props {
  className?: string;
  avatar: StaticImageData;
  name: string;
}

export default function SpeakerCard({ avatar, name, className, ...props }: Props) {
  const cls = classnames(styles['speaker-card'], className);
  return (
    <div {...props} className={cls}>
      <div className="flex">
        <div className={styles.bg1}>
          <LogoBg className={styles['bg1-img']} />
          <div className={styles['avatar-box']}>
            <Image className={styles.avatar} src={avatar} alt="avatar" width={100} height={100} />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.block}></div>
        <span className={styles.title}>{name}</span>
      </div>
    </div>
  );
}
