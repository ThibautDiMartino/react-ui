import { FC } from 'react';
import './Button.scss';
import { ButtonInterface, ButtonType, WidthType } from './type';
import Icon from '../Icon';
import { SizeType } from '../../types/types';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Button: FC<ButtonInterface> = ({
  buttonType = ButtonType.PRIMARY,
  buttonSize = SizeType.SMALL,
  outlined = false,
  loading = false,
  squared = false,
  blank = false,
  icon,
  width = WidthType.min,
  label,
  style,
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
        loading ? 'loading' : '',
        blank || loading ? 'blank' : '',
        squared ? 'squared' : '',
        style,
      ].join(' ')}
      onClick={onClick}
      {...props}
    >
      {loading ? <Icon iconSvg={faSpinner} loading />
        :
        <>
          {icon &&
            <Icon
              iconSvg={icon}
              type={buttonType}
              iconSize={buttonSize}
            />}
          <span>{label && label}</span>
          {icon && label &&
            <Icon
              iconSvg={icon}
              hidden
              type={buttonType}
              iconSize={buttonSize}
            />}
        </>
      }
    </button>
  );
};

export default Button;