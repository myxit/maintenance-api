import { Document } from 'mongoose';

export interface IMaintenance extends Document {
    readonly deviceId: number;
    readonly name: string;
    readonly description: string;
    readonly amountOfWork: string;
    readonly state: string;
    readonly validFrom: Date;
    readonly validTo: Date;
}
