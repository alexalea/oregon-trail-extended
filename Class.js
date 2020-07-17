class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        this.food += 2
    }
    eat() {
        if (this.food <= 0) {
            this.isHealthy = false
        } else {
            this.food --
        }
    }
}

//Doctor Class

class Doctor extends Traveler{
    constructor (name) {
        super(name)
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    heal(traveler) {
        return traveler.isHealthy = true
    }
}


//Hunter Class

class Hunter extends Traveler{
    constructor (name, food = 2, isHealthy) {
        super(name, food, isHealthy)
        this.food = food
    }
    eat() {
        if(this.food < 2) {
            this.food = 0
            this.isHealthy = false
        } else {
            this.food -= 2
        }
        return this.food
    }
    hunt() {
        return this.food += 5
    }
    giveFood(traveler, numOfFoodUnits) {
        if(this.food - numOfFoodUnits > 0) {
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
        } else {
            traveler.food += 0
        }
    }
}


//Wagon Class

class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(traveler) {
        if(this.capacity > this.passengers.length) {
           this.passengers.push(traveler)
        }
    }
    shouldQuarantine() {
        return (this.passengers.some(traveler => traveler.isHealthy === false))
    }
    totalFood() {
        let allFood = 0
        for(let index = 0; index < this.passengers.length; index ++) {
            let currentPassenger = this.passengers[index]
            allFood += currentPassenger.food
        }
        return allFood
    }
}

console.log(Traveler)
console.log(Wagon)