import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconInterface, icons } from './type'
import { ButtonType } from '../Button/type'
import { SizeType } from '../../types/types'
import './Icon.scss'
import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

const getIcon = (icon?: string): IconDefinition | undefined => {
    return icons.get(icon);
}

const Icon: FC<IconInterface> = ({
    iconSvg,
    type = ButtonType.PRIMARY,
    color,
    hidden,
    size = SizeType.SMALL,
    className
}) => {
    library.add(fas, fab)
    return (
        <FontAwesomeIcon
            icon={iconSvg as IconDefinition}
            color={color}
            className={[
                'icon',
                `is-${size}`,
                `is-${type}`,
                `${className}`,
                `${hidden && 'hidden'}`
            ].join(' ')}
        />
    )
}

export default Icon;