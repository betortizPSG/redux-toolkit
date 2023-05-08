const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (err) {
    console.log("Error:", err);
  }
};

export default error;