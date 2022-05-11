import { api } from "../HttpCommons/httpCommon"

export const getProductsByCategory = async () => {
    try {
        const response = await api.get("/products")
        console.log(response)
        return response

    }
    catch (err) {
        console.log("error!")
        console.log(err)
    }
}