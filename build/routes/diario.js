"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // es6 modules se compilan como commonjs
// commonjs : const express= require "express"
const diaryServices = __importStar(require("../services/_diarios"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});
router.get('/:id', (req, res) => {
    // + = UnaryOperator, hay que cambiar el dato a string por que asi vienen en los params
    const diaryId = diaryServices.findById(+req.params.id);
    return (diaryId != null)
        ? res.send(diaryId)
        : res.sendStatus(404);
});
router.post('/', (req, res) => {
    try {
        const newDiaryEntry = (0, utils_1.default)(req.body);
        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);
        res.json(addedDiaryEntry);
    }
    catch (error) {
        res.status(404).send(error);
    }
});
exports.default = router;
