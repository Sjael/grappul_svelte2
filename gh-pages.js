import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/Sjael/grappul_svelte2.git', // Update to point to your repository
  user: {
   name: 'Jake O', // update to use your name
   email: 'jakeobrien44@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);