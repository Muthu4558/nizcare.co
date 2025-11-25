import NRIForm from "../models/NRIForm.js";

// Submit
export const submitNRIForm = async (req, res) => {
  try {
    const form = new NRIForm(req.body);
    await form.save();
    res.status(201).json({ message: "NRI form submitted", form });
  } catch (err) {
    res.status(500).json({ message: "Submit failed", error: err.message });
  }
};

// Get All
export const getAllNRIForms = async (_req, res) => {
  try {
    const forms = await NRIForm.find().sort({ createdAt: -1 });
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed", error: err.message });
  }
};

// Delete
export const deleteNRIForm = async (req, res) => {
  try {
    await NRIForm.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Form deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
};
