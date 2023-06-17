import {NextApiRequest, NextApiResponse} from "next";
import {mailOptions, transporter} from "@/lib/nodemailer";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req;

    switch (method) {
        case 'POST':
            await POST(req, res);
            break;
        default:
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}

const POST = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body
    if (!data.name || !data.email || !data.message) {
        return res.status(400).json({message: 'Bad Request'})
    }

    // Send email
    try {
        const info = await transporter.sendMail({
            ...mailOptions,
            subject: `New message from ${data.name}`,
            text: data.message,
            html: `<div class="container">
                        <h1>Contact Form Submission</h1>
                        <p><strong>Name:</strong> <span class="highlight">${data.name}</span></p>
                        <p><strong>Email:</strong> <span class="highlight">${data.email}</span></p>
                        <p><strong>Message:</strong></p>
                        <p>${data.message}</p>
                        
                        <style>
                            body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f5f5f5;
      padding: 20px;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 5px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      padding: 20px;
    }
    
    h1 {
      color: #333333;
      font-size: 24px;
      margin-bottom: 20px;
    }
    
    p {
      color: #666666;
      margin-bottom: 10px;
    }
    
    .highlight {
      color: #0099ff;
      font-weight: bold;
    }
    
    .button {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #0099ff;
      color: #ffffff;
      text-decoration: none;
      border-radius: 3px;
      transition: background-color 0.3s ease;
    }
    
    .button:hover {
      background-color: #0080ff;
    }
                        </style>    
                  </div>`
        })

        return res.status(200).json({message: 'Success'})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error, message: 'Internal Server Error'})
    }
}
