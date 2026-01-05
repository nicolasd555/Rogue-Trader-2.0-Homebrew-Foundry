const { HTMLField, NumberField, SchemaField, StringField } = foundry.data.fields;

/* -------------------------------------------- */
/*  Actor Models                                */
/* -------------------------------------------- */

class ActorDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    // All Actors have resources.
    return {
      resources: new SchemaField({
        /// basic info and resources
        charactername: new HTMLField(),
        description: new HTMLField(),
        health: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 1 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 100 })
        }),
        fate: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 1 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 100 })
        }),
        damage: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        }),        
        movement: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        }),
        /// characteristics
        weaponskill: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        }),
        ballisticskill: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        }),
        strength: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        }),
        toughness: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        }),
        agility: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        }),
        intelligence: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        }),
        perception: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        }),
        willpower: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        }),
        fellowship: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        }),
        /// skills
        acrobatics: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        acrobatics: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        athletics: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        awareness: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),  
        charm: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        command: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        command: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        commerce: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        commonlore: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        command: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        deceive: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        dodge: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        forbiddenlore: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        inquiry: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        interrogation: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        intimidate: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        invocation: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        linguistics: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        logic: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        medicae: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        navigate: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        operate: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        parry: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        psyniscience: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        scholasticlore: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        scrutiny: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        security: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        selightofhand: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        stealth: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        survival: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        techuse: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
        trade: new StringField({
          required: true,
          blank: false,
          options: ["untrained (basic)", "untrained (advanced)", "+10%", "+20%"],
          initial: "untrained (basic)"
        }),
      })
    };
  }
}

export class PlayerCharacterDataModel extends ActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
        playername: new HTMLField(),
        careerpath: new HTMLField(),
        homeworld: new HTMLField(),
        birthright: new HTMLField(),
        lureofthevoid: new HTMLField(),
        trialsandtravails: new HTMLField(),
        motivation: new HTMLField(),
        rank: new HTMLField(),
        Rank: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 1, initial: 1 }),
          value: new NumberField({ required: true, integer: true, min: 1, initial: 1 }),
          max: new NumberField({ required: true, integer: true, min: 1, initial: 1 })
        }),
    };
  }
}

export class NPC extends ActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema()
    };
  }
}

/* -------------------------------------------- */
/*  Item Models                                 */
/* -------------------------------------------- */

class ItemDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      name: new HTMLField(),
      availability: new StringField({
        required: true,
        blank: false,
        options: ["Ubiquitous", "Abundant", "Plentiful", "Common", "Average", "Scarce", "Rare", "Very Rare", "Extremely Rare", "Near Unique", "Unique"],
        initial: "common"
      }),
      craftsmanship: new StringField({
        required: true,
        blank: false,
        options: ["Poor", "Common", "Good", "Best"],
        initial: "common"
      }),
      description: new HTMLField(),
    };
  }
}

export class RangedWeaponDataModel extends ItemDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      damagetype: new StringField({
        required: true,
        blank: false,
        options: ["Pistol", "Basic", "Heavy"],
        initial: "Pistol"
      }),
      damage: new HTMLField({
        required: true,
        initial: "1d10", // Default value
        nullable: false,
      }),
      damagetype: new StringField({
        required: true,
        blank: false,
        options: ["Energy", "Explosive", "Rending", "Impact"],
        initial: "Impact"
      }),
      range: new NumberField({ required: true, integer: true, min: 1, initial: 1 }),
      rateoffire: new StringField({
        required: true,
        blank: false,
        options: [""]
      }),
      penetration: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
      clip: new NumberField({ required: true, integer: true, min: 1, initial: 1 }),
      reload: new HTMLField({
        required: true,
        initial: "Half", // Default value
        nullable: false,
      }),
      special: new StringField({
        required: true,
        blank: false,
        options: [""]
      }),
      weight: new NumberField({ required: true, integer: true, positive: true, initial: 0 }),
    };
  }
}

export class ArmorDataModel extends ItemDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      locations: new StringField({
        required: true,
        blank: false,
        options: ["Arms", "Body", "Legs", "Head"],
        initial: "common"
      }),
      weight: new NumberField({ required: true, integer: true, positive: true, initial: 0 }),
      armorpoints: new NumberField({ required: true, integer: true, positive: true, initial: 0 }),
    };
  }
}