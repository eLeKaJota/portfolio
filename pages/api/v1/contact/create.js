import connectMongo from '../../../../utils/mongoConnect';
import Contact from '../../../../models/contactModel';

const Create = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: `Method ${req.method} Not Allowed`
    });
  }
  try {
    await connectMongo();
    const contact = await Contact.create(req.body);
    const response = {
      status: 201,
      data: contact
    }
    res.json(response);
  } catch (err) {
    console.log("ERR", err);
    res.status(500).json({ error: err.message });
  }
}

export default Create;
