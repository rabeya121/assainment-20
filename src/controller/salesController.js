const { departmentSalaryExpService, highestQtySoldService, revenueByMonthService, avgPriceService, topProductsService, quantityByProductService, calculateTotalService } = require("../service/salesService");

exports.calculateTotal = async(req,res)=> {
    let result = await calculateTotalService(req);
    res.status(200).json(result)
}

exports.quantityByProduct = async(req,res)=> {
    let result = await quantityByProductService(req);
    res.status(200).json(result)
}

exports.topProducts = async(req,res)=> {
    let result = await topProductsService(req);
    res.status(200).json(result)
}

exports.avgPrice = async(req,res)=> {
    let result = await avgPriceService(req);
    res.status(200).json(result)
}

exports.revenueByMonth = async(req,res)=> {
    let result = await revenueByMonthService(req);
    res.status(200).json(result)
}

exports.highestQtySold = async(req,res)=> {
    let result = await highestQtySoldService(req);
    res.status(200).json(result)
}

exports.departmentSalaryExp = async(req,res)=> {
    let result = await departmentSalaryExpService(req);
    res.status(200).json(result)
}