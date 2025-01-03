import { useAtomValue } from 'jotai'
import { Rect } from 'react-konva'
import { selectZoneAtom } from '../store/global-store'

export function DataSelectZoneRender() {
    const value = useAtomValue(selectZoneAtom)
    if (!value) return null
    return (
        <Rect
            x={value.x}
            y={value.y}
            width={value.x2 - value.x}
            height={value.y2 - value.y}
            fill={'#AAAAAA20'}
            stroke="black"
        />
    )
}
