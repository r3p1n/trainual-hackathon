
import { cookies } from 'next/headers'

export async function GET(request) {
    const body = {
        user: {
            email: process.env.email,
            password: process.env.password,
            remember_me: false
        }
    }

    const res = await fetch(process.env.url_trainual+'/'+process.env.account_trainual+'/ajax/users/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ body }),
    });
    let cookies = res.headers.getSetCookie();
    let cookie = cookies[0];
    cookie = cookie.split('; ').filter(x => !x.includes('domain')).join('; ')

    let response = new Response();
    response.headers.set('Set-Cookie', cookie);

    return response;
}