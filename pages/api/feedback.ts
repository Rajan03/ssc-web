import {NextApiRequest, NextApiResponse} from "next";
import {mailOptions, transporter} from "@/lib/nodemailer";
import {IManagerFormSchema, IndividualFormSchema, ITeamFormSchema} from "@/types";

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
    const data: ITeamFormSchema | IndividualFormSchema | IManagerFormSchema = req.body

    // Send email
    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: `Feedback from ${data.firstName}`,
            html: `<div class="container">
                        <h1>FeedBack Form Submission</h1>
                        <p><strong>Name:</strong> <span class="highlight">${data.firstName + ' ' + data.lastName}</span></p>
                        <p><strong>Email:</strong> <span class="highlight">${data.email}</span></p>
                        <p><strong>Coach Name:</strong> <span class="highlight">${data.coachName}</span></p>
                        <p><strong>Date Of Coaching:</strong> <span class="highlight">${data.date}</span></p>
                  </div>`
        })

        return res.status(200).json({message: 'Success', status: 200})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error, message: 'Internal Server Error', status: 500})
    }
}
