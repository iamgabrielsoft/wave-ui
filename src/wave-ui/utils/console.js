export const consoleWarn = message => console.warn(`Wave UI: ${message}`)

export const consoleError = message => console.error(`Wave UI: ${message}`)


import chalk from "chalk"; 


/**
 * Wave-ui logger, a more descriptive logger for the entire application
 */

class Logger {
    static options = {};

    constructor(options) {
        this.options = Object.assign({
            logLevel: process.argv.includes('--debug') ? 4 : 3
        }, options); 
    }


    setOptions = (options) => {
        Object.assign(this.options, options)
    }


    status = (color, label, ...args) => {
        console.log(chalk[color](label, `Wave-UI ${args}`))
    }


    debug = (...args) => {
        if(this.options.logLevel < 4){
            return; 
        }

        this.status('magenta', 'debug', `Wave-UI ${args}`)
    }


    wait = (...args) => {
        if(this.options.logLevel < 3){
            return; 
        }

        this.status('cyan', 'wait', `Wave-UI ${args}`); 
    }


    success = (...args) => {
        if(this.options.logLevel){
            return; 
        }

        this.status('green', 'success', `Wave-UI ${args}`); 
    }


    error = (...args) => {
        if(this.options.logLevel < 1){
            return; 
        }

        process.exitCode || 1; 
        console.error(chalk.red('error'), `Wave-UI ${args}`); 
    }

    warn = (...args) => {
        if(this.options.logLevel < 2){
            return; 
        }

        console.warn(chalk.yellow('warning'), `Wave-UI ${args}`)
    }
}; 


const logger = new Logger(); 
export default logger; 