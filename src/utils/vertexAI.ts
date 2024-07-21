import axios from 'axios';

async function search(query: string) {
  const accessToken = await getAccessToken();
  const url = 'https://discoveryengine.googleapis.com/v1alpha/projects/707176559152/locations/global/collections/default_collection/dataStores/aelf-website_1721489798649/servingConfigs/default_search:search';

  const data = {
    query: query,
    pageSize: 10,
    queryExpansionSpec: {
      condition: 'AUTO',
    },
    spellCorrectionSpec: {
      mode: 'AUTO',
    },
    safeSearch: true,
    contentSearchSpec: {
      snippetSpec: {
        returnSnippet: true,
      },
    },
  };

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(url, data, config);
    console.log(response.data);
  } catch (error) {
    console.error('Error making the request', error);
  }
}

async function getAccessToken(): Promise<string> {
  const { exec } = require('child_process');
  return new Promise((resolve, reject) => {
    exec('gcloud auth print-access-token', (error: any, stdout: string) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

// Example usage:
search('<QUERY>');
