import { useAtomValue } from 'jotai'
import { selectAtom } from 'jotai/utils'
import { useMemo } from 'react'
import { Group, Rect, Text } from 'react-konva'
import { PlotInfo, selectPlot, ETool, IPlotItem } from '../store/store'
import { managerAtom } from '../store/global-store'

export function PlotRender(props: { plot: IPlotItem }) {
    const plotValue = props.plot.data
    if (!plotValue) return null
    return (
        <Group
            x={plotValue.x}
            y={plotValue.y}
            onClick={() => {
                selectPlot(plotValue.id)
            }}
            width={plotValue.width}
            height={plotValue.height}
            draggable
        >
            <Rect
                width={plotValue.width}
                height={plotValue.height}
                fill={props.plot.selected ? '#0000FF20' : '#00FF0020'}
                stroke="black"
                onDragStart={() => {}}
            ></Rect>
            <Text
                text={plotValue.id}
                align="center"
                verticalAlign="middle"
                width={plotValue.width}
                height={plotValue.height}
                fontSize={20}
            />
        </Group>
    )
}
export default function DataAllPlotRender(props: { plotId: string }) {
    const value = useAtomValue(
        useMemo(
            () => selectAtom(managerAtom, (items) => items[props.plotId]),
            [props.plotId]
        )
    )
    if (!value || value.hidden) return
    return <PlotRender plot={value} />
}
