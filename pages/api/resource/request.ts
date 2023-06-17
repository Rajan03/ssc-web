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
    if (!data.name || !data.email) {
        return res.status(400).json({message: 'Bad Request', status: 400})
    }

    // Send email
    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: `Resource request from ${data.name}`,
            text: data.resource,
            html: `<div class="container">
                        <h1>Contact Form Submission</h1>
                        <p><strong>Name:</strong> <span class="highlight">${data.name}</span></p>
                        <p><strong>Email:</strong> <span class="highlight">${data.email}</span></p>
                        <p><strong>Resource Name:</strong></p>
                        <p>${data.resource}</p>
                  </div>`
        })

        return res.status(200).json({message: 'Success', status: 200})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error, message: 'Internal Server Error', status: 200})
    }
}
