// FAQ for /ebo-graphics-library. Plain text, because seo.js also turns it
// into FAQPage structured data at build time.
export const eboLibraryFaqs = [
  {
    question: 'Which EBO versions does it work with?',
    answer:
      'The site themes need EcoStruxure Building Operation 6.0 or later. The library components are standard EBO graphics components (.tgmlcomponent). If you are not sure about your version, email design@3d-custom.com before you buy.',
  },
  {
    question: 'How do I import the library components?',
    answer:
      'Add the .tgmlcomponent files to your Graphics Editor component library, drag a component onto any graphic and bind its points (status, value, position, mode or alarm, depending on the part).',
  },
  {
    question: 'How do I import a site theme?',
    answer:
      'In WorkStation, import the .xml file into the folder where you want the site. The pages, header, navigation and ~450 demo points come in ready to run; then point the bindings at your real points.',
  },
  {
    question: 'What does the license allow?',
    answer:
      'It is a one-time purchase with no subscription. You can use the files on unlimited projects inside your company.',
  },
  {
    question: 'Can I use the graphics in Niagara, Metasys or another BMS?',
    answer:
      'Yes. The equipment and AHU parts also come as PNG (OFF) and animated GIF (ON) files, and the pipes as PNG, so they work in any front end that accepts images. The live binds and states are built for EBO. The site themes are EBO only.',
  },
  {
    question: 'How do I get the files?',
    answer:
      'Pay online and you can download right away. There is no quote request and no sales call.',
  },
];
