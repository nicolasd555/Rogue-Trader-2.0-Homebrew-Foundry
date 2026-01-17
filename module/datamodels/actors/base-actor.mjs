const { HTMLField, NumberField, SchemaField, StringField } = foundry.data.fields;

/* -------------------------------------------- */
/*  Actor Models                                */
/* -------------------------------------------- */

export class ActorDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    // Actor datamodel setup, all sheets should have this
    return {
      characterName: new HTMLField(),
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
        weaponskill: new NumberField({ required: true, integer: true, min: 0, max: 100, initial: 25 }),
        ballisticskill: new NumberField({ required: true, integer: true, min: 0, max: 100, initial: 25 }),
        strength: new NumberField({ required: true, integer: true, min: 0, max: 100, initial: 25 }),
        toughness: new NumberField({ required: true, integer: true, min: 0, max: 100, initial: 25 }),
        agility: new NumberField({ required: true, integer: true, min: 0, max: 100, initial: 25 }),
        intelligence: new NumberField({ required: true, integer: true, min: 0, max: 100, initial: 25 }),
        perception: new NumberField({ required: true, integer: true, min: 0, max: 100, initial: 25 }),
        willpower: new NumberField({ required: true, integer: true, min: 0, max: 100, initial: 25 }),
        fellowship: new NumberField({ required: true, integer: true, min: 0, max: 100, initial: 25 }),
      }),
        /// skills
      skillsValue: new SchemaField({
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
        commonLore: new StringField({
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
        forbiddenLore: new StringField({
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
        scholasticLore: new StringField({
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
        sleightOfHand: new StringField({
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
        techUse: new StringField({
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
      skillsBasicSwitch: new SchemaField({
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
        commonLore: new StringField({
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
        forbiddenLore: new StringField({
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
        scholasticLore: new StringField({
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
        sleightOfHand: new StringField({
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
        techUse: new StringField({
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