var postcss = require('postcss');

module.exports = postcss.plugin('postcss-this-namespace', function () {

    return function (root) {

        //console.log(util.inspect(css));
        root.walkRules(function(rule) {
            if (!rule.selectors) {
                return rule;
            }

            rule.selectors = rule.selectors.map(function(selector) {
              return '.THIS ' + selector;
            });

            //console.log(rule.selectors);
        })

    };
});
