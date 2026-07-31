import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center", className)} aria-label="Nexcore home">
      <Image
        src="/branding/nexcore-logo-light.png"
        alt="Nexcore Systems"
        width={780}
        height={382}
        className="h-12 w-auto object-contain dark:hidden sm:h-14"
        priority
        sizes="(max-width: 640px) 112px, 124px"
      />
      <Image
        src="/branding/nexcore-logo-dark.png"
        alt="Nexcore Systems"
        width={780}
        height={382}
        className="hidden h-12 w-auto object-contain dark:block sm:h-14"
        priority
        sizes="(max-width: 640px) 112px, 124px"
      />
    </Link>
  );
}
