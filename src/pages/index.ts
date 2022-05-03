import { lazy } from 'react';

export const HomePage = lazy(() => import('./home'));

export const MemberProfileList = lazy(() => import('./profile/index'));
export const SingleProfile = lazy(() => import('./profile/single'));

export const EventList = lazy(() => import('./event/index'));
export const SingleEvent = lazy(() => import('./event/single'));

export const GroupList = lazy(() => import('./group/index'));
export const SingleGroup = lazy(() => import('./group/single'));
