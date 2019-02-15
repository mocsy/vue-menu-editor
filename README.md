# menu_editor
A drag and drop menu editor built with vue.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Style
It's intentionally ustyled (mostly, see todo).
This provides the most flexibility to you when you consider including it in your project.

### Use in your code
```bash
npm install vue-menu-editor
```

Pass data back to parent component/script
```javascript
<menuedit :items="your_menu_items" :validate="menu_validate" @data="menu_data"></menuedit>
...
// Send anything to validate to signal that menu edit is finished
this.menu_validate = { };
...
// In methods, handle menu data
menu_data(data) {
    this.my_menu = data;
}
```

