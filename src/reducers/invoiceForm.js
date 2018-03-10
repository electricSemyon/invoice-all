export default (store, {type, payload}) => {
  switch (type) {
    case 'FETCH_CUSTOMERS_SUCCESS':
      return {
        ...store,
        customers: payload
      };

    default:
      return store;
  }
};