import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getSize, IconInterface, icons } from './type'
import { ButtonType } from '../Button/type'
import { SizeType } from '../../types/types'
import './Icon.scss'
import { IconDefinition, library, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

const getIcon = (icon?: string): IconDefinition | undefined => {
    return icons.get(icon);
}

const Icon: FC<IconInterface> = ({
    iconSvg,
    type,
    color,
    hidden,
    loading,
    iconSize = SizeType.SMALL,
    className
}) => {
    library.add(fas, fab, far)
    return (
        <FontAwesomeIcon
            icon={iconSvg as IconDefinition}
            color={color}
            size={getSize(iconSize) as SizeProp}
            spin={loading}
            className={[
                'icon',
                `is-${type}`,
                `${className}`,
                `${hidden && 'hidden'}`
            ].join(' ')}
        />
    )
}

export default Icon;