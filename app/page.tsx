"use client";

// client side approach
import GridBackground from "@/components/ui/GridBackground";
import Image from "next/image";
import { useState } from "react";
import QRCode from "qrcode";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, Printer, Share2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  // input field rotating placeholder text
  const placeholders = [
    "Enter a link",
    "https://github.com/jediahjireh",
    "https://jediahjireh.vercel.app",
    "https://www.linkedin.com/in/jediahjireh/",
    "https://jediahjireh.netlify.app",
    "mailto:jediahnaicker@gmail.com",
  ];

  // link and code states
  const [link, setLink] = useState<string>("");
  const [imageSrc, setImageSrc] = useState<string>("");
  const [submittedLink, setSubmittedLink] = useState<string>("");

  // generate QR code from link
  const generate = () => {
    if (link) {
      QRCode.toDataURL(link).then(setImageSrc);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedLink(link);
    generate();
  };

  const printImage = () => {
    const pdfWindow = window.open("", "_blank");
    pdfWindow?.document.write(`
    <html>
      <head>
        <title>Print QR Code</title>
      </head>
        <body>
          <img src="${imageSrc}" style="max-width: 100%; height: auto;"/>
        </body>
    </html>
    `);
    pdfWindow?.document.close();
    pdfWindow?.print();
  };

  const downloadImage = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = imageSrc;

    const shortenedLink = link
      .replace(/https?:\/\//, "")
      .replace(/http?:\/\//, "")
      .replace(/^www\./, "")
      // slashes with hyphens
      .replace(/\//g, "-")
      // question marks with underscores
      .replace(/\?/g, "_")
      // ampersands with underscores
      .replace(/&/g, "_")
      // remaining invalid characters except dot
      .replace(/[^a-zA-Z0-9./\_-]/g, "")
      // remove last character if it is not a letter or number
      .replace(/[_\-.]+$/, "");

    downloadLink.download = `qr-code (${encodeURIComponent(
      shortenedLink
    )}).png`;
    downloadLink.click();
  };

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4 dark">
      <GridBackground />
      <main className="z-0">
        <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
          Generate QR Code
        </h2>

        {/* link input field */}
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />

        {/* display if QR code has been generated */}
        {imageSrc && (
          <Card className="mt-8">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <Image
                  src={imageSrc}
                  alt="QR Code Image"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="icon" onClick={printImage}>
                    <Printer className="h-4 w-4" />
                    <span className="sr-only">Print</span>
                  </Button>
                  <Button variant="outline" size="icon" onClick={downloadImage}>
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                  <Button variant="outline" size="icon" disabled>
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button variant="outline" size="icon" disabled>
                    <FaWhatsapp className="h-4 w-4" />
                    <span className="sr-only">Share on WhatsApp</span>
                  </Button>
                  <Button variant="outline" size="icon" disabled>
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
              </div>
              <p className="text-sm text-gray-600 break-all">{submittedLink}</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
