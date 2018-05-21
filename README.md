# material-design-icons-module
convert all material design svg icons into `npm module`

## isntall
`npm install material-design-icons-module`

## icons list
you can find all icons from https://material.io/icons/

## icons size
support `24px` and `48px`, but some icons doesn't support `48px`

## icons category
1. action
2. alert
3. av
4. communication
5. content
6. device
7. editor
8. file
9. hardware
10. image
11. maps
12. navigation
13. notification
14. places
15. social
16. toggle

## usage
```
import MateriaModule from 'material-design-icons-module';

let size = '48';
let icon = 'action/book';

let bookIcon = MateriaModule.load(size, icon);

console.log(bookIcon);
```

## LICENSE
MIT Copyright 2018 [Hermes Lin](https://github.com/hermeslin)