/* Stop/watch object

- sw object has a few members:
    - duration: which is a property
    - and three methods: reset, start and stop

- sw.duration starts at 0 and count the time between start and stop. 
- sw.start() cannot be called twice ('Stopwatch has already started')
- same for sw.stop() ('Stopwatch is not started')
- 
*/

function Stopwatch() {
    let startTime, endTime, running ; // private variables
    let duration = 0;

    this.start = function () {
        // validate if the timer is running
        if (running)
            throw new Error('Stopwatch has already started')
        // otherwise running is set to true
        running = true;
        // and startTime is set to current date
        startTime = new Date();
    };

    this.stop = function () {
        if (!running)
        throw new Error('Stopwatch is not started')
        // otherwise running is set to false
        running = false;
        // and startTime is set to current date
        endTime = new Date();
        // calculate the seconds between endTime and startTime. We divide it for 1000 beacuse we have startTime and endTime in miliseconds
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

        duration += seconds;
    };

    this.reset = function () {
        // simply set the variables to their initial state
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });
}

const sw = new Stopwatch(); // this is our object
