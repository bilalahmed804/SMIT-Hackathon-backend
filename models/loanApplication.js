import mongoose from "mongoose";

const loanApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  cnic: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  loanType: { type: String, required: true },
  loanAmount: { type: Number, required: true },
  loanPurpose: { type: String, required: true },
  guarantorName: { type: String, required: true },
  guarantorCnic: { type: String, required: true },
  guarantorPhone: { type: String, required: true },
}, { timestamps: true });

const LoanApplication = mongoose.model("LoanApplication", loanApplicationSchema);

export default LoanApplication;
