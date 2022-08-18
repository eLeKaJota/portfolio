import { Schema, model, models } from 'mongoose';

const contactSchema = new Schema({
  name: {
    type: String,
    default: 'Anonymous',
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  message: {
    type: String,
    default: 'No message',
  }
}, {
  timestamps: {
    createdAt: 'timestamp.createdAt',
    updatedAt: 'timestamp.updatedAt',
  }
});

const Contact = models.Contact || model('Contact', contactSchema);

export default Contact;
