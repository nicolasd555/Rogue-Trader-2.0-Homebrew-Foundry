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