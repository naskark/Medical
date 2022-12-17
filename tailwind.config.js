/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {screens: {
        'mbvs' : { 'min': "250px" },
        'mbvs1' : { 'min': "260px" },
        'mbvs2' : { 'min': "270px" },
        'mbvs3' : { 'min': "280px" },
        'mbvs4' : { 'min': "290px" },
        'mbvs5' : { 'min': "310px" },
        'mbs' : { 'min': "320px" },
        'mbs1': { 'min': "330px" },
        'mbs2': { 'min': "340px" },
        'mbs3': { 'min': "350px" },
        'mbm' : { 'min': "360px" },
        'mbm1': { 'min': "370px" },
        'mbm2': { 'min': "380px" },
        'mbm3': { 'min': "390px" },
        'mbm4': { 'min': "400px" },
        'mbm5': { 'min': "410px" },
        'mbl': { 'min': "420px" },
        'mbl1' : { 'min': "440px" },
        'mbl2': { 'min': "460px" },
        'mbl3': { 'min': "480px" },
        'mbl4': { 'min': "500px" },
        'mbl5' : { 'min': "520px" },
        'mbl6': { 'min': "540px" },
        'mbl7': { 'min': "560px" },
        'mbl8': { 'min': "580px" },
        'mbl9': { 'min': "600px" },
        'mbl10': { 'min': "620px" },
        't': { 'min': "640px" },
        't1': { 'min': "660px" },
        't2': { 'min': "680px" },
        't3': { 'min': "700px" },
        't4': { 'min': "720px" },
        't5': { 'min': "740px" },
        't6': { 'min': "760px" },
        't7': { 'min': "780px" },
        't8': { 'min': "800px" },
        't9': { 'min': "820px" },
        't10' : { 'min' : "840px"}
      },},
      fontFamily:{
        body:['League Spartan']
      }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
};