console.log('Start of the program')

function process() {
    setTimeout(function (...args) {
        console.log('this is a scheduled task I that will run in 5 seconds');
        (function(){
            setTimeout(function (...args) {
                console.log('this is a scheduled task II that will run in 2 seconds');
                (function(){
                    setTimeout(function (...args) {
                        console.log('this is a scheduled task III that will run in 1 seconds');
                        (function(){
                            setTimeout(function (...args) {
                                console.log('this is a scheduled task IV that will run in 0 seconds');
                                console.log('End of program');
                            }, 0);
                        })()
                    }, 1000);
                })()
            }, 2000);
        })()
    }, 5000);
}



process()




