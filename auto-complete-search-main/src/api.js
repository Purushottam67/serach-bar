const API_BASE_URL = 'http://cdn-api.co-vin.in/api/v2';

export const getStates = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/location/states`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching states:', error);
    return [];
  }
};
