const { HTMLField, NumberField, SchemaField, StringField } = foundry.data.fields;
const playercharacter = await playercharacter.implementation.create({
  name: "Test subject", 
  description: "This is a new player character"
});
/* -------------------------------------------- */
/*  Actor Models                                */
/* -------------------------------------------- */

class ActorDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    // All Actors have resources.
    return {
      charactername: new HTMLField(),
      description: new HTMLField(),
      resources: new SchemaField({
        /// basic info and resources
        wounds: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 1 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 100 })
        }),
        damage: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        }),
        fate: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 1 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 100 })
        }),
      }),     
        /// characteristics
      characteristics: new SchemaField({
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
      }),
        /// skills
      skillsvalue: new SchemaField({
        acrobatics: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        acrobatics: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        athletics: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        awareness: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),  
        charm: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        command: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        commerce: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        commonlore: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        deceive: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        dodge: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        forbiddenlore: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        inquiry: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        interrogation: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        intimidate: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        invocation: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        linguistics: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        logic: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        medicae: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        navigate: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        operate: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        parry: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        psyniscience: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        scholasticlore: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        scrutiny: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        security: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        sleightofhand: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        stealth: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        survival: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        techuse: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
        trade: new StringField({
          required: true,
          blank: false,
          options: ["untrained", "+10%", "+20%"],
          initial: "untrained"
        }),
      }),
              /// skills basic/advanced settings
      skillsbasicswitch: new SchemaField({
        acrobatics: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "advanced"
        }),
        athletics: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "basic"
        }),
        awareness: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "basic"
        }),  
        charm: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "basic"
        }),
        command: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "basic"
        }),
        commerce: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "advanced"
        }),
        commonlore: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "advanced"
        }),
        deceive: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "basic"
        }),
        dodge: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "basic"
        }),
        forbiddenlore: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "advanced"
        }),
        inquiry: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "basic"
        }),
        interrogation: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "advanced"
        }),
        intimidate: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "basic"
        }),
        invocation: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "advanced"
        }),
        linguistics: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "advanced"
        }),
        logic: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "basic"
        }),
        medicae: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "advanced"
        }),
        navigate: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "advanced"
        }),
        operate: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "advanced"
        }),
        parry: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "basic"
        }),
        psyniscience: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "advanced"
        }),
        scholasticlore: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "advanced"
        }),
        scrutiny: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "basic"
        }),
        security: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "advanced"
        }),
        sleightofhand: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "advanced"
        }),
        stealth: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "basic"
        }),
        survival: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "advanced"
        }),
        techuse: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "advanced"
        }),
        trade: new StringField({
          required: true,
          blank: false,
          options: ["basic", "advanced"],
          initial: "advanced"
        }),
      }),
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

export class NPCDataModel extends ActorDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema()
    };
  }
}

/* -------------------------------------------- */
/*  Item Models                                 */
/* -------------------------------------------- */

/// All items have these fields
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

/// Unused base clase for weaponry
class WeaponDataModel extends ItemDataModel {
  static defineSchema() {
    return {
        ...super.defineSchema(),
        class: new StringField({
          required: true,
          blank: false,
          options: ["Pistol", "Basic", "Heavy", "Melee", "Thrown", "Missile"],
          initial: "Pistol"
        }),        
        damage: new HTMLField({
          required: true,
          initial: "1d10", // Default value
          blank: true,
        }),
        damagetype: new HTMLField({
          required: true,
          blank: false,
          options: ["Energy", "Explosive", "Rending", "Impact", "Special"],
        }),
        range: new NumberField({ required: true, integer: true, nullable: true, min: 0, initial: 0 }),
        penetration: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        special: new HTMLField({
          required: true,
          blank: true,
          options: [""]
        }),
        weight: new NumberField({ required: true, integer: true, positive: true, initial: 0 }),
    };
  }
}

/// Only ranged weapons have these qualities
export class RangedWeaponDataModel extends WeaponDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      type: new StringField({
        required: true,
        blank: false,
        options: [
          "Bolt", 
          "Exotic", 
          "Flame", 
          "Las", 
          "Launcer", 
          "Melta", 
          "Plasma", 
          "Primitive", 
          "Solid Projectile"
        ],
        initial: "Solid Projectile"
      }),
    rateoffire: new HTMLField({
      required: true,
      blank: false,
      options: [""]
    }),
    clip: new NumberField({ required: true, integer: true, min: 1, initial: 1 }),
    reload: new HTMLField({
      required: true,
      initial: "Half", // Default value
      nullable: false,
    }),
    };
  }
}

/// Only melee weapons have these qualities
export class MeleeWeaponDataModel extends WeaponDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      type: new StringField({
        required: true,
        blank: false,
        options: [
          "Chain",
          "Exotic",
          "Power",
          "Primitive", 
          "Shock",
        ],
        initial: "Primitive"
      }),
      class: new StringField({
        required: true,
        blank: false,
        options: ["Pistol", "Basic", "Heavy", "Melee", "Thrown", "Missile"],
        initial: "Melee"
      }),
    };
  }
}

/// Only grenades have these qualities
export class GrenadeDataModel extends WeaponDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      type: new StringField({
        required: true,
        blank: false,
        initial: "Grenade"
      }),
      class: new StringField({
        required: true,
        blank: false,
        initial: "Thrown"
      }),
      range: new HTMLField({
        required: true,
        initial: "SB*3", // Default value
        nullable: false,
      }),
      rateoffire: new HTMLField({
        required: true,
        blank: false,
        options: [""]
      }),
    };
  }
}

/// Only missiles have these qualities
export class MissileDataModel extends WeaponDataModel {
  static defineSchema() {
    return {
      ...super.defineSchema(),
      type: new StringField({
        required: true,
        blank: false,
        initial: "Missile"
      }),
      rateoffire: new HTMLField({
        required: true,
        blank: false,
        options: [""]
      }),
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

export class GearDataModel extends ItemDataModel {
  static defineSchema() {
    return { ...super.defineSchema() };
  }
}