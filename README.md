# Starter template

 [Documentation](https://akveo.github.io/ngx-admin?utm_campaign=ngx_admin%20-%20home%20-%20ngx_admin%20github%20readme&utm_source=ngx_admin&utm_medium=referral&utm_content=github_readme_documentation_link) | [Installation Guidelines](https://akveo.github.io/ngx-admin/docs/getting-started/what-is-ngxadmin?utm_campaign=ngx_admin%20-%20home%20-%20ngx_admin%20github%20readme&utm_source=ngx_admin&utm_medium=referral&utm_content=github_readme_installation_guidelines) | [Angular templates](https://www.akveo.com/templates?utm_campaign=services%20-%20github%20-%20templates&utm_source=ngx_admin&utm_medium=referral&utm_content=github%20readme%20top%20angular%20templates%20link)

# Installation notes
```
Use node version : v14.17.1
```

# Run local copy
```
1. npm install
2. npm start
```

# Production bundle

npm run build:prod

# Integration with JSON REST server

Despite there's an option to do CORS requests to API server directly, we don't advise to do so. This way has disadvantages in terms of security and performance. In terms of security when you do CORS request you basically expose your API server URL to everybody. Your API server should take additional measures to make sure some URLs are not accessible, because it is exposed to the web. As for performance, CORS requests require to send preflight OPTIONS request before each HTTP request. This adds additional HTTP overhead.

The solution we suggest is to use proxy for your API server. In this case you can make your app accessible through some sub-url. For example, if your application's hosted under url website.com and your index file is located at website.com/index.html, you can make your API root accessible on website.com/api. This is well supported by angular-cli/webpack-dev-server for development setup and by web servers for production setup. Let's review these setups:

# angular-cli/webpack-dev-server setup

There's not so much needs to be done to proxy your api using angular-cli. You can read detailed documentation in their docs. But the most important topics are:

You should create proxy.conf.json file in your application root. The file should contain something like below:

```
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false
  }
}
```

In this case you should put URL of your API server instead of http://localhost:3000.

After that you need to run your angular-cli application using following command

```
ng serve --proxy-config proxy.conf.json
```

That's it. Now you can access /api URL from your ngx-admin application and your requests will be forwarded to your API server.
