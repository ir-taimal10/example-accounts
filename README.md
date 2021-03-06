# example-accounts
Este proyecto muestra como estructurar una aplicación con NodeJs cumpliendo los principios [SOLID](https://es.wikipedia.org/wiki/SOLID).

```$javascript  
git clone https://github.com/hgtaimal/example-backend.git
```

### Instalación de dependencias
```$javascript  
npm install
```
### Ejecución ambiente de desarrollo
```$javascript  
npm run start:debug
```

### Ejecución ambiente de producción
```$javascript  
npm run start
```

### Prueba del [servicio expuesto](http://localhost:3000/api/system). 

   - http://localhost:3000/.well-known/openid-configuration
   - http://localhost:3000/auth?client_id=test_implicit_app&redirect_uri=https://testapp/signin-oidc&response_type=id_token&scope=openid%20profile%20&nonce=123%20&state=321
   
```$javascript  
curl http://localhost:3000/api/resource
```

```$javascript  
curl http://localhost:3000/api/system
```
### Configure CI CD via travis to Heroku
- Install ruby 
- Install travis cli with ruby `gem install travis`
- Create empty file named .travis.yml
- Run `travis setup heroku --org`
- Go to heroku account and reveal and copy the API Key https://dashboard.heroku.com/account
- Encrypt and add API Key to .travis.yml `travis encrypt pasteAPIKeyHere --add deploy.api_key --org`
- Complete `before_deploy`  section
