import React from 'react';
import classnames from 'classnames';
import Collapsible from 'react-collapsible';
import { DownOutlined, LeftOutlined } from '@ant-design/icons';
import PageTitle from '../page-title';
import styles from './index.module.less';

const CollapseItem = ({ time, title, children, openIndex, onToggle, index }) => {
  const active = openIndex === index;

  const onToggleHandler = React.useCallback(() => {
    onToggle(active ? -1 : index);
  }, [onToggle, index, active]);

  const Header = (
    <div
      className={classnames(
        styles.header,
        { [styles['header-active']]: active },
        'flex justify-between items-center cursor-pointer',
      )}
      onClick={onToggleHandler}
    >
      <span className={styles.time}>{time}</span>
      <span className={styles.title}>{title}</span>
      {active ? <DownOutlined /> : <LeftOutlined />}
    </div>
  );

  return (
    <Collapsible
      trigger={Header}
      className={classnames(styles.box, {
        [styles['no-border']]: active || openIndex === index,
      })}
      openedClassName={classnames(styles.box)}
      open={active}
    >
      <div className={classnames(styles.body)}>{children}</div>
    </Collapsible>
  );
};

export default function Airdrop() {
  const [openIndex, setOpenName] = React.useState(0);

  const onToggle = React.useCallback(
    (name) => {
      setOpenName(name);
    },
    [null],
  );

  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-black">
      <PageTitle title="Airdrop" subTitle="空投" />
      <div className={styles.container}>
        <CollapseItem
          time="9.15"
          title="MagicGOAT"
          index={0}
          openIndex={openIndex}
          onToggle={onToggle}
        >
          MagicGoat NFT is the genesis NFT of the GOATNFT platform. Through minting MagicGoat boxes,
          fragments and decorations are obtained to compose a complete MagicGoat NFT.
        </CollapseItem>
        <CollapseItem
          time="9.24"
          title="Evolution Land"
          index={1}
          openIndex={openIndex}
          onToggle={onToggle}
        >
          MagicGoat NFT is the genesis NFT of the GOATNFT platform. Through minting MagicGoat boxes,
          fragments and decorations are obtained to compose a complete MagicGoat NFT.
        </CollapseItem>
        <CollapseItem
          time="9.24"
          title="Mirror World"
          index={2}
          openIndex={openIndex}
          onToggle={onToggle}
        >
          MagicGoat NFT is the genesis NFT of the GOATNFT platform. Through minting MagicGoat boxes,
          fragments and decorations are obtained to compose a complete MagicGoat NFT.
        </CollapseItem>
      </div>
    </div>
  );
}
