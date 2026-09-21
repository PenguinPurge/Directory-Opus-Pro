class Workout {
    constructor(name, duration, calories) {
        this.name = name;
        this.duration = duration;
        this.calories = calories;
    }

    getCaloriesPerMinute() {
        return this.calories / this.duration;
    }
}

class WorkoutTracker {
    constructor() {
        this.workouts = [];
    }

    addWorkout(name, duration, calories) {
        this.workouts.push(new Workout(name, duration, calories));
    }

    getTotalDuration() {
        return this.workouts.reduce(
            (total, workout) => total + workout.duration,
            0
        );
    }

    getTotalCalories() {
        return this.workouts.reduce(
            (total, workout) => total + workout.calories,
            0
        );
    }

    getAverageCaloriesPerMinute() {
        const duration = this.getTotalDuration();

        if (duration === 0) {
            return 0;
        }

        return this.getTotalCalories() / duration;
    }

    printReport() {
        console.log("Workout Report");
        console.log("==============");

        for (const workout of this.workouts) {
            console.log(
                `${workout.name} | ${workout.duration} min | ${workout.calories} kcal`
            );
        }

        console.log("==============");
        console.log(`Total Duration: ${this.getTotalDuration()} min`);
        console.log(`Total Calories: ${this.getTotalCalories()} kcal`);
        console.log(
            `Average Burn: ${this.getAverageCaloriesPerMinute().toFixed(2)} kcal/min`
        );
    }
}

const tracker = new WorkoutTracker();

tracker.addWorkout("Morning Run", 30, 320);
tracker.addWorkout("Cycling", 45, 480);
tracker.addWorkout("Strength Training", 50, 350);
tracker.addWorkout("Swimming", 40, 420);

tracker.printReport();