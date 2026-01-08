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