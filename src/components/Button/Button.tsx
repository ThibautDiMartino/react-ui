import { FC } from 'react';
import './Button.scss';
import { ButtonInterface, ButtonType, WidthType } from './type';
import Icon from '../Icon';
import { SizeType } from '../../types/types';

const Button: FC<ButtonInterface> = ({
  buttonType = ButtonType.PRIMARY,
  buttonSize = SizeType.SMALL,
  outlined = false,
  squared = false,
  blank = false,
  icon,
  width = WidthType.min,
  label,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      className={[
        'button',
        `is-${buttonType}`,
        `is-${buttonSize}`,
        `is-${width}`,
        outlined ? 'outlined' : '',
        blank ? 'blank' : '',
        squared ? 'squared' : '',
      ].join(' ')}
      onClick={onClick}
      {...props}
    >
      {icon &&
        <Icon
          iconSvg={icon}
          type={buttonType}
          size={buttonSize}
      />}
      {label && label}
      {icon && label &&
        <Icon
          iconSvg={icon}
          hidden
          type={buttonType}
          size={buttonSize}
      />}
    </button>
  );
};

export default Button;