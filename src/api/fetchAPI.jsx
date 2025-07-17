export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetch ${endpoint}:`, error);
    return [];
  }
};