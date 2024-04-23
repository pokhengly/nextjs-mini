export const registerUser = async (data) => {
    console.log(data)
    try {
        const response = await fetch("http://110.74.194.123:8989/api/todo/v1/auth/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        console.log(data)
        return response.json();
    } catch (error) {
        console.error("Error registering user:", error);
    }
};
