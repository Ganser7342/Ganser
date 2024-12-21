/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
    // ...
  }

module.exports = {
    content: ['./*.html'],
    theme: {
        extend: {
            backgroundImage: {
                'Sunset': "url('../images/Sunset.jpg')",
            },
        },
    },
    plugins: [],
}
