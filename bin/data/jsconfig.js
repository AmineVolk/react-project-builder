const content = `{
  "compilerOptions": {
    "baseUrl": "./src",
    "module": "commonjs",
    "paths": {
      "@src": ["."],
      "@src/*": ["./*"],

      "@app": ["app"],
      "@app/*": ["app/*"],

      "@config": ["app/config"],
      "@config/*": ["app/config/*"],

      "@components": ["app/components"],
      "@components/*": ["app/components/*"],

      "@duck": ["app/duck"],
      "@duck/*": ["app/duck/*"],
      
      "@screens": ["app/screens"],
      "@screens/*": ["app/screens/*"],

      "@util": ["app/util" ],
      "@util/*": ["app/util/*" ],

      "@res": ["app/res" ],
      "@res/*": ["app/res/*" ]  
     }
  }
}`;

module.exports = { content };
