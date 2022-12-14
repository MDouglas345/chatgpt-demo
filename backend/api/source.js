var oai = require ("openai");

var fs = require('fs')
var obj = JSON.parse(fs.readFileSync('auth.json', 'utf8'));



const config = new oai.Configuration({
    organization : "org-utJdihvvaxZpJrSuhsJIuCjw",
    apiKey : obj.api_key
})

var openai = new oai.OpenAIApi(config)


async function createResponse(req,res){
    //console.log(req.body)
    
    const completion = await openai.createCompletion({
        model : "text-davinci-003",
        prompt : generatePrompt(req),
        temperature : 0.6,
        max_tokens : 100
    });

    console.log(completion.data.choices[0].text)
    res.status(200).json({"res" : completion.data.choices[0].text})
}




function generatePrompt(source){
    
    return `There is a car was named Kate's CarWash. It is opened weekdays 9am to 10pm. Wednesdays are the most busy between
    9am and 1pm. They charge 30$ for sedans and 50$ for SUVs. An additional 10$ for interior cleaning and 10$ for tire cleaning.
    They currently have an appointment at 2pm on thursday.
    
    ${source.body.text}`
}   

module.exports = { createResponse }



