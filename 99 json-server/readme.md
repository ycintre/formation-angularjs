# json server for testing REST API

0 Set corporate proxy for npm
```npm
npm config set proxy http://ancy.proxy.corp.sopra:8080
npm config set https-proxy http://ancy.proxy.corp.sopra:8080
```

1. Install json-server
```npm
npm install -g json-server
```
2. Run the server (with 2 sec delay)
```bash
json-server db.json -d 2000
```
3. Server sould be up & running at [http://localhost:3000](http://localhost:3000)