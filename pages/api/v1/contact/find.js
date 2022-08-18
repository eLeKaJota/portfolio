import connectMongo from '../../../../utils/mongoConnect';
import Contact from '../../../../models/contactModel';

const Find = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({
      error: `Method ${req.method} Not Allowed`
    });
  }
  try {
    await connectMongo();
    const { page = 1, limit = 10 } = req.query;
    const count = await Contact.countDocuments(req.query);
    const contacts = await Contact.find(req.query)
      .sort({ 'timestamp.createdAt': -1 })
      .limit(limit)
      .skip((page - 1) * limit);

    const response = {
      status: count > 0 ? 200 : 404,
      page: page,
      limit: limit,
      count: count,
      totalPages: Math.ceil(count / limit),
      data: contacts
    };
    res.json(response);
  } catch (err) {
    console.log("ERR", err);
    res.status(500).json({ error: err.message });
  }
}

export default Find;
