import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {State} from 'history';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

// TODO добавить dispatch из redux toolkit


