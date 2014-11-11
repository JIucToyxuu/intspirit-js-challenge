requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../js'
    }
});
requirejs(['app/App']); // стартовый файл