/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from 'axios';
import { useReducer } from 'react';

interface State<T> {
  data: T[];
  product: T | null;
  isLoading: boolean;
  error: any;
  message: string;
}

interface Action<T> {
  type: string;
  payload?: any;
}

const API_ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  GET: 'GET',
  GET_SINGLE: 'GET_SINGLE',
  POST: 'POST',
  PUT: 'PUT',
  DEL: 'DEL',
  ERROR: 'ERROR',
} as const;

const initialState: State<any> = {
  data: [],
  product: null,
  isLoading: false,
  error: null,
  message: '',
};

// ⚠️ Issue: How do we know that all items returned from the API have an 'id'?
// TypeScript has no guarantee that type T contains the 'id' property.
// ✔️ Fix: Constrain type T to { id: string | number } so TypeScript knows 'id' exists
const reduce = <T extends { id?: string | number }>(
  state: State<T>,
  action: Action<T>
): State<T> => {
  switch (action.type) {
    case API_ACTIONS.SET_LOADING:
      return { ...state, isLoading: true };
    case API_ACTIONS.GET:
      return { ...state, isLoading: false, data: action.payload };
    case API_ACTIONS.GET_SINGLE:
      return { ...state, isLoading: false, product: action.payload };
    case API_ACTIONS.POST:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
      };
    case API_ACTIONS.PUT:
      return {
        ...state,
        isLoading: false,
        data: state.data.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case API_ACTIONS.DEL:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    case API_ACTIONS.ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

// ⚠️ Issue: How do we know that all items returned from the API have an 'id'?
// TypeScript has no guarantee that type T contains the 'id' property.
// ✔️ Fix: Constrain type T to { id: string | number } so TypeScript knows 'id' exists
const useAPI = <T extends { id?: string | number }>(
  url: string,
  config?: AxiosRequestConfig
) => {
  const [state, dispatch] = useReducer(reduce<T>, initialState);

  const get = async (getConfig?: AxiosRequestConfig) => {
    try {
      dispatch({ type: API_ACTIONS.SET_LOADING });
      const res = await axios.get<T[]>(url, { ...config, ...getConfig });
      dispatch({ type: API_ACTIONS.GET, payload: res?.data });
    } catch (error) {
      dispatch({ type: API_ACTIONS.ERROR, payload: error });
    }
  };

  const getSingle = async (
    id: string | number,
    getConfig?: AxiosRequestConfig
  ) => {
    try {
      dispatch({ type: API_ACTIONS.SET_LOADING });
      const res = await axios.get<T>(`${url}/${id}`, {
        ...config,
        ...getConfig,
      });
      dispatch({ type: API_ACTIONS.GET_SINGLE, payload: res?.data });
      return res.data;
    } catch (error) {
      dispatch({ type: API_ACTIONS.ERROR, payload: error });
    }
  };

  const add = async (body: any) => {
    try {
      dispatch({ type: API_ACTIONS.SET_LOADING });
      const res = await axios.post<T>(url, body, config);
      dispatch({ type: API_ACTIONS.POST, payload: res?.data });
      return res.data;
    } catch (error) {
      dispatch({ type: API_ACTIONS.ERROR, payload: error });
    }
  };

  const edit = async (
    id: string | number,
    body: any,
    getConfig?: AxiosRequestConfig
  ) => {
    try {
      dispatch({ type: API_ACTIONS.SET_LOADING });
      const res = await axios.post<T>(`${url}/${id}`, body, {
        ...config,
        ...getConfig,
      });
      dispatch({ type: API_ACTIONS.PUT, payload: res?.data });
      return res.data;
    } catch (error) {
      dispatch({ type: API_ACTIONS.ERROR, payload: error });
    }
  };

  const del = async (id: string | number) => {
    try {
      dispatch({ type: API_ACTIONS.SET_LOADING });
      const res = await axios.delete<T>(`${url}/${id}`);
      dispatch({ type: API_ACTIONS.DEL, payload: id });
    } catch (error) {
      dispatch({ type: API_ACTIONS.ERROR, payload: error });
    }
  };

  return { ...state, get, getSingle, add, edit, del };
};

export default useAPI;
