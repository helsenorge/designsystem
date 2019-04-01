module.exports = {
    linters: {
        '*': ['prettier \"src/**/*.+(js|jsx|json|yml|yaml|scss|ts|tsx)\"'],
        '**/*.+(tsx|ts)': [
            'tslint -p .',
            'jest --findRelatedTests'
        ]
    }
}