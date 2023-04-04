import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import { strapiLogin } from '$lib/strapi';


export const load: PageServerLoad = async () => {
}

const login: Action = async ({ cookies, request }) => {

    const data = await request.formData();
    const password = await data.get('password');
    const username = await data.get('username');

    if (typeof password !== `string` || typeof username !== 'string' || !username || !password) {
        return fail(400, {invalid: true})
    }

    const login_response = await strapiLogin(username, password);
    const login = await login_response.json();

    if (login?.error?.status === 400) {
        console.log("Failed to Login")
        return fail(400, {credentials: true})
    } 

    cookies.set('session', login?.jwt, {
        //send cookies to every page
        path: '/',
        //server side only cookies so you can't use 'document.cookie'
        httpOnly:true,
        secure: false,
        // only requests from the same site can send cookies
        sameSite: 'strict',
        // set cookies to expire after a month
        maxAge: 60 * 60 * 2,

    })

    throw redirect(302, '/');
}

export const actions: Actions = { login }