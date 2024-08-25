import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai"; 
import { NextRequest, NextResponse } from "next/server";

// Initialize the Google Generative AI with your API key
const googleAI = createGoogleGenerativeAI({
  apiKey: (process.env.NEXT_PUBLIC_GEMINI_SECRET_KEY as string),
});

export async function POST(req: NextRequest) {
  const { content } = await req.json();

  if (!content) {
    return NextResponse.json({ error: 'Content is required' }, { status: 400 });
  }

  try {
    // Create the model instance
    const model = googleAI('gemini-1.5-flash');

    // Use the generateText function to generate the summary
    const { text } = await generateText({
      model,
      prompt: `Summarize the following content concise: ${content}`,
    });

    // Return the summarized text as JSON
    return NextResponse.json({ summary: text });
  } catch (error) {
    console.error('Error summarizing content:', error);
    return NextResponse.json({ error: 'Error summarizing content' }, { status: 500 });
  }
}



// import { NextRequest, NextResponse } from "next/server";

// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI(process.env.NEXT_GEMINI_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// export async function POST(req: NextRequest) {
//   const { content } = await req.json();

//   if (!content) {
//     return NextResponse.json({ error: 'Content is required' }, { status: 400 });
//   }

//   try {
//     const prompt = "Summarize the following content in detail: " + content;
//     const summary = await model.generateContent(prompt);
//     const final = summary.response.candidates[0].content.parts
//     return NextResponse.json({ parts: final });
//   } catch (error) {
//     console.error('Error summarizing content:', error);
//     return NextResponse.json({ error: 'Error summarizing content' }, { status: 500 });
//   }
// }


