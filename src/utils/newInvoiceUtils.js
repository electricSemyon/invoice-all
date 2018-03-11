export const extractOption = ({name, id}) => ({name, id});

export const calculateTotal = (products, discount = 0) =>
  products.reduce((acc, p) => acc + p.price * p.quantity, 0) / 100 * (100 - discount);

export const limitDiscount = discount => Math.min(100, Math.max(0, discount));