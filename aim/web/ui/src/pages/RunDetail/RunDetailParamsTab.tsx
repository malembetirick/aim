import React, { memo } from 'react';
import ReactJson from 'react-json-view';
import _ from 'lodash-es';

import BusyLoaderWrapper from 'components/BusyLoaderWrapper/BusyLoaderWrapper';
import IllustrationBlock from 'components/IllustrationBlock/IllustrationBlock';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

import { ANALYTICS_EVENT_KEYS } from 'config/analytics/analyticsKeysMap';

import * as analytics from 'services/analytics';

import { IRunDetailParamsTabProps } from './types';

function RunDetailParamsTab({
  runParams,
  isRunInfoLoading,
}: IRunDetailParamsTabProps): React.FunctionComponentElement<React.ReactNode> {
  React.useEffect(() => {
    analytics.pageView(ANALYTICS_EVENT_KEYS.runDetails.tabs.params.tabView);
  }, []);
  return (
    <ErrorBoundary>
      <BusyLoaderWrapper
        isLoading={isRunInfoLoading || !runParams}
        className='runDetailParamsTabLoader'
        height='100%'
      >
        {!_.isEmpty(runParams) ? (
          <div className='RunDetailParamsTabWrapper'>
            <div className='RunDetailParamsTab'>
              <ReactJson
                name={false}
                theme='bright:inverted'
                src={_.omit(runParams, '__system_params')}
              />
            </div>
          </div>
        ) : (
          <IllustrationBlock
            size='xLarge'
            className='runDetailParamsTabLoader'
            title='No Params'
          />
        )}
      </BusyLoaderWrapper>
    </ErrorBoundary>
  );
}

export default memo(RunDetailParamsTab);
