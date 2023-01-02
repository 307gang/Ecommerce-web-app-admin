module.exports = {
  type: "object",
  properties: {
    product_image: { type: "string" },
    product_id: { type: "string", minLength: 1 },
    product_name: { type: "string" },
    description: { type: "string" },
    brand_id: { type: "string" },
    category_id: { type: "string" },
    price: { type: "string" },
    product_stock: { type: "string" },
    on: { type: "string" },
  },
  required: ["product_id"],
  additionalProperties: false,
};
