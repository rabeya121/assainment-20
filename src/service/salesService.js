const Sales = require("../models/salseModel")
const calculateTotalService = async (req) => {
    try{
        const projectStage = {
            $project: {
              _id: 0,
              totalRevenue: { $multiply: ["$quantity", "$price"] }
            }
          };

          const groupStage = {
            $group: {
              _id: null,
              totalRevenue: { $sum: "$totalRevenue" }
            }
          };


        let result = await Sales.aggregate([
            projectStage, 
            groupStage
        ])
        return {status: "success", data: result}
    }catch(e){
        return {status: "fail", massage: e}
    }
}


const quantityByProductService = async (req) => {
    try{
        const QuantityStage = {
          $group: {
            _id: '$product',
            totalQuantitySold: { $sum: '$quantity' },
          }
        }

      let result = await Sales.aggregate([
        QuantityStage
      ])

        return {status: "success", data: result}
    }catch(e){
        return {status: "fail", massage: e}
    }
}


const topProductsService = async (req) => {
    try{

     const totalRevenueStage = {
        $group: {
          _id: '$product',
          totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } },
        },
      }
      const sortStage = {
        $sort: {
          totalRevenue: -1,
        },
      }

      const limitStage = {
        $limit: 5,
      }

      let result = await Sales.aggregate([
        totalRevenueStage,
        sortStage,
        limitStage
      ])

        return {status: "success", data: result}
    }catch(e){
        return {status: "fail", massage: e}
    }
}


const avgPriceService = async (req) => {
    try{
      const avgStage = {
        $group: {
          _id: null,
          averagePrice: { $avg: '$price' },
        },
      }

      let result = await Sales.aggregate([
        avgStage
      ])

        return {status: "success", data: result}
    }catch(e){
        return {status: "fail", massage: e}
    }
}


const revenueByMonthService = async (req) => {
    try{
      const groupStage = {
        $group: {
          _id: {
            year: { $year: '$date' },
            month: { $month: '$date' },
          },
          totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } },
        },
      }

      const sortStage =  {
        $sort: {
          '_id.year': 1,
          '_id.month': 1,
        }
      }

      let result = await Sales.aggregate([
        groupStage,
        sortStage
      ])

        return {status: "success", data: result}
    }catch(e){
        return {status: "fail", massage: e}
    }
}


const highestQtySoldService = async (req) => {
    try{

      const groupStage = {
        $group: {
          _id: {
            date: '$date',
            product: '$product',
          },
          totalQuantity: { $sum: '$quantity' },
        }
      }
      const sortStage ={
        $sort: {
          totalQuantity: -1,
        },
      }
      const limitStage ={
        $limit: 1,
      }

      let result = await Sales.aggregate([
        groupStage,
        sortStage,
        limitStage
      ])
        return {status: "success", data: result}
    }catch(e){
        return {status: "fail", massage: e}
    }
}

const departmentSalaryExpService = async (req) => {
    try{
      const groupStage = {
        $group: {
          _id: '$department',
          totalSalaryExpense: { $sum: '$salary' },
        }
      }
      let result = await Sales.aggregate([
        groupStage
      ])
        return {status: "success", data: result}
    }catch(e){
        return {status: "fail", massage: e}
    }
}

module.exports = {
    calculateTotalService, 
    quantityByProductService,
    topProductsService,
    avgPriceService,
    revenueByMonthService,
    highestQtySoldService,
    departmentSalaryExpService
}   