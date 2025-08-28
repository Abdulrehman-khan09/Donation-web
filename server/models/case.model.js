const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
    seekerId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'seeker', 
        required: true 
    },
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    requestedAmount: { 
        type: Number, 
        required: true 
    },
    collectedAmount: { 
        type: Number, 
        default: 0 
    },
    status: { 
        type: String, 
        enum: ['pending', 'approved', 'rejected', 'funded', 'completed'], 
        default: 'pending' 
    },
    approvedBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'admin' 
    },
    approvedAt: { 
        type: Date 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    }
});

caseSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const caseModel = mongoose.model('case', caseSchema);

module.exports = caseModel;
