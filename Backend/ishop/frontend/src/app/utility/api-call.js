const { AxiosApiInstance } = require("./helper")

const getCategory = async (id = null) => {
    let API = 'category';
    if (id) API += `/${id}`
    //http://localhost:5000/category/684670cb3083d234b70ccc1b
    const response = await AxiosApiInstance.get(API);
    if (response.data.success) {
        return response.data
    } else {
        return null
    }
}


const getColor = async (id = null) => {
    let API = 'color';
    if (id) API += `/${id}`
    //http://localhost:5000/category/684670cb3083d234b70ccc1b
    const response = await AxiosApiInstance.get(API);
    if (response.data.success) {
        return response.data
    } else {
        return null
    }
}



const getBrand = async (id = null) => {
    let API = 'brand';
    if (id) API += `/${id}`
    //http://localhost:5000/category/684670cb3083d234b70ccc1b
    const response = await AxiosApiInstance.get(API);
    if (response.data.success) {
        return response.data
    } else {
        return null
    }
}



export { getCategory, getColor, getBrand }