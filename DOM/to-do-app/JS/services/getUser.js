async function getUserInfo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/4"
    );
    if (!response.ok) {
      throw new Error("Something wrong with username");
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export { getUserInfo };
