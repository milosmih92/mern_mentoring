
module.exports={
    getProducts: async (req, res) => {
        const products = [
            {
                name: 'ABC',
                type: 'Water',
                price: 3,
            }
        ];
    
        res.status(200).json(products);
    }
}
