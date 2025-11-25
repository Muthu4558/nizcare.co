import mongoose from "mongoose";

const nriFormSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  whatsapp: String,
  currentCountry: String,
  profession: String,
  workWithCommunities: String, // Yes / No
  promoteNizcare: String,      // Yes / No
  expectedReach: String        // monthly reach
}, { timestamps: true });

export default mongoose.model("NRIForm", nriFormSchema);