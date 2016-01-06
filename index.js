var postcss = require('postcss')

module.exports = postcss.plugin('postcss-overflow-wrap', function () {
    return function (root) {
        root.walkDecls(function (decl) {
            if (decl.prop === 'overflow-wrap') {
                decl.cloneBefore(decl.clone({ prop: 'word-wrap' }))
            }
        })

        return root
    }
})
