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