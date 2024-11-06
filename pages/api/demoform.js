
import { transporter , mailOptions } from "../../config/nodemailer";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body; // No need to parse JSON, Next.js handles it if sent correctly

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: 'Request Quote Form',
        text: data.message,
        html: `
          <h1>Request Quote Form</h1>
          <p>Name: ${data.name || 'N/A'}</p>
          <p>Email: ${data.email || 'N/A'}</p>
          <p>Phone: ${data.phone || 'N/A'}</p>
          <p>Processor: ${data.processer || 'N/A'}</p>
          <p>Memory: ${data.memory || 'N/A'}</p>
          <p>Storage: ${data.storage || 'N/A'}</p>
          <p>Operating System: ${data.os || 'N/A'}</p>
          <p>Service Level Agreement: ${data.sla || 'N/A'}</p>
          <p>Unit of Server: ${data.units || 'N/A'}</p>
          <p>Website/URL: ${data.website || 'N/A'}</p>
          <p>Message: ${data.message || 'N/A'}</p>
        `,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
