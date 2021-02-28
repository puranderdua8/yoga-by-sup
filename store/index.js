import JWTDecode from 'jwt-decode';
import cookieparser from 'cookieparser';

export const actions = {
    nuxtServerInit({commit}, {req}) {
        if(process.server && process.static) return;
        if(!req.headers.cookie) return;

        const parsedCookie = cookieparser.parse(req.headers.cookie);
        const accessTokenCookie = parsedCookie.access_token;

        if(!accessTokenCookie) return;

        const decodedToken = JWTDecode(accessTokenCookie);

        if(decodedToken) {
            commit('user/SET_USER', {
                uid: decodedToken.user_id,
                email: decodedToken.email
            })
        }
    }
};