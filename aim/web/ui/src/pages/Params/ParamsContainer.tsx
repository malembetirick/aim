import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { ANALYTICS_EVENT_KEYS } from 'config/analytics/analyticsKeysMap';

import useModel from 'hooks/model/useModel';
import usePanelResize from 'hooks/resize/usePanelResize';

import paramsAppModel from 'services/models/params/paramsAppModel';
import * as analytics from 'services/analytics';

import { IParamsAppModelState } from 'types/services/models/params/paramsAppModel';
import { ITableRef } from 'types/components/Table/Table';
import { IChartPanelRef } from 'types/components/ChartPanel/ChartPanel';
import { IApiRequest } from 'types/services/services';

import getStateFromUrl from 'utils/getStateFromUrl';
import exceptionHandler from 'utils/app/exceptionHandler';
import setComponentRefs from 'utils/app/setComponentRefs';
import manageSystemMetricColumns from 'utils/app/manageSystemMetricColumns';

import Params from './Params';

function ParamsContainer(): React.FunctionComponentElement<React.ReactNode> {
  const tableRef = React.useRef<ITableRef>(null);
  const chartPanelRef = React.useRef<IChartPanelRef>(null);
  const chartElemRef = React.useRef<HTMLDivElement>(null);
  const tableElemRef = React.useRef<HTMLDivElement>(null);
  const wrapperElemRef = React.useRef<HTMLDivElement>(null);
  const resizeElemRef = React.useRef<HTMLDivElement>(null);
  const paramsData =
    useModel<Partial<IParamsAppModelState | any>>(paramsAppModel);
  const route = useRouteMatch<any>();
  const history = useHistory();

  const panelResizing = usePanelResize(
    wrapperElemRef,
    chartElemRef,
    tableElemRef,
    resizeElemRef,
    paramsData?.config?.table,
    paramsAppModel.onTableResizeEnd,
  );

  React.useEffect(() => {
    if (tableRef.current && chartPanelRef.current) {
      setComponentRefs<IParamsAppModelState>({
        model: paramsAppModel,
        refElement: {
          tableRef,
          chartPanelRef,
        },
      });
    }
    if (paramsData?.rawData?.length > 0) {
      manageSystemMetricColumns(paramsAppModel);
    }
  }, [paramsData?.rawData]);

  React.useEffect(() => {
    paramsAppModel.initialize(route.params.appId);
    let appRequestRef: IApiRequest<void>;
    let paramsRequestRef: IApiRequest<void>;
    if (route.params.appId) {
      appRequestRef = paramsAppModel.getAppConfigData(route.params.appId);
      appRequestRef
        .call((detail: any) => {
          exceptionHandler({ detail, model: paramsAppModel });
        })
        .then(() => {
          paramsAppModel.setDefaultAppConfigData(false);
          paramsRequestRef = paramsAppModel.getParamsData();
          paramsRequestRef.call((detail: any) => {
            exceptionHandler({ detail, model: paramsAppModel });
          });
        });
    } else {
      paramsAppModel.setDefaultAppConfigData();
      paramsRequestRef = paramsAppModel.getParamsData();
      paramsRequestRef.call((detail: any) => {
        exceptionHandler({ detail, model: paramsAppModel });
      });
    }

    analytics.pageView(ANALYTICS_EVENT_KEYS.params.pageView);

    const unListenHistory = history.listen(() => {
      if (!!paramsData?.config) {
        if (
          paramsData.config.grouping !== getStateFromUrl('grouping') ||
          paramsData.config.chart !== getStateFromUrl('chart') ||
          paramsData.config.select !== getStateFromUrl('select')
        ) {
          paramsAppModel.setDefaultAppConfigData();
          paramsAppModel.updateModelData();
        }
      }
    });
    return () => {
      paramsAppModel.destroy();
      paramsRequestRef?.abort();
      unListenHistory();
      if (appRequestRef) {
        appRequestRef.abort();
      }
    };
  }, []);

  return (
    <Params
      tableRef={tableRef}
      chartPanelRef={chartPanelRef}
      tableElemRef={tableElemRef}
      chartElemRef={chartElemRef}
      wrapperElemRef={wrapperElemRef}
      resizeElemRef={resizeElemRef}
      panelResizing={panelResizing}
      highPlotData={paramsData?.highPlotData}
      tableData={paramsData?.tableData}
      tableColumns={paramsData?.tableColumns}
      focusedState={paramsData?.config?.chart?.focusedState!}
      requestStatus={paramsData?.requestStatus!}
      selectedRows={paramsData?.selectedRows!}
      isVisibleColorIndicator={
        paramsData?.config?.chart?.isVisibleColorIndicator!
      }
      groupingData={paramsData?.config?.grouping!}
      selectedParamsData={paramsData?.config?.select!}
      sortFields={paramsData?.config?.table?.sortFields!}
      curveInterpolation={paramsData?.config?.chart?.curveInterpolation!}
      tooltip={paramsData?.config?.chart?.tooltip!}
      chartTitleData={paramsData?.chartTitleData!}
      groupingSelectOptions={paramsData?.groupingSelectOptions!}
      hiddenColumns={paramsData?.config?.table?.hiddenColumns!}
      hideSystemMetrics={paramsData?.config?.table?.hideSystemMetrics!}
      columnsOrder={paramsData?.config?.table?.columnsOrder!}
      resizeMode={paramsData?.config?.table?.resizeMode!}
      hiddenMetrics={paramsData?.config?.table?.hiddenMetrics!}
      notifyData={paramsData?.notifyData!}
      tableRowHeight={paramsData?.config?.table?.rowHeight!}
      columnsWidths={paramsData?.config?.table?.columnsWidths!}
      selectFormData={paramsData?.selectFormData!}
      onColorIndicatorChange={paramsAppModel.onColorIndicatorChange}
      onCurveInterpolationChange={paramsAppModel.onCurveInterpolationChange}
      onParamsSelectChange={paramsAppModel.onParamsSelectChange}
      onGroupingSelectChange={paramsAppModel.onGroupingSelectChange}
      onGroupingModeChange={paramsAppModel.onGroupingModeChange}
      onGroupingPaletteChange={paramsAppModel.onGroupingPaletteChange}
      onGroupingReset={paramsAppModel.onGroupingReset}
      onActivePointChange={paramsAppModel.onActivePointChange}
      onGroupingApplyChange={paramsAppModel.onGroupingApplyChange}
      onGroupingPersistenceChange={paramsAppModel.onGroupingPersistenceChange}
      onSelectRunQueryChange={paramsAppModel.onSelectRunQueryChange}
      onBookmarkCreate={paramsAppModel.onBookmarkCreate}
      onBookmarkUpdate={paramsAppModel.onBookmarkUpdate}
      onNotificationAdd={paramsAppModel.onNotificationAdd}
      updateColumnsWidths={paramsAppModel.updateColumnsWidths}
      onNotificationDelete={paramsAppModel.onNotificationDelete}
      onResetConfigData={paramsAppModel.onResetConfigData}
      onChangeTooltip={paramsAppModel.onChangeTooltip}
      onTableRowHover={paramsAppModel.onTableRowHover}
      onTableRowClick={paramsAppModel.onTableRowClick}
      onExportTableData={paramsAppModel.onExportTableData}
      onRowHeightChange={paramsAppModel.onRowHeightChange}
      onParamVisibilityChange={paramsAppModel.onParamVisibilityChange}
      onColumnsOrderChange={paramsAppModel.onColumnsOrderChange}
      onColumnsVisibilityChange={paramsAppModel.onColumnsVisibilityChange}
      onTableResizeModeChange={paramsAppModel.onTableResizeModeChange}
      onTableDiffShow={paramsAppModel.onTableDiffShow}
      onSortReset={paramsAppModel.onSortReset}
      onSortFieldsChange={paramsAppModel.onSortChange}
      onShuffleChange={paramsAppModel.onShuffleChange}
      liveUpdateConfig={paramsData?.config?.liveUpdate!}
      onLiveUpdateConfigChange={paramsAppModel.changeLiveUpdateConfig}
      onRowSelect={paramsAppModel.onRowSelect}
      archiveRuns={paramsAppModel.archiveRuns}
      deleteRuns={paramsAppModel.deleteRuns}
    />
  );
}

export default ParamsContainer;
