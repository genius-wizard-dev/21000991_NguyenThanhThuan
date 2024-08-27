export const CalculateBMI_Ver_01 = (weight, height) => {
    const bmi = weight / (height * height);
    return Math.round(bmi * 100) / 100;
}

export const CalculateBMI_Ver_02 = (weight, height) => {
    const bmi = weight / (height ** 2);
    return Math.round(bmi * 100) / 100;
}


export const CalculateBMI = {
    "V1": CalculateBMI_Ver_01,
    "V2": CalculateBMI_Ver_02
}

export const CompareBMI = (callback, mark, john) => {
    const bmiMark = callback(mark.weight, mark.height);
    const bmiJohn = callback(john.weight, john.height);
    return {"markHigherBMI": bmiMark > bmiJohn,
        "bmiMark": bmiMark,
        "bmiJohn": bmiJohn
    };
};



export default {
    CalculateBMI_Ver_01,
    CalculateBMI_Ver_02,
    CalculateBMI,
    CompareBMI
}

// Test
// const mark = {
//     "weight": 78,
//     "height": 1.69
// }

// const john = {
//     "weight": 92,
//     "height": 1.95
// }

// var markHigherBMI_V1 = CompareBMI(CalculateBMI.V1, mark, john).markHigherBMI;
// var markHigherBMI_V2 = CompareBMI(CalculateBMI.V2, mark, john).markHigherBMI;

// console.log(`Sử dụng công thức thứ 1: ${markHigherBMI_V1}`);
// console.log(`Sử dụng công thức thứ 2: ${markHigherBMI_V2}`);