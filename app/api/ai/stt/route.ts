import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fileUrl } = req.body;

  if (!fileUrl) {
    return res.status(400).json({ error: 'File URL is required' });
  }

  try {
    const response = await axios.post('https://api.speech-to-text-service.com/convert', {
      fileUrl,
    });

    const { text } = response.data;

    return res.status(200).json({ text });
  } catch (error) {
    console.error('Error converting speech to text:', error);
    return res.status(500).json({ error: 'Failed to convert speech to text' });
  }
}