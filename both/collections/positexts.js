Positexts = new Mongo.Collection('positexts');

Positexts.attachSchema(new SimpleSchema({
  message: {
    type: String,
    label: "Message",
  },
  author: {
    type: String,
    label: "Who Said This?"
  },
    link: {
      type: String,
      label: "Where can we find this?"
  }
}));