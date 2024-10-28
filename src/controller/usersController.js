
import userApiService from "../service/userApiService";
const readFunc = async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;
            let data = await userApiService.getUserWithPagination(+page, +limit);
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT,
            })
        } else {
            let data = await userApiService.getAllUser()
            return res.status(200).json({
                EM: data.EM,  // eror messageE
                EC: data.EC, // error code
                DT: data.DT//error data
            })
        }




    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: 'error from server',  // eror messageE
            EC: '-1', // error code
            DT: '', //error data
        })
    }
}

const createFunc = async (req, res) => {
    try {
         let data = await userApiService.createNewUser(req.body) 
        // console.log("Check respone", req.body)
        return res.status(200).json({
            EM: data.EM,  // eror messageE
            EC: data.EC, // error code
            DT: data.DT, //error data
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: 'error from server',  // eror messageE
            EC: '-1', // error code
            DT: '', //error data
        })
    }
}

const updateFunc = async (req, res) => {
    try {
        let data = await userApiService.updateUser(req.body)
        return res.status(200).json({
            EM: data.EM,  // eror messageE
            EC: data.EC, // error code
            DT: data.DT, //error data
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: 'error from server',  // eror messageE
            EC: '-1', // error code
            DT: '', //error data
        })
    }
}

const deleteFunc = async (req, res) => {
    try {
        // userApiService.deleteUser()

        // delete: FE gửi req.body.id tới BE nhận và xóa trong csdl
        let data = await userApiService.deleteUser(req.body.id)
        return res.status(200).json({
            EM: data.EM,  // eror messageE
            EC: data.EC, // error code
            DT: '', //error data
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: 'error from server',  // eror messageE
            EC: '-1', // error code
            DT: '', //error data
        })
    }
}

module.exports = {
    readFunc, createFunc, updateFunc, deleteFunc
}
