import Product from "./model/product";
import { Category } from "./type";

import {
  xboxDescription,
  airpodsDescription,
  airtagDescription,
} from "./items/descriptions";
import AttributeSet, { AttributeType } from "./model/attribute-set";
import Attribute from "./model/attribute";

const shoeSizes = new AttributeSet("Size").addItemList([
  new Attribute("40"),
  new Attribute("41"),
  new Attribute("42"),
  new Attribute("43"),
]);

const clothesSizes = new AttributeSet("Size").addItemList([
  new Attribute("Small", "S"),
  new Attribute("Medium", "M"),
  new Attribute("Large", "L"),
  new Attribute("Extra Large", "XL"),
]);

const colors = new AttributeSet("Color")
  .setType(AttributeType.swatch)
  .addItemList([
    new Attribute("Green", "#44FF03"),
    new Attribute("Cyan", "#03FFF7"),
    new Attribute("Blue", "#030BFF"),
    new Attribute("Black", "#000000"),
    new Attribute("White", "#FFFFFF"),
  ]);

const yesNo = [new Attribute("Yes"), new Attribute("No")];

const capacity = new AttributeSet("Capacity").addItemList([
  new Attribute("512G"),
  new Attribute("1T"),
]);

const products: Product[] = [
  new Product("Dresses")
    .setId("women-cocktail-dresses")
    .setPrice(120)
    .setDescription(
      `<ul class="a-unordered-list a-vertical a-spacing-small"> <span style="font-weight: 400;">
        <li><span class="a-list-item a-size-base a-color-base">COMFY &amp; SOFT MATERIAL: 95%Polyester, 5%Spandex, Women's cocktail dresses is made of lightweight and skin-touch, good quality stretchy fabric, not see through. makes it comfortable to wear in any event. And makes you look elegant and generous!</span></li> </span>
</ul>  <ul class="a-unordered-list a-vertical a-spacing-small"> <span style="font-weight: 400;">
        <li><span class="a-list-item a-size-base a-color-base">STYLISH&amp; FLATTERING DESIGN: Vintage dress, a line dress, ruffle sleeve dress, fit and flare dress that hide belly fat, empire waist dresses, pleated dress, swing dress, knee length dress, womens summer dresses, solid color dress, round neck dress with invisble back zipper, classic audrey hepburn dresses, party Dress, evening dress, cocktail Dress.</span></li> </span>
</ul>  <ul class="a-unordered-list a-vertical a-spacing-small"> <span style="font-weight: 400;">
        <li><span class="a-list-item a-size-base a-color-base">MATCHES TIPS:This elegant a-line party wedding guest dress perfect match with hand bags, heels/wedges/flip flops, nice earrings necklace, jewelry, to complete an elegant look, make you more feminine.</span></li> </span>
</ul>  <ul class="a-unordered-list a-vertical a-spacing-small"> <span style="font-weight: 400;">
        <li><span class="a-list-item a-size-base a-color-base">OCCASIONS:Classy womens vintage fit and flare cocktail dress is easy to dressed up or down depending on the occasion. cocktail dresses for women wedding guests, formal, daily life, wear to work, office, partys, church, beach wedding, wedding guest, prom, cocktail, holiday, honeymoon, cruise, birthdays, dinner, summer evenings, teaching clothes, choir performance, play, mother's day gift, or special occasions.</span></li> </span>
</ul>  <ul class="a-unordered-list a-vertical a-spacing-small"> <span style="font-weight: 400;">
        <li><span class="a-list-item a-size-base a-color-base">Note: This belt is Just a decoration on the dress. Please refer to size chart before your purchase. If you are between the two size, please goes one size up. Garment Care:Hand-wash and Machine washable, Dry Clean.</span></li> </span>
</ul> `
    )
    .addImages([
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Tha+KarPL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/711l+E6tiZL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71kRtz7FaSL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71dZ5IBHdAL._AC_SY550_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71AS-NvTk6L._AC_SY550_.jpg",
    ])
    .setCategory(Category.women)
    .setBrand("Womens Cocktail"),

  new Product("Jacket")
    .setId("jacket-canada-goosee")
    .setPrice(430)
    .addImages([
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
      "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
      "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png",
    ])
    .addAttributeSet(clothesSizes)
    .setBrand("Canada Goose")
    .setDescription("<p>Awesome winter jacket</p>")
    .setCategory(Category.women),

  new Product("Mini Short Dress")
    .setId("scomchic-womens-mini-short-dress")
    .setPrice(700)
    .addImages([
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61qoPSR2Z9L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61vUEM9BScL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61aPSLWkkUL._AC_SX569_.jpg",
    ])
    .setBrand("SCOMCHIC Women's")
    .setInStock(true)
    .setDescription(
      `<ul class="a-unordered-list a-vertical a-spacing-small"> <span style="font-weight: 400;">
<li><span class="a-list-item a-size-base a-color-base">Material: Plus size wrap dress is made of 95% Polyester, 5% Spandex. soft, lightweight and flowy. Thin but not see through at all. Comfortable to wear all year round</span></li> </span>
</ul>  <ul class="a-unordered-list a-vertical a-spacing-small"> <span style="font-weight: 400;">
<li><span class="a-list-item a-size-base a-color-base">Show Your Feminine: The plus size short dress's style is deep v neck long sleeve a line short dress, elegant and sexy. Together with the design of lantern sleeves and waist belt, there is a good effect of covering meat, showing your slim figure and feminine silhouette</span></li> </span>
</ul>  <ul class="a-unordered-list a-vertical a-spacing-small"> <span style="font-weight: 400;">
<li><span class="a-list-item a-size-base a-color-base">Match: The highly anticipated plus size long sleeve dress is the perfect piece for the festive season. Wrap dress is easy to pair with sandals, heels, boots, sneakers or necklace, earrings, hats. High waist design not only can hide tummy and belly fat, but also can make your legs look longer visually</span></li> </span>
</ul>  <ul class="a-unordered-list a-vertical a-spacing-small"> <span style="font-weight: 400;">
<li><span class="a-list-item a-size-base a-color-base">Occasions: The women wrap dress is suitable for party, cocktail, wedding, club, honeymoon, office, outdoor, date, holiday, banquet, vacation, daily wear and so on</span></li> </span>
</ul>  <ul class="a-unordered-list a-vertical a-spacing-small"> <span style="font-weight: 400;">
<li><span class="a-list-item a-size-base a-color-base">Warm Tips: Machine wash in mild or cold water, hang or dry, and do not bleach. If you have any question about this plus size dress, please contact us,we will provide support for you</span></li> </span>
</ul> `
    )
    .addAttributeSet(clothesSizes)
    .setCategory(Category.women),

  new Product("EcoSmart Men's Fleece Sweatpants")
    .setId("hanes-comfortsoft")
    .setPrice(277)
    .addImages([
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71n1CQQB-zL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71qYLHi8-XL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71D-y0BwriL._AC_SX569_.jpg",
    ])
    .setBrand("Hanes ComfortSoft")
    .setInStock(false)
    .setDescription(xboxDescription)
    .setCategory(Category.mens),

  new Product("Hoodie")
    .setId("eco-smart-mens-fleece-sweatpants")
    .setPrice(1400)
    .setBrand("EcoSmart")
    .addImages([
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/817e39xUn-L._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71mV5i5Nd0L._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ls-FFmz5L._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91fFl1BweTL._AC_SX569_.jpg",
    ])

    .setDescription(
      `<ul class="a-unordered-list a-vertical a-spacing-small"> <span style="font-weight: 400;">
    <li><span class="a-list-item a-size-base a-color-base">FLEECE TO FEEL GOOD ABOUT – EcoSmart mid-weight cotton/poly fleece with up to 5% of the poly fibers.</span></li> </span>
</ul>  <ul class="a-unordered-list a-vertical a-spacing-small"> <span style="font-weight: 400;">
    <li><span class="a-list-item a-size-base a-color-base">CLASSIC ZIP-FRONT SILHOUETTE – Full-zip front with a drawstring hood and front pockets.</span></li> </span>
</ul>  <ul class="a-unordered-list a-vertical a-spacing-small"> <span style="font-weight: 400;">
    <li><span class="a-list-item a-size-base a-color-base">MADE TO STAY SOFT – Pill-resistant durable fleece stays warm and cozy.</span></li> </span>
</ul>  <ul class="a-unordered-list a-vertical a-spacing-small"> <span style="font-weight: 400;">
    <li><span class="a-list-item a-size-base a-color-base">HOLDS ITS SHAPE - Thanks to ribbed cuffs and hem.</span></li> </span>
</ul>  <ul class="a-unordered-list a-vertical a-spacing-small"> <span style="font-weight: 400;">
    <li><span class="a-list-item a-size-base a-color-base">MADE TO LAST – Double-needle stitching at the neck and armhole seams for quality and durability, plus a dyed-to-match drawstring at the hood.</span></li> </span>
</ul>  <ul class="a-unordered-list a-vertical a-spacing-small"> <span style="font-weight: 400;">
    <li><span class="a-list-item a-size-base a-color-base">CONVENIENT TEARAWAY TAGS - Getting rid of itchy tags is super easy. Simply tear it off for comfort that lasts all day.</span></li> </span>
</ul>`
    )

    .setCategory(Category.mens),

  new Product("Men's Performance 3.0 Polo")
    .setId("mens-performance-3.0-polo")
    .setPrice(830)
    .setBrand("Under Armour")
    .setDescription(` <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> 93% Polyester, 7% Elastane  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Made in the USA or Imported  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Textured, soft anti-pick, anti-pill fabric has a snag-free finish  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> 4-way stretch material moves better in every direction  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Material wicks sweat &amp; dries really fast  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Updated placket with low-profile buttons for a modern, clean look  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Flat knit ribbed collar  </span></li>  </ul>`)
    .addImages([
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/818bXwEzv9L._AC_SL1425_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71QZveBbbqL._AC_SL1425_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71vGW9S-wJL._AC_SL1425_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61PrZfKPpbL._AC_SL1425_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81kbur21fRL._AC_SX679_.jpg"
    ])
    .addAttributeSet(clothesSizes)
    .setCategory(Category.mens),

  new Product("Hoodie Set")
    .setId("papa-mama-children-cotton")
    .setPrice(249)
    .setBrand("PaPama Children Cotton")
    .addImages([
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61g5AVrPhmL._AC_SX569_.jpg",
    ])
    .setInStock(false)
    .setDescription(airpodsDescription)
    .setCategory(Category.kids),

  new Product("Batman Pullover Hoodie")
    .setId("batman-pullover-hoodie")
    .setPrice(100)
    .setBrand("DC Comics Justice League")
    .addImages([
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61lirRPoZjL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61aPwUobtnL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/611cUgtvFSL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51JzRk4Zb8L._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71MQAwJ194L._AC_SX569_.jpg"
    ])
    .setDescription(airtagDescription)
    .setCategory(Category.kids),
];

export { products };
