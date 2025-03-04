import React from 'react';
import _ from 'lodash-es';

import { Grid } from '@material-ui/core';

import { Text } from 'components/kit';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

import { ResizeModeEnum } from 'config/enums/tableEnums';

import { IChartPanelProps } from 'types/components/ChartPanel/ChartPanel';
import {
  IActivePoint,
  ISyncHoverStateArgs,
} from 'types/utils/d3/drawHoverAttributes';

import { ChartTypeEnum } from 'utils/d3';

import ChartPopover from './ChartPopover/ChartPopover';
import ChartGrid from './ChartGrid/ChartGrid';

import './ChartPanel.scss';

const ChartPanel = React.forwardRef(function ChartPanel(
  props: IChartPanelProps,
  ref,
) {
  const [chartRefs] = React.useState<React.RefObject<any>[]>(
    new Array(props.data.length).fill('*').map(() => React.createRef()),
  );
  const [activePointRect, setActivePointRect] = React.useState<{
    top: number;
    bottom: number;
    left: number;
    right: number;
  } | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const activePointRef = React.useRef<IActivePoint | null>(null);

  const setActiveElemPos = React.useCallback(() => {
    if (activePointRef.current && containerRef.current) {
      const { pointRect } = activePointRef.current;
      setActivePointRect({
        ...pointRect,
        top: pointRect.top - containerRef.current.scrollTop,
        left: pointRect.left - containerRef.current.scrollLeft,
      });
    } else {
      setActivePointRect(null);
    }
  }, [setActivePointRect]);

  const syncHoverState = React.useCallback(
    (args: ISyncHoverStateArgs): void => {
      const { activePoint, focusedStateActive = false, dataSelector } = args;
      // on MouseHover
      activePointRef.current = activePoint;
      if (activePoint !== null) {
        chartRefs.forEach((chartRef, index) => {
          chartRef.current?.setFocusedState?.({
            active: focusedStateActive,
            key: activePoint.key,
            xValue: activePoint.xValue,
            yValue: activePoint.yValue,
            chartIndex: activePoint.chartIndex,
          });
          if (index === activePoint.chartIndex) {
            return;
          }
          switch (props.chartType) {
            case ChartTypeEnum.LineChart:
              chartRef.current?.updateHoverAttributes?.(
                activePoint.xValue,
                dataSelector,
              );
              break;
            case ChartTypeEnum.HighPlot:
              chartRef.current?.clearHoverAttributes?.();
              break;
          }
        });

        if (props.onActivePointChange) {
          props.onActivePointChange(activePoint, focusedStateActive);
        }
        setActiveElemPos();
      }
      // on MouseLeave
      else {
        chartRefs.forEach((chartRef) => {
          chartRef.current?.clearHoverAttributes?.();
        });
        setActivePointRect(null);
      }
    },
    [chartRefs, setActiveElemPos, props.chartType, props.onActivePointChange],
  );

  const onScroll = React.useCallback((): void => {
    if (activePointRect) {
      setActiveElemPos();
    }
  }, [activePointRect, setActiveElemPos]);

  React.useImperativeHandle(ref, () => ({
    setActiveLineAndCircle: (
      lineKey?: string,
      focusedStateActive: boolean = false,
      force: boolean = false,
    ) => {
      chartRefs.forEach((chartRef) => {
        chartRef.current?.setActiveLineAndCircle?.(
          lineKey,
          focusedStateActive,
          force,
        );
      });
    },
  }));

  React.useEffect(() => {
    if (!props.panelResizing && props.focusedState) {
      chartRefs.forEach((chartRef) => {
        chartRef.current?.setFocusedState?.(props.focusedState);
      });
    }
  }, [chartRefs, props.focusedState, props.panelResizing]);

  React.useEffect(() => {
    const debouncedScroll = _.debounce(onScroll, 100);
    const containerNode = containerRef.current;
    containerNode?.addEventListener('scroll', debouncedScroll);
    return () => {
      containerNode?.removeEventListener('scroll', debouncedScroll);
    };
  }, [onScroll]);

  return (
    <ErrorBoundary>
      <Grid container className='ChartPanel__container'>
        {props.panelResizing ? (
          <div className='ChartPanel__resizing'>
            <Text size={14} color='info'>
              Release to resize
            </Text>
          </div>
        ) : (
          <>
            <ErrorBoundary>
              <Grid item xs className='ChartPanel'>
                <Grid ref={containerRef} container className='ChartPanel__grid'>
                  <ChartGrid
                    data={props.data}
                    chartProps={props.chartProps}
                    chartRefs={chartRefs}
                    chartType={props.chartType}
                    syncHoverState={syncHoverState}
                  />
                </Grid>
                <ErrorBoundary>
                  <ChartPopover
                    containerNode={containerRef.current}
                    activePointRect={activePointRect}
                    open={
                      props.resizeMode !== ResizeModeEnum.MaxHeight &&
                      props.data.length > 0 &&
                      !props.panelResizing &&
                      !props.zoom?.active &&
                      (props.tooltip.display || props.focusedState.active)
                    }
                    chartType={props.chartType}
                    tooltipContent={props?.tooltip?.content}
                    focusedState={props.focusedState}
                    alignmentConfig={props.alignmentConfig}
                    reCreatePopover={props.focusedState.active}
                  />
                </ErrorBoundary>
              </Grid>
            </ErrorBoundary>
            <ErrorBoundary>
              <Grid className='ChartPanel__controls' item>
                {props.controls}
              </Grid>
            </ErrorBoundary>
          </>
        )}
      </Grid>
    </ErrorBoundary>
  );
});

export default ChartPanel;
