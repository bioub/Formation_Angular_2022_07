# MyApp

## Exercice Router

Créer 3 composants dans le module `users`

* `users` qui sera à la racine du module `users` (4 fichiers sans répertoire)
* `user-add`
* `user-details`

Dans le routing module de users, créer 3 routes

* `/users` pour le composant `UsersComponent`
* `/users/add` pour le composant `UserAddComponent`
* `/users/:userId` pour le composant `UserDetailsComponent`

Pour ce dernier composant, les URL contiendront un paramètre, on ne fera pas un lien vers `/users/:userId` mais par exemple `/users/123` (si l'on souhaite afficher le user dont l'id est 123)

Charger le module `UsersModule` dans `AppModule` (attention à l'ordre)

Créer un lien vers `/users` dans la top-bar

Dans le template de `UsersComponent` créer un liste de nom d'utilisateur avec des lien (ex: Jean Dupont, lien vers `/users/1`)

Ajouter également un lien vers la page `UserAdd`.

Utiliser routerLinkActive dans la top-bar et dans `UsersComponent`

## Exercice Service / HttpClient

Avec le programme `ng` créer un service `todos/todo.service.ts`

Dans ce service, injecter `HttpClient` (comme dans `UserService`)

Créer une méthode `getAll` dans ce service qui ira récupérer les todos sur la requête :

```
GET https://jsonplaceholder.typicode.com/todos
```

Dans `TodosComponent` injecter `TodoService`

Dans la méthode `ngOnInit` de  `TodosComponent`, appeler la méthode `getAll` de `TodoService` et via le callback de `.subscribe` (comme dans `UsersComponent`) récupérer les todos du serveur et les ajouter au tableau.
