import express from "express";
import { submitNRIForm, getAllNRIForms, deleteNRIForm } from "../controllers/nriFormController.js";

const router = express.Router();

router.post("/submit", submitNRIForm);
router.get("/all", getAllNRIForms);
router.delete("/delete/:id", deleteNRIForm);

export default router;
