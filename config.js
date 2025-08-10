const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}



// Change following defaultConfig if you are deploying DANUWA-MD on github actions/github codespaces or replit...Railway users don't need to edit this



const defaultConfig = {
  SESSION_ID: "WEgx1I7K#sO0_Y6fm_Vd8h0dTDERvmDnykgab6KPzO22Pd3jR1C0", // Put your session id here
  ALIVE_IMG: "https://github.com/DANUWA-MD/DANUWA-BOT/blob/main/images/Danuwa%20-%20MD.png?raw=true",
  ALIVE_MSG: "*Hello👋 I am ganisha bot *", // Change alive msg from here
  OPENAI_API_KEY: "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",// Add OPENAI API key here
  GEMINI_API_KEY: "AIzaSyBbJGrbH-yAer2GsNXEuhr_T4IZsrpP6OQ", // Add Gemini API key here
  REMOVE_BG_API_KEY:"ftCiMqC175zfDf2dXsyuuMQA", // Add removebg API key here
  SKYMANTION_API_KEY: "sky|cb585353a4e0ec996e448d1ccc484053e89020e2", // Add your skymantion API key here
  BOT_OWNER: "94764288067", // Replace your bot owner number here with 94(country code)
  ownerNumber: ["94764288067"], // Replace your bot owner number here (same as bot owner number)
  AUTO_STATUS_REACT: "true",
  AUTO_STATUS_REPLY: "true",
  AUTO_STATUS_SEEN: "true",
  MODE: "public", // 'private', 'public'
};

//*******************************************************************************************************************************************************

module.exports = {
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || defaultConfig.AUTO_STATUS_REACT,
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REPLY|| defaultConfig.AUTO_STATUS_REPLY,
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_SEEN || defaultConfig.AUTO_STATUS_SEEN,
  SESSION_ID: process.env.SESSION_ID || defaultConfig.SESSION_ID,
  ALIVE_IMG: process.env.ALIVE_IMG || defaultConfig.ALIVE_IMG,
  ALIVE_MSG: process.env.ALIVE_MSG || defaultConfig.ALIVE_MSG,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || defaultConfig.OPENAI_API_KEY,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || defaultConfig.GEMINI_API_KEY,
  REMOVE_BG_API_KEY: process.env.REMOVE_BG_API_KEY || defaultConfig.REMOVE_BG_API_KEY, 
  SKYMANTION_API_KEY: process.env.SKYMANTION_API_KEY || defaultConfig.SKYMANTION_API_KEY,
  BOT_OWNER: process.env.BOT_OWNER || defaultConfig.BOT_OWNER,
  ownerNumber: process.env.ownerNumber
    ? process.env.ownerNumber.split(",")
    : defaultConfig.ownerNumber,
  AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS, defaultConfig.AUTO_READ_STATUS),
  MODE: process.env.MODE || defaultConfig.MODE,

};
