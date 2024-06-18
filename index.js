const events = require('events');
const { emit } = require('process');
class FitnessTracker extends events.EventEmitter{
    constructor(){
        super();
        this.progress = 0;
        this.goal = 1000;
    }
    addExercise(exercise){
        this.progress += exercise.caloriesBurned;
        if(this.progress >= this.goal){
            this.emit('goalReached');
        }
    }
}


const tracker = new FitnessTracker;
tracker.on('goalReached',()=>{
    console.log('Congratulations! You have reached your fitness goal');
});


tracker.addExercise({name : "Running", caloriesBurned : 500});
tracker.addExercise({name : "WeightLifting", caloriesBurned : 600});