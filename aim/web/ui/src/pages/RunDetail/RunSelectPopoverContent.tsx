import React, { memo, useRef } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash-es';
import _ from 'lodash';

import { CircularProgress, Tooltip } from '@material-ui/core';

import IllustrationBlock from 'components/IllustrationBlock/IllustrationBlock';
import { Button, Icon, Text } from 'components/kit';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

import { DATE_WITHOUT_SECONDS } from 'config/dates/dates';
import { IllustrationsEnum } from 'config/illustrationConfig/illustrationConfig';

import { processDurationTime } from 'utils/processDurationTime';

import {
  IRunSelectExperiment,
  IRunSelectPopoverContentProps,
  IRunSelectRun,
} from './types';

import './RunDetail.scss';

function RunSelectPopoverContent({
  getRunsOfExperiment,
  experimentsData,
  experimentId,
  runsOfExperiment,
  isRunsOfExperimentLoading,
  isRunInfoLoading,
  isLoadMoreButtonShown,
  onRunsSelectToggle,
  dateNow,
}: IRunSelectPopoverContentProps): React.FunctionComponentElement<React.ReactNode> {
  const popoverContentWrapperRef = useRef<HTMLDivElement | any>();
  const { runHash } = useParams<{ runHash: string }>();
  const { pathname } = useLocation();
  const [runs, setRuns] = React.useState<IRunSelectRun[]>([]);

  function onLoadMore() {
    if (!isRunsOfExperimentLoading) {
      getRunsOfExperiment(
        experimentId,
        {
          limit: 10,
          offset: runsOfExperiment[runsOfExperiment.length - 1].run_id,
        },
        true,
      );
    }
  }

  React.useEffect(() => {
    setRuns(
      _.orderBy(runsOfExperiment, ['creation_time', 'name'], ['desc', 'asc']),
    );
  }, [runsOfExperiment]);

  function onExperimentClick(id: string) {
    getRunsOfExperiment(id);
    popoverContentWrapperRef.current.scrollTop = 0;
  }

  return (
    <ErrorBoundary>
      <div className='RunSelectPopoverWrapper__selectPopoverContent'>
        <div className='RunSelectPopoverWrapper__selectPopoverContent__headerContainer'>
          <div className='RunSelectPopoverWrapper__selectPopoverContent__headerContainer__titleContainer'>
            <Text size={14} tint={100} weight={700}>
              Experiments
            </Text>
          </div>

          <Icon name='sort-inside' />
          <div className='RunSelectPopoverWrapper__selectPopoverContent__headerContainer__titleContainer'>
            <Text size={14} tint={100} weight={700}>
              Runs
            </Text>
          </div>
        </div>
        <div className='RunSelectPopoverWrapper__selectPopoverContent__contentContainer'>
          <div className='RunSelectPopoverWrapper__selectPopoverContent__contentContainer__experimentsListContainer'>
            <div className='RunSelectPopoverWrapper__selectPopoverContent__contentContainer__experimentsListContainer__experimentList'>
              {!isRunInfoLoading ? (
                experimentsData?.map((experiment: IRunSelectExperiment) => (
                  <div
                    className={classNames(
                      'RunSelectPopoverWrapper__selectPopoverContent__contentContainer__experimentsListContainer__experimentList__experimentBox',
                      { selected: experimentId === experiment.id },
                    )}
                    onClick={() => onExperimentClick(experiment.id)}
                    key={experiment.id}
                  >
                    <Text
                      size={14}
                      tint={experimentId === experiment.id ? 100 : 80}
                      weight={experimentId === experiment.id ? 600 : 500}
                      className='RunSelectPopoverWrapper__selectPopoverContent__contentContainer__experimentsListContainer__experimentList__experimentBox__experimentName'
                    >
                      {experiment?.name ?? 'default'}
                    </Text>
                  </div>
                ))
              ) : (
                <div className='RunSelectPopoverWrapper__loaderContainer'>
                  <CircularProgress size={34} />
                </div>
              )}
            </div>
          </div>

          <div className='RunSelectPopoverWrapper__selectPopoverContent__contentContainer__runsListContainer'>
            {isRunInfoLoading ||
            (isEmpty(runsOfExperiment) && isRunsOfExperimentLoading) ? (
              <div className='RunSelectPopoverWrapper__loaderContainer'>
                <CircularProgress size={34} />
              </div>
            ) : (
              <div
                className='RunSelectPopoverWrapper__selectPopoverContent__contentContainer__runsListContainer__runsList'
                ref={popoverContentWrapperRef}
              >
                {!isEmpty(runsOfExperiment) ? (
                  runs?.map((run: IRunSelectRun) => (
                    <NavLink
                      className={classNames(
                        'RunSelectPopoverWrapper__selectPopoverContent__contentContainer__runsListContainer__runsList__runBox',
                        {
                          selected: runHash === run?.run_id,
                          'in-progress': !run?.end_time,
                        },
                      )}
                      key={run.run_id}
                      to={pathname.replace(runHash, run.run_id)}
                      onClick={onRunsSelectToggle}
                    >
                      <Tooltip title={run.name} placement='right'>
                        <div
                          className={
                            'RunSelectPopoverWrapper__selectPopoverContent__contentContainer__runsListContainer__runsList__runBox__runName'
                          }
                        >
                          <Text
                            size={14}
                            tint={runHash === run?.run_id ? 100 : 80}
                            weight={500}
                          >
                            {run.name}
                          </Text>
                        </div>
                      </Tooltip>
                      <div
                        className={
                          'RunSelectPopoverWrapper__selectPopoverContent__contentContainer__runsListContainer__runsList__runBox__runDate'
                        }
                      >
                        <Icon
                          name='calendar'
                          color={
                            runHash === run?.run_id ? '#414B6D' : '#606986'
                          }
                          fontSize={12}
                        />
                        <Text
                          size={11}
                          tint={runHash === run?.run_id ? 80 : 70}
                          weight={400}
                        >
                          {`${moment(run.creation_time * 1000).format(
                            DATE_WITHOUT_SECONDS,
                          )} • ${processDurationTime(
                            run?.creation_time * 1000,
                            run?.end_time ? run?.end_time * 1000 : dateNow,
                          )}`}
                        </Text>
                      </div>
                    </NavLink>
                  ))
                ) : (
                  <IllustrationBlock
                    type={IllustrationsEnum.EmptyData}
                    size='large'
                    title={'No Runs'}
                  />
                )}
                {!isEmpty(runsOfExperiment) && isLoadMoreButtonShown && (
                  <div className='RunSelectPopoverWrapper__selectPopoverContent__contentContainer__runsListContainer__runsList__loadMoreButtonWrapper'>
                    <Button
                      size='small'
                      variant='contained'
                      className='RunSelectPopoverWrapper__selectPopoverContent__contentContainer__runsListContainer__runsList__loadMoreButtonWrapper__button'
                      onClick={onLoadMore}
                    >
                      {!isRunsOfExperimentLoading ? (
                        <Text weight={500} size={12} color='primary' tint={100}>
                          Load More
                        </Text>
                      ) : (
                        <CircularProgress size={14} />
                      )}
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default memo(RunSelectPopoverContent);
