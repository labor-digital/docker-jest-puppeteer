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
        ],
        [
            'jest-ctrf-json-reporter', {
                outputDir: process.env.TEST_ROOT_DIR + '/tests/test-reports',
                outputFile: './jest-ctrf.json'
            }
        ],
    ],
    roots: [
        process.env.TEST_ROOT_DIR
    ],
    setupFiles: [
        './setup-test-global-config.js',
        './setup-test-global-utils.js',
    ],
    setupFilesAfterEnv: [
        './setup-test-extend-toImageSnapshot.js'
    ],
    testMatch: [
        '**/tests/**/*.js'
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/vendor/',
    ]
};
