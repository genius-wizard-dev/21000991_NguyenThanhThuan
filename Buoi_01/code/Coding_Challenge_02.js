import {CompareBMI, CalculateBMI} from "./Coding_Challenge_01.js"

const mark = {
    "weight": 78,
    "height": 1.69
};

const john = {
    "weight": 92,
    "height": 1.95
};

const compare = CompareBMI(CalculateBMI.V1, mark, john);
const markHigherBMI_V1 = compare.markHigherBMI ? "higher" : "lower";

console.log(`Mark's BMI (${compare.bmiMark}) is ${markHigherBMI_V1} than John's BMI (${compare.bmiJohn});`);