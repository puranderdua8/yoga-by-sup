import Cookie from 'js-cookie';
import {auth} from '../../services/firebase';

export const state = () => ({
    authUser: null
});

export const mutations = {
    SET_USER: (state, userData) => {
        state.authUser = userData;
    }
};

export const actions = {
    login({commit}, {email, password}) {
        return auth.signInWithEmailAndPassword(email, password)
            .then(() => auth.currentUser.getIdToken())
            .then(token => Cookie.set('access_token', token))
            .then(() => commit('SET_USER', {email: auth.currentUser.email, uid: auth.currentUser.uid}))
    }
};