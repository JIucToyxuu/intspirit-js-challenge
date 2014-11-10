requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../src/js'
    }
});
requirejs(['app/App']); // стартовый файл