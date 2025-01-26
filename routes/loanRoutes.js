import { Router } from "express";
import LoanApplication from "../models/loanApplication.js"; // Import loan application model

const router = Router();

// Loan Application POST API
router.post("/loanform", async (req, res) => {
  const {
    fullName,
    cnic,
    email,
    phone,
    loanType,
    loanAmount,
    loanPurpose,
    guarantorName,
    guarantorCnic,
    guarantorPhone,
  } = req.body;

  try {
    // Create a new loan application entry
    const newLoanApplication = new LoanApplication({
      fullName,
      cnic,
      email,
      phone,
      loanType,
      loanAmount,
      loanPurpose,
      guarantorName,
      guarantorCnic,
      guarantorPhone,
    });

    // Save the application to the database
    await newLoanApplication.save();

    // Send success response
    res.status(201).json({ message: "Loan application submitted successfully!" });
  } catch (err) {
    // Handle errors
    res.status(500).json({ error: err.message });
  }
});

export default router;
