const { Actor } = foundry.documents;

export class RogueTraderActor extends Actor {

    prepareData() {

        // In case some stepps need to be overwritten later

        super.prepareData();
    }

    prepareDerivedData() {
        super.prepareDerivedData();

        const actorData = this.system;

        this._setDerivedCharacteristics(actorData);
    }

    // create characteristic modifier fields & set + calculate characteristic bonuses
    _setDerivedCharacteristics(actorData) {
        // create arrays if they don't exist already
        actorData.charBonus ??= {};
        actorData.CharMods ??= {};

        for (let [key, value] of Object.entries(actorData.charNumbers)) {
            // Create individual modifier fields if they don't exist
            actorData.CharMods[key] ??= 0;
            // Calculate characteristic bonuses based on the characteristic's base value + any modifiers.
            actorData.charBonus[key] = this.calculateCharacteristicBonus(value + actorData.CharMods[key]);
        }
    }

    // _preparePlayerCharacterData(actorData) {

    //     // Calculation of Base Character Values

    //     this._setCharacterValues(actorData);
    // }

    // async _setCharacterValues(data) {

    //     // Calculation of Values here!
    //     const actorData = this.system;


    // }

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