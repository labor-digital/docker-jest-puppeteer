module.exports = {
    preset: 'jest-puppeteer',
    verbose: false,
    testFailureExitCode: 0,
    reporters: [
        'default',
        'summary',
        [
            'jest-junit', {
                outputDirectory: process.env.TEST_ROOT_DIR + '/tests/test-reports',
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
