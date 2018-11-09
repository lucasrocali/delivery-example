// @flow
import type { Saga } from 'redux-saga';
import { call, takeEvery, takeLatest, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { NavigationActions } from "react-navigation";
import { screenNames } from '../navigation/Routers'

import * as authActionTypes from "../store/auth/actionType";
import * as authActions from "../store/auth/action";

import * as realApi from "../api/"
import * as mockApi from '../api/mock'
// import { loginRequest, getCategoriesRequest } from "../api/mock.js"
const api = mockApi
const getToken = state => state.reducers.authentication.auth_token;
const getSearch = state => state.reducers.search;

const authenticate = function* (action) {
    try {
        yield put(authActions.setLoading(true))

        const { email, passoword } = action

        const response = yield call(api.loginRequest, email, passoword)

        yield put(authActions.setLoading(false))

        if (response && response.id && response.auth_token) {
            yield put(authActions.setSuccess(response))

            yield put(NavigationActions.navigate({ routeName: screenNames.Perfil }))
        }

    } catch (error) {
        console.log(error);
    }
};

export function* root(): Saga<void> {
    yield takeLatest(authActionTypes.AUTH, authenticate)
};