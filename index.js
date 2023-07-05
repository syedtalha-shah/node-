// const http = require('http')
const lodash = require('lodash')

// const server = http.createServer((req, res) => {
//     req.url === '/' ?
//         res.end('Welcome the our Server')
//         :
//         req.url === '/about' ?
//             res.end('Here is out short History')
//             :
//             res.end(`
//                 <h1>Opps!</h1>
//                 <p>We Can't seem to find page you are looking for</p>
//                 <a href='/'>Home Page</a>
//             `)
// })
// server.listen(5000)

const items = [1, [2, [3, [4,[5]]]]]
const newItems = lodash.flattenDeep(items)
console.log(newItems)