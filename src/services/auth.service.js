export const loginService = async (userInfo) => {
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/auth/login', {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo)
    });
    const data = await res.json();
    return data;
}