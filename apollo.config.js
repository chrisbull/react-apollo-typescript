module.exports = {
  client: {
    service: {
      name: 'api',
      url: 'http://localhost:4000',
      // optional headers
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjanU0YnlpMzUwMDB4MDcyMG96a3U3Zm5hIiwiaWF0IjoxNTU0NDg0NTUwfQ.-_rlGxB32gUvKdUW-xjeJ8VnDB4kWGGw5J9N1Swm1Og',
      },
      // optional disable SSL validation check
      skipSSLValidation: true,
    },
  },
}
