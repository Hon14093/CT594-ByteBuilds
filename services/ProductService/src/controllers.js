import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const returnAllProducts = async (req,res) => {
    try {
        const products = await prisma.product.findMany();
        res.status(200).json({
            success: true,
            message: 'Get all products',
            products: products
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}