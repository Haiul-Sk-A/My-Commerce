import product from '../models/product.js';

export const addProduct = async (req, res) => {
    const { title, description, price, quantity } = req.body;

        if (!title || !description || !price || !quantity) {
            return res.status(400).json({msg:"All fields are required"})
        }

    try {
        const newProduct = new product({
            title,
            description,
            price,
            quantity
        });

        await newProduct.save();
        res.status(201).json({ msg: "Upload Successfully", product: newProduct });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server Error" });
    }
};