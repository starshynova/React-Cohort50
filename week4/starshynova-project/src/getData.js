
export const getData = async () => {

try {
  const response = await fetch("http://localhost:5000/api/questions");
  const data = await response.json();
  console.log(data);
  return data;

} catch (error) {
  console.error("Error querying data:", error);
  return [];
}
};