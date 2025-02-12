
export const getData = async () => {

try {
  const response = await fetch("https://test-back-server.onrender.com/api/questions");
  const data = await response.json();
  console.log(data);
  return data;

} catch (error) {
  console.error("Error querying data:", error);
  return [];
}
};