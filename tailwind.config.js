/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        ".index.html",
        "./history-telling/**/*.{html, js}",
        "./sportanews/**/*.{html, js}",
        "./top-pick/**/*.{html, js}",
        "./transporta/**/*.{html, js}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')

    ],
}

