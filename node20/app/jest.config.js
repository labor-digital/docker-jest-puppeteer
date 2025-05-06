// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    
    preset: 'jest-puppeteer',
    
    reporters: [
        'default',
        [
            'jest-junit', {
                outputDirectory: process.env.TEST_ROOT_DIR + '/tests/reports',
                outputName: './jest-junit.xml'
            }
        ]
    ],
    
    roots: [
        process.env.TEST_ROOT_DIR
    ],
    
    setupFilesAfterEnv: ['./test-setup.js'],
    
    testMatch: [
        '**/tests/**/*.js'
    ],
    
    testPathIgnorePatterns: [
        '/node_modules/',
    ]
    
};
