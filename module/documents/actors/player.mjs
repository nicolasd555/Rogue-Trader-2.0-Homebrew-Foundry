const { Actor } = foundry.documents;

export class RogueTraderActor extends Actor {

    prepareData() {

        // In case some stepps need to be overwritten later

        super.prepareData();
    }

    prepareDerivedData() {
        super.prepareDerivedData();

        const actorData = this.system;

        // Set derived characteristics
        this._setDerivedCharacteristics(actorData);

        // Set movement values
        this._setMovementValues(actorData);
    }

    // create characteristic modifier fields & set + calculate characteristic bonuses
    _setDerivedCharacteristics(actorData) {
        // create arrays if they don't exist already
        actorData.charBonus ??= {};
        actorData.charMods ??= {};

        for (let [key, value] of Object.entries(actorData.charNumbers)) {
            // Create individual modifier fields if they don't exist
            actorData.charMods[key] ??= 0;
            // Calculate characteristic bonuses based on the characteristic's base value + any modifiers.
            actorData.charBonus[key] = this.calculateCharacteristicBonus(value + actorData.charMods[key]);
        }
    }

    // Calculate and set movement values as fields
    _setMovementValues(actorData) {
        const agilityBonus = this.calculateCharacteristicBonus(actorData.charNumbers.agility);

        // Ensure all movement fields are set.
        actorData.movement ??= {};
        actorData.movement.half ??= 0;
        actorData.movement.full ??= 0;
        actorData.movement.charge ??= 0;
        actorData.movement.run ??= 0;

        const movement = actorData.movement;

        // Half movement is normally equal to agility bonus, but if agility bonus is <1 it has to be set manually to 0.5
        if (agilityBonus !== 0) {
            movement.half = agilityBonus;
        } else {
            movement.half = 0.5;
        }

        // Calculate values for remaining movement types.
        const half = movement.half;
        movement.full = half * 2;
        movement.charge = half * 3;
        movement.run = half * 6;
    }

    get characterName() {
        return this.system.characterName;
    }

    set characterName(value) {
        this.system.characterName = value;
    }

    get playerName() {
        return this.system.characterName;
    }

    set playerName(value) {
        this.system.characterName = value;
    }

    // Calculate characteristic bonus, include modifiers later
    calculateCharacteristicBonus(value) {
        var number = value/10;
        return number - number % 1;
    }
}