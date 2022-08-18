import connectMongo from "../../../../utils/mongoConnect";
import Contact from "../../../../models/contactModel";

const FindById = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: `Method ${req.method} Not Allowed`
    });
  }
  try {
    await connectMongo();
    const contact = await Contact.findById(req.query.id);

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

export default FindById;
