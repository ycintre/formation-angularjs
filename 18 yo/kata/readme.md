Install yeoman
```
npm install -g yo
```

Install generators
```
npm install -g generator-fountain-webapp
```

Install other common dependencies if needed
```
npm install -g gulp-cli bower
```

Run the generator
```
yo fountain-webapp
```

Answer generator questions
```
? Which JavaScript framework do you want?
    => Angular 1
? Which module management do you want?
    => None with Bower and script injection
? Which JS preprocessor do you want?
    => Pure old JavaScript
? Which CSS preprocessor do you want?
    => CSS
? Which Continuous Integration platform do you want? (Press <space> to select, <a> to toggle all, <i> to inverse selection)
    => None (default)
? Do you want a sample app?
    => A working landing page
? Would you like a router?
    => Angular UI Router
```

Now we wait... and start the generated webapp
```
gulp serve
```

Access the app on [http://localhost:3000/](http://localhost:3000/)