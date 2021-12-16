const url = "http://localhost:3030"

export const api = (body, api) => fetch(`${url}${api}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
}).then((response) => response.json())
    .then((result) => {
        if (result.error) return result.error
        return result
    })



