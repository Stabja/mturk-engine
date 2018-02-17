import { createSelector } from 'reselect';
import { Watcher, WatcherMap } from '../types';
import { watcherSelector } from './index';
import { Map } from 'immutable';
import { DEFAULT_WATCHER_FOLDER_ID } from '../constants/misc';

const getLegacyWatchers = createSelector([watcherSelector], watchers =>
  watchers.filter((watcher: Watcher) => !watcher.folderId)
);

/**
 * For backwards compatibility. Legacy watchers on't have certain properties.
 * Here we ensure they do.
 */
export const normalizedWatchers = createSelector(
  [getLegacyWatchers],
  (watchers: WatcherMap): WatcherMap =>
    watchers.reduce(
      (acc: WatcherMap, cur: Watcher) =>
        acc.set(cur.groupId, {
          ...cur,
          folderId: cur.folderId ? cur.folderId : DEFAULT_WATCHER_FOLDER_ID
        }),
      Map<string, Watcher>()
    )
);

const watchersSortedLatestFirst = createSelector(
  [normalizedWatchers],
  (watchers: WatcherMap) =>
    watchers.sort((a, b) => b.createdOn.valueOf() - a.createdOn.valueOf())
);

export const watcherIdsList = createSelector(
  [watchersSortedLatestFirst],
  (watchers: WatcherMap) =>
    watchers.map((item: Watcher) => item.groupId).toList()
);

export const watchersList = createSelector(
  [watcherSelector],
  (watchers: WatcherMap) =>
    watchers.reduce((acc: Watcher[], cur: Watcher) => [...acc, cur], [])
);
