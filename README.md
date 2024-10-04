# QR Code Generator

A QR Code generator built using **Next.js**. This application allows users to input a link and generate a QR code that can be downloaded, printed or shared.

## Features

- Client-side QR code generation
- Displays a generated QR code with options to print and download
- Rotating placeholder text for the input field
- Responsive design with a clean interface

## Technologies Used

- **Next.js**: React framework for server-side rendering
- **QRCode**: Library for generating QR codes
- **Lucide-react** and **React Icons**: Icon libraries for UI elements
- **TypeScript**: For type safety and improved developer experience

## Installation

1. **Clone the repository**

   ```zsh
   git clone https://github.com/jediahjireh/qr-code-generator.git
   cd qr-code-generator
   ```

2. **Install dependencies**

   ```zsh
   npm install
   ```

3. **Run the development server**

   ```zsh
   npm run dev
   ```

4. **Open your browser**
   Navigate to the [default localhost](http://localhost:3000) to view the application.

## Usage

1. Enter a URL or email address link in the input field. The input field has rotating placeholder text to guide you.
2. Click the **Generate QR Code** button to create your QR code.
3. Once generated, the QR code will be displayed along with options to:
   - **Print**: Opens a print window for the QR code.
   - **Download**: Downloads the QR code image as a PNG file.
   - **Share via Email**: (Disabled) Future feature.
   - **Share on WhatsApp**: (Disabled) Future feature.
   - **Share**: (Disabled) Future feature.

The link you entered will be displayed below the QR code and it will remain unchanged even while inputting a new link, up until the submission of the new link for new QR code generation.

## Code Structure

- **components/**: Contains reusable UI components, such as buttons and card layouts.
- **apps/**: Contains the main application logic and QR code generation functionality.

## Future Enhancements

- [ ] Implement a server-side approach for generating QR codes.
- [ ] Add functionality to share QR codes via email, Whatsapp and other social media platforms.
- [ ] Enhance the design with more custom styles and themes.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.
