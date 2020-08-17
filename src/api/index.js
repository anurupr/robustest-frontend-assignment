const root = 'https://my-json-server.typicode.com/anurupr/robustest-frontend-assignment'

export default function(uri) {
    return fetch(root + uri)
}