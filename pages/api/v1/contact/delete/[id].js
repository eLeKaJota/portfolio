import connectMongo from '../../../../../utils/mongoConnect';
import Contact from '../../../../../models/contactModel';

const DeleteById = async (req, res) => {
  if (req.method !== 'DELETE') {
    return res.status(405).json({
      error: `Method ${req.method} Not Allowed`
    });
  }
  try {
    await connectMongo();
    const contact = await Contact.findByIdAndDelete(req.query.id);
    const response = {
      status: contact ? 200 : 404,
      data: contact ? contact : {}
    };
    res.json(response);
  } catch (err) {
    console.log("ERR", err);
    res.status(500).json({ error: err.message });
  }
}

export default DeleteById;
