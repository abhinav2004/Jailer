mainApp.service('$storage', function ($window) {
    var database;
    this.initialize = function (storageFileName) {
        database = $window.sqlitePlugin.openDatabase({name: storageFileName, location: 'default'});
        this.execute('CREATE TABLE IF NOT EXISTS keyvalue (key text unique, value text)', [], function (err) {
            alert(err);
        })
    }
    this.execute = function(sqlExpr, sqlValues, callback, onError) {
        return execute(sqlExpr, sqlValues, callback, onError, null);
    }
    var execute = function(sqlExpr, sqlValues, callback, onError, transaction) {
        var result = [];
        var wait = true;
        if(transaction) {
            transaction.executeSql(sqlExpr, sqlValues, function (transaction, resultSet) {
                    result = resultSet;
                    wait = false;
                });
        } else {
            database.transaction( function ( transaction ) {
                transaction.executeSql(sqlExpr, sqlValues, function (transaction, resultSet) {
                    result = resultSet;
                    wait = false;
                })
            }, onError);
        }
        ///while(wait) {}
    }
    this.getValue = function (key) {
        var result = this.execute("SELECT value FROM keyvalue WHERE key = ?", [key], function(err, key) {
            alert('Could not get value for key ' + key);
        } );
        if(result[0])
            return result[0];
    }
    this.setValue = function (key, value) {
        this.execute("DELETE FROM kayvalue WHERE key = ?", [key], function(err) {});
        this.execute("INSERT INTO keyvalue VALUES (?,?)", [key, value], function(err, key) {
            alert('Could not get value for key ' + key);
        } );
    }
});