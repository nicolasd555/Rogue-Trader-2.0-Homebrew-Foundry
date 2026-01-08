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