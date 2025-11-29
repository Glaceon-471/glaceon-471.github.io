export default {
  content: [
    './*.{html,md}',
    './_includes/**/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_posts/**/*.{html,md}',
    './ccfolia_export/**/*.{html,md}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  }
}