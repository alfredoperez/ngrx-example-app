import { createFeatureSelector } from '@ngrx/store';
import { featureKey } from '../reducers/friends-tracker.reducers';

/**
 * Selector for the  friends tracker Feature
 */
export const selectFriendsTrackerState = createFeatureSelector(featureKey);
