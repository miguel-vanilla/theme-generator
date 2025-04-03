✨ Theme Generator ✨
----------------------

Stop wrestling with CSS variables or complex Tailwind configs! Theme Generator is your intuitive web application designed to visually create stunning and consistent themes for your web projects. Effortlessly customize fonts, colors, spacing, and more, with a real-time preview showing how your design choices look on common UI elements. Export your theme for seamless integration with Tailwind CSS or use it directly with raw CSS custom properties.

Try the free demo now at: **[https://themegen.cloudhost.pt](https://themegen.cloudhost.pt)**
--

Tired of manually tweaking styles across your project? Theme Generator provides a visual interface to define your core design tokens, ensuring consistency and speeding up your development workflow. Build beautiful, cohesive themes by customizing 7 key areas, see your changes instantly, and export the results in ready-to-use formats.

🚀 **Key Features**

* 🎨 **7 Customization Areas:** Fine-tune Fonts, Breakpoints, Colors, Typography, Roundness, Shadows, and Input Styling.
* 👁️ **Real-time Preview:** Instantly see how your theme choices affect common UI elements like buttons, inputs, and text styles.
* 💨 **Tailwind CSS Ready:** Generate a `theme` object ready to be dropped into your `tailwind.config.js`.
* 🍦 **Raw CSS Output:** Export your theme as clean CSS custom properties for use in any CSS or framework context.
* ⚙️ **Intuitive Interface:** Easily navigate between customization sections and adjust values with simple controls.
* 💾 **(Planned) Save & Load:** Save your themes locally or in the cloud to reuse or share them later.


⚙️ **Customizable Areas**
--------------------------
1.  **Fonts:**
    * Define primary (e.g., body) and secondary (e.g., headings) font families.
    * Specify font weights and styles available in your theme.
    * *(Potential: Set base font size)*
2.  **Breakpoints:**
    * Customize the screen sizes (`sm`, `md`, `lg`, `xl`, `2xl`) used for responsive design in Tailwind or media queries.
3.  **Colors:**
    * Create palettes for primary, secondary, accent, neutral, success, warning, and error colors.
    * Define shades for each color (e.g., from 50 to 900) for versatile use.
4.  **Typography:**
    * Configure font sizes, weights, and line heights for different text elements (e.g., headings H1-H6, paragraphs).
    * Ensure consistent vertical rhythm and readability.
5.  **Roundness (Border Radius):**
    * Define a scale for border radius values (e.g., `sm`, `md`, `lg`, `full`) to apply consistent corner rounding to elements like buttons and cards.
6.  **Shadows:**
    * Design a set of box-shadow values (e.g., `sm`, `md`, `lg`, `xl`) for creating depth and elevation effects.
7.  **Input Styling:**
    * Customize the appearance of form inputs, text areas, and selects, including border color, background, focus states, and padding.


👁️ **Real-time Preview**
------------------------
As you adjust settings in any of the 7 customization areas, the preview panel updates instantly. This panel typically showcases:

* **Buttons:** Primary, secondary, and potentially other variants, demonstrating color, roundness, and font usage.
* **Text Elements:** Headings and paragraphs showing typography and color application.
* **Inputs:** Form fields reflecting your input styling choices.
* **Cards/Containers:** Elements displaying background colors, shadows, and roundness.
* **(Potential) Color Palette Swatches:** Direct visualization of your defined colors.

This immediate feedback loop allows you to iterate quickly and make informed design decisions without constantly switching contexts or recompiling assets.


💨 **Export Options**
---------------------
Once you're satisfied with your theme, you can easily export it:

1.  **Tailwind CSS Config:** Generates a JavaScript object structured perfectly for the `theme` or `theme.extend` section of your `tailwind.config.js` file.
2.  **Raw CSS Variables:** Produces a CSS file containing all your theme values defined as custom properties (e.g., `--color-primary: #ff0000;`, `--rounded-md: 0.375rem;`), typically scoped under `:root`. This allows you to use the theme in any project, regardless of whether it uses Tailwind.


🤔 **How It Works**
--------------------
1.  **Navigate:** Select one of the 7 customization areas (Fonts, Colors, etc.) from the sidebar or navigation.
2.  **Customize:** Use the controls (color pickers, sliders, text inputs) within that section to adjust the theme values.
3.  **Preview:** Observe the Real-time Preview panel to see the immediate effect of your changes on sample components.
4.  **Iterate:** Move between sections, refining your theme until you achieve the desired look and feel.
5.  **Export:** Click the "Export" button and choose either the Tailwind CSS config format or the Raw CSS variables format. Copy or download the generated code.
6.  **Integrate:** Paste the generated code into your `tailwind.config.js` or your main CSS file.


💻 **Technology**
-----------------
* Built with **React** for a modern, interactive user experience.
* Leverages modern web technologies for real-time updates and efficient styling.


✨ **Benefits of Using Theme Generator**
----------------------------------------
* **Streamline Theme Creation:** Visually build themes much faster than writing code manually.
* **Ensure Design Consistency:** Apply uniform styling across your entire application with ease.
* **Accelerate Development:** Quickly generate boilerplate theme configurations for Tailwind or CSS.
* **Visualize Instantly:** Make design decisions confidently with the real-time preview.
* **Easy Customization:** Tailor every key aspect of your theme through a user-friendly interface.
* **Flexible Output:** Use your theme in Tailwind projects or any standard CSS setup.


🚀 **Getting Started**
----------------------
1.  Visit the Theme Generator website at **[https://themegen.cloudhost.pt](https://themegen.cloudhost.pt)**.
2.  Explore the 7 customization sections.
3.  Start adjusting values – pick colors, define typography scales, set breakpoints.
4.  Watch the real-time preview update.
5.  Once happy, click "Export" and choose your desired format.


💡 **Use Cases**
-----------------
* **Rapid Prototyping:** Quickly establish a visual style for new projects.
* **Branding Implementation:** Translate brand guidelines into a functional web theme.
* **Design System Foundation:** Define the core design tokens for a larger system.
* **Personal Projects:** Easily create a unique look for your own websites or apps.
* **Learning Tailwind Themeing:** Understand how different configuration options affect the final design.
* **Generating CSS Variables:** Create a set of CSS custom properties for non-Tailwind projects.


🛣️ **Future Enhancements**
---------------------------
* **Theme Saving/Loading:** Persist themes in local storage or potentially a cloud backend.
* **Theme Sharing:** Generate shareable links for specific theme configurations.
* **Pre-built Templates:** Offer starting templates for common styles (e.g., Material Design, Bootstrap-like).
* **More CSS Properties:** Expand customization to include spacing, transitions, etc.
* **Advanced Preview Components:** Add more complex components to the preview area.
* **Import/Export Formats:** Support importing from existing configs or exporting in different formats (e.g., JSON, SCSS).


🤝 **Contributing**
--------------------
We welcome contributions from the community! If you have ideas for new features, bug fixes, or improvements, please feel free to contribute to the project repository *(Link to be added if applicable)*.


📄 **License**
---------------
Theme Generator is licensed under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


📞 **Support**
--------------
Theme Generator is provided as is. While there is no official dedicated support channel at this time, community feedback and contributions are highly appreciated. *(Adjust if official support exists)*.
