export default function ({store, route, redirect}) {
    const user = store.state.user.authUser;
    const blockedRoutes = /\/admin\/*/g;
    if(!user && route.path.match(blockedRoutes)) {
        redirect('/');
    }
}