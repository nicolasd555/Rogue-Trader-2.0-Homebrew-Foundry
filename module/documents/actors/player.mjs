const { Actor } = foundry.documents;

export class RogueTraderActor extends Actor {

    prepareData() {

        // In case some stepps need to be overwritten later

        super.prepareData();
    }

    prepareDerivedData() {

        const actorData = this.system;

        // Add possibility for switch Stament on the different Actor Types

        this._preparePlayerCharacterData(actorData);
    }

    _preparePlayerCharacterData(actorData) {

        // Calculation of Base Character Values
        actorData.characterName = 'test';

        this._setCharacterValues(actorData);
    }

    async _setCharacterValues(data) {

        // Calculation of Values here!

    }

    get characterName() {
        return this.system.characterName;
    }

    set characterName(value) {
        this.system.characterName = value;
    }
}