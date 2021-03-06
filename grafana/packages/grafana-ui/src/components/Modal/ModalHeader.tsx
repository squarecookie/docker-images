import React from 'react';
import { getModalStyles } from './getModalStyles';
import { IconName } from '../../types';
import { useStyles2 } from '../../themes';

interface Props {
  title: string;
  id?: string;
  /** @deprecated */
  icon?: IconName;
  /** @deprecated */
  iconTooltip?: string;
}

/** @internal */
export const ModalHeader: React.FC<Props> = ({ icon, iconTooltip, title, children, id }) => {
  const styles = useStyles2(getModalStyles);

  return (
    <>
      <h2 className={styles.modalHeaderTitle} id={id}>
        {title}
      </h2>
      {children}
    </>
  );
};
