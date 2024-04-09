import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ComplaintsSchema = new Schema({
    userData: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true
    },
    NgoID: {
        type: Schema.Types.ObjectId,
        ref: "Ngo",
        required: true,
        unique: false
    },
    createdTs: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedTs: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        default: "pending"
    }
});

// Define the User Schema
const UserSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    NgoID: {
        type: Schema.Types.ObjectId,
        ref: "Ngo",
        required: true,
        unique: false
    },
    createdTs: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedTs: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        default: "pending"
    }
});

// Define the Admin Schema
const AdminSchema = new Schema({
    // Inherits properties from User Schema
}, { discriminatorKey: 'role' });

// Define the NGO Schema
const NgoSchema = new Schema({
    // Inherits properties from User Schema
}, { discriminatorKey: 'role' });

// Inherit properties from User Schema for Admin and NGO Schemas
AdminSchema.add(UserSchema);
NgoSchema.add(UserSchema);

// Create models
const UserModel = mongoose.model('User', UserSchema);
const AdminModel = UserModel.discriminator('Admin', AdminSchema);
const NgoModel = UserModel.discriminator('Ngo', NgoSchema);
const ComplaintsModel = mongoose.model('Complaints', ComplaintsSchema)

export { UserModel, AdminModel, NgoModel, ComplaintsModel };
