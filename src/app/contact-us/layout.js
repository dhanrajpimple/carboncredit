export const metadata = {
  title: "Platform Help and Navigation",
  description: "Access farmer registration, marketplace listings and the legal contact information provided in the Terms and Conditions.",
  alternates: {
    canonical: "https://buycarboncredit.in/contact-us",
  },
  openGraph: {
    title: "Platform Help and Navigation",
    description: "Find farmer registration, seller listings and platform legal information.",
    url: "https://buycarboncredit.in/contact-us",
    type: "website",
  },
  robots: { index: false, follow: true },
};

export default function ContactUsLayout({ children }) {
  return <>{children}</>;
}
