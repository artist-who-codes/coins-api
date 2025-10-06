export function serverLogger(
    type: 'success' | 'info' | 'error' = 'info',
    customizedMessage: string = ''
) {
    const reset = '\x1b[0m';
    const colors = {
        success: '\x1b[32m', // green
        info: '\x1b[36m', // cyan
        error: '\x1b[31m', // red
    };
    const message = {
        success: 'API Server Active',
        info: customizedMessage, // cyan
        error: 'Failed to start server', // red
    };
    const prefix = {
        success: '✅',
        info: 'ℹ️',
        error: '❌',
    };

    console.log(
        `\n\n\n${colors[type]}${prefix[type]} ${message[type]} ${reset}\n\n\n`
    );
}
