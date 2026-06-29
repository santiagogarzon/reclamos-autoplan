"use client";

import { WHATSAPP_HREF } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/analytics";

interface WhatsAppLinkProps {
  location: string;
  className?: string;
  children: React.ReactNode;
}

export default function WhatsAppLink({ location, className, children }: WhatsAppLinkProps) {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(location)}
      className={className}
    >
      {children}
    </a>
  );
}
