
async function getPublicApiData() {
  try {
    const response = await fetch('https://api.publicapis.org/entries');
    const data = await response.json();
    
    if (data.entries && data.entries.length > 0) {
      data.entries.slice(0, 5).forEach(entry => {
        console.log('API Details:');
        console.log('Name:', entry.API);
        console.log('Description:', entry.Description);
        console.log('Category:', entry.Category);
        console.log('URL:', entry.Link);
        console.log('------------------------');
      });
    } else {
      console.log('No API entries found');
    }
  } catch (error) {
    console.error('Error fetching API data:', error);
  }
}

// Call the function
getPublicApiData();
