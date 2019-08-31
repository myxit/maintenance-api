import * as mongoose from 'mongoose';

export const MaintenanceSchema = new mongoose.Schema({
  deviceId: Number,
  name: String,
  description: String,
  amountOfWorkHours: String,
  state: String,
  validFrom: Date,
  validTo: Date,
});
