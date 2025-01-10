import axios from 'axios';


const helpBotController = async (req, res) => {

  const {question} = req.body;
  console.log(question)
  const prompt = `
  I have built a donation website that receives donations from people. 
  These donations include:
  - Blood
  - Food and Clothes
  - Funds
  
  People can also apply for financial assistance by submitting an application for their need of funds explain in 20 words maximum. 
  
  Here's my question about the system: ${question}
`;

 
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.BOT_API}`,
        method: "post",
        data: {
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        },
      });
    console.log(response)

    let answer = response.data.candidates[0].content.parts[0].text
    return res.status(200).json({ success: true, data:answer});
        

    
  } catch (error) {
    
  }


}
export {helpBotController}