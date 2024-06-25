// // import mongoose from 'mongoose';
import axios from 'axios'
// // import { User } from './scheme.js'
// // import { mongoURI } from './uri.js'
import inquirer from 'inquirer';
import fs from 'fs'


const filePathData = './aboutMe.json';
const fileContentData = fs.readFileSync(filePathData, 'utf8') 

const filePathInstructions = './instruction.txt';
const fileContentInstructions = fs.readFileSync(filePathInstructions, 'utf8') 

// // Connect to MongoDB
// // mongoose.connect(mongoURI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// //   }).then(() => {
// //     console.log('Connected to MongoDB');
// //   }).catch(err => {
// //     console.error('Error connecting to MongoDB', err);
// //   })



let status = 'not-ready'
const prompt = inquirer.createPromptModule();
const options = {
  method: 'POST',
  url: 'https://chatgpt-42.p.rapidapi.com/conversationgpt4-2',
  headers: {
    'x-rapidapi-key': '99c7f6a833msh0f8dc93e0f54be3p198904jsn4fd9eefd0cbf',
    'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    messages: [
      {
        role: 'user',
        content: ''
      }
    ],
    system_prompt: '',
    temperature: 0.9,
    top_k: 5,
    top_p: 0.9,
    max_tokens: 256,
    web_access: false
  }
};



const callPrompt = () => {
  prompt([{
    type: "input",
    name: 'message',
    message: 'Ask me anything  >>>'
  }])
    .then((answers) => {
      options.data.messages[0].content = `Instructions: ${fileContentInstructions}. Data: ${fileContentData}. Question: ${answers.message}. Answer with these informations.`
      getData()
    })
}

const getData = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data.result);
    console.log('\n')
    status = 'ready'
  } catch (error) {
    console.log('Network Issue or Issue Issue. Try again later')
  }
}

callPrompt()


setInterval(() => {
  if (status == "ready") {
    callPrompt()
  }
  status = 'not-ready'
}, 3000)

