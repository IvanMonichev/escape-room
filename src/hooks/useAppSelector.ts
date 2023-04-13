import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { State } from '../types/state';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
