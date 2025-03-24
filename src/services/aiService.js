const { OpenAI } = require('openai');

const openai = new OpenAI(process.env.OPENAI_API_KEY);

exports.getAIFeedback = async (code, language) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a senior software engineer reviewing code submissions."
        },
        {
          role: "user",
          content: `Please review this ${language} code and provide feedback on code quality, efficiency, and potential improvements:\n\n${code}`
        }
      ]
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('AI feedback error:', error);
    throw new Error('Failed to get AI feedback');
  }
}; 