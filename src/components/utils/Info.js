// const app=require('express')()
// const http=require('http')
// const server=http.createServer();
// server.on("request",(req,res)=>{
//     if(req.url==="/app"){
//         console.log(999);
//     }
// })
// app.get("/app",(req,res)=>{
//     console.log(88)
//     res.send(99);
// })
// server.listen(3001);


// // const https = require("https");
// // const app_id = "Prashant_2022";
// // const app_key = "3323b026";
// // const wordId = "ace";
// // const fields = "pronunciations";
// // const strictMatch = "false";
// // const options = {
// //    host: 'od-api.oxforddictionaries.com',
// //    port: '443',
// //    path: '/api/v2/entries/en-gb/' + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch,
// //    method: "GET",
// //    headers: {
// //      'app_id': app_id,
// //      'app_key': app_key
// //    }
// //  };
// // https.get(options, (resp) => {
// //   let body = '';
// //   resp.on('data', (d) => {
// //     body += d;
// //   });
// //   resp.on('end', () => {
// //     let parsed = JSON.stringify(body);
// //     console.log(parsed);
// //   });
// // });