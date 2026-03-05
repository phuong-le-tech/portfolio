import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactInfo } from "@/types";

// Social links are imported from hero.ts as single source of truth
export { socialLinks } from "@/data/hero";

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "phuong.le77100@gmail.com",
    href: "mailto:phuong.le77100@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+33 6 95 32 43 98",
    href: "tel:+33695324398",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Meaux, Seine-et-Marne, France",
    href: "https://maps.app.goo.gl/zY8ZEXHXCMJWLW118",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Mon - Fri, 9AM - 6PM UTC+2",
    href: null,
  },
];
