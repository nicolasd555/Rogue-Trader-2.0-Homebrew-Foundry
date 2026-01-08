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