import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {State} from 'history';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
