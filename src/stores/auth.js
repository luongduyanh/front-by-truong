import {AuthService} from '@/services';


export default {
    namespaced: true,
    state: {
        authUser: null,
        accessToken: null,
    },
    getters: {
        authUser(state) {
            return state.authUser
        },
        isAuthenticated(state) {
            return Boolean(state.authUser);
        },
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.accessToken = token
        },
        SAVE_AUTH_USER(state, data) {
            state.authUser = data
        },
        LOGIN(state, {user = true, access_token}) {
            state.authUser = user;
            state.accessToken = access_token;
        },
    },
    actions: {
        ACTION_LOGOUT({commit}) {
            commit('SET_TOKEN', null)
            commit('SAVE_AUTH_USER', null)
            localStorage.clear()
        },
        async login(context, credentials) {
            const {data} = await AuthService.login(credentials.network)
            await context.dispatch('actionLogin', data)
        },
        async loginForm(context, credentials) {
            const {data} = await AuthService.loginForm(credentials)
            console.log(data);
            await context.dispatch('actionLogin', data)
        },
        async actionLogin(context, data) {
            const email = localStorage.getItem('email')
            if (data) {
                localStorage.setItem('accessToken', data)
                context.commit('LOGIN', data);
                await context.dispatch('ACTION_SAVE_AUTH_USER', email);
            }
        },
        async ACTION_SAVE_AUTH_USER(context, credentials) {
            if (localStorage.getItem('accessToken')) {
                const {data} = await AuthService.getAuthUser(credentials);
                if (data) {
                    localStorage.setItem('userInfo', JSON.stringify(data))
                    context.commit('SAVE_AUTH_USER', data);
                }
                return data;
            }
        },

        logout(context) {
            // return AuthService.logout().then(() => {
                context.dispatch('ACTION_LOGOUT')
            // })
        },

        async signUp(context, credentials) {
            const {data} = await AuthService.signUp(credentials)
            // await context.dispatch('actionLogin', data)
            return data
        }

    },
    modules: {}
}
